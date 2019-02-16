Template.shoutoutPage.helpers({
	comments: function() {
		return Scomments.find({postId:this._id});
	}
});
