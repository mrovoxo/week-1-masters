Template.resourcePage.helpers({
	rcomments: function() {
		return Rcomments.find({postId:this._id});
	}
});
