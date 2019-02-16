Template.dcommentItem.events({
	'click':function() {
		Session.set('selected_comment', this._id);
	},

	'click a.no':function() {
	if (Meteor.user()) {
		var postId = Dcomments.findOne({_id:this._id});
		if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
			console.log('User already voted');
		} else {
			var commentId = Session.get('selected_comment');
			console.log('Voting');
			Meteor.call('dcommentScoreUpdate', commentId);
			}
		}
	},

	'click a.delete':function() {
	  Meteor.call('dcommentRemove', this._id);
	  console.log('comment deleted');
	},
});
