Template.deskPage.helpers({
	dcomments: function() {
		return Dcomments.find({postId:this._id});
	}
});
