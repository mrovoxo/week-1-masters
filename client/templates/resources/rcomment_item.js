Template.rcommentItem.events({
	'click':function() {
		Session.set('selected_rcomment', this._id);
	},

	'click a.no':function() {
		if (Meteor.user()) {
			var postId = Rcomments.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var rcommentId = Session.get('selected_rcomment');
				console.log('Voting');
				Rcomments.update(rcommentId, {$inc: {'score': -1 }});
				Rcomments.update(rcommentId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('danger');
				}
			}
		}
	},

	'click a.delete':function() {
		Rcomments.remove({_id:this._id});
	},
});
