Template.inviteItem.events({
	'click':function() {
		Session.set('selected_note', this._id);
	},
});

/*
Template.inviteItem.helpers({
	commentsCount: function() {
		return Acomments.find({postId:this._id}).count();
	}
});
*/
