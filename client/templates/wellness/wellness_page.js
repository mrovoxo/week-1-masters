Template.wellnessPage.helpers({
	wcomments: function() {
		return Wcomments.find({postId:this._id});
	}
});
