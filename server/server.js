Meteor.methods({
	yakInsert: function(yak) {
		var postId = Yaks.insert({
			yak : yak,
			score : 0,
			createdAt : new Date(),
		});
	},

	wellnessInsert: function(wellness) {
		var postId = Wellness.insert({
			wellness : wellness,
			score : 0,
			createdAt : new Date(),
		});
	},

	adviceInsert: function(yak) {
		var postId = Advice.insert({
			advice : advice,
			score : 0,
			createdAt : new Date(),
		});
	},

	shoutoutInsert: function(yak) {
		var postId = Shoutout.insert({
			shoutout : shoutout,
			score : 0,
			createdAt : new Date(),
		});
	},

	deskInsert: function(yak) {
		var postId = Desk.insert({
			desk : desk,
			score : 0,
			createdAt : new Date(),
		});
	},

	resourceList: function(yak) {
		var postId = Resource.insert({
			resource : resource,
			score : 0,
			createdAt : new Date(),
		});
	},

	reviewList: function(yak) {
		var postId = Review.insert({
			review : review,
			score : 0,
			createdAt : new Date(),
		});
	},

	commentInsert: function(comment) {
		Comments.insert(comment);
	},

	wcommentInsert: function(wcomment) {
		Wcomments.insert(wcomment);
	},

	acommentInsert: function(acomment) {
		Acomments.insert(acomment);
	},

	dcommentInsert: function(dcomment) {
		Dcomments.insert(dcomment);
	},

	scommentInsert: function(scomment) {
		Scomments.insert(scomment);
	},

	rcommentInsert: function(rcomment) {
		Rcomments.insert(rcomment);
	}

});
