Template.resourcePage.helpers({
	comments: function() {
		return Rcomments.find({postId:this._id});
	}
});
