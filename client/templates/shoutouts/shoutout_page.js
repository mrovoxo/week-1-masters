Template.shoutoutPage.helpers({
	scomments: function() {
		return Scomments.find({postId:this._id});
	}
});
