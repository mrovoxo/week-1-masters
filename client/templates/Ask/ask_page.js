Template.askPage.helpers({
	comments: function() {
		return Askcomments.find({postId:this._id});
	}
});
