Template.acommentItem.events({
	'click':function() {
		Session.set('selected_acomment', this._id);
	},

	'click a.no':function() {
		if (Meteor.user()) {
			var postId = Acomments.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var acommentId = Session.get('selected_acomment');
				console.log('Voting');
				Acomments.update(acommentId, {$inc: {'score': -1 }});
				Acomments.update(acommentId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('danger');
				}
			}
		}
	},

	'click a.delete':function() {
		Acomments.remove({_id:this._id});
	},
});
