Template.advicePage.helpers({
	comments: function() {
		return Acomments.find({postId:this._id});
	}
});
