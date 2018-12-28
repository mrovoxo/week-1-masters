Template.commentItem.events({
	'click':function() {
		Session.set('selected_comment', this._id);
	},

	'click a.no':function() {
		if (Meteor.user()) {
			var postId = Comments.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var commentId = Session.get('selected_comment');
				console.log('Voting');
				Comments.update(commentId, {$inc: {'score': -1 }});
				Comments.update(commentId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('danger');
				}
			}
		}
	},

	'click a.delete':function() {
		Comments.remove({_id:this._id});
	},
});
