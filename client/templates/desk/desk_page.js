Template.deskPage.helpers({
	comments: function() {
		return Dcomments.find({postId:this._id});
	}
});
