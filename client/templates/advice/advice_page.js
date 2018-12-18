Template.advicePage.helpers({
	acomments: function() {
		return Acomments.find({postId:this._id});
	}
});
