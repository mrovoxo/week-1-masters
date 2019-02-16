Template.askCommentItem.events({
	'click':function() {
		Session.set('selected_comment', this._id);
	},

  'click a.no':function() {
	if (Meteor.user()) {
		var postId = Askcomments.findOne({_id:this._id});
		if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
			console.log('User already voted');
		} else {
			var commentId = Session.get('selected_comment');
			console.log('Voting');
			Meteor.call('askCommentScoreUpdate', commentId);
			}
		}
	},

	'click a.delete':function() {
	  Meteor.call('askCommentRemove', this._id);
	  console.log('Comment deleted');
	},
});
