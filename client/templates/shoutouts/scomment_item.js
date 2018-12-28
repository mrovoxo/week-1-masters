Template.scommentItem.events({
	'click':function() {
		Session.set('selected_scomment', this._id);
	},

	'click a.no':function() {
		if (Meteor.user()) {
			var postId = Scomments.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var scommentId = Session.get('selected_scomment');
				console.log('Voting');
				Scomments.update(scommentId, {$inc: {'score': -1 }});
				Scomments.update(scommentId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('danger');
				}
			}
		}
	},

	'click a.delete':function() {
		Scomments.remove({_id:this._id});
	},
});
