Template.wellnessPage.helpers({
	comments: function() {
		return Wcomments.find({postId:this._id});
	}
});
