Template.acommentItem.events({
	'click':function() {
		Session.set('selected_comment', this._id);
	},

	'click a.no':function() {
		if (Meteor.user()) {
			var postId = Acomments.findOne({_id:this._id});
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var commentId = Session.get('selected_comment');
				console.log('Voting');
				Meteor.call('acommentScoreUpdate', commentId);
				}
			}
	},

	'click a.delete':function() {
		Meteor.call('acommentRemove', this._id);
	  console.log('comment deleted');	},
});
