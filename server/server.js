Meteor.methods({
	yakInsert: function(yak) {
		var postId = Yaks.insert({
			yak : yak,
			score : 0,
			submitted : new Date(),
		});
	},

	wellInsert: function(well) {
		var postId = Shoutout.insert({
			well : well,
			score : 0,
			submitted : new Date(),
		});
	},

	adviceInsert: function(yak) {
		var postId = Advice.insert({
			advice : advice,
			score : 0,
			submitted : new Date(),
		});
	},

	shoutoutInsert: function(yak) {
		var postId = Shoutout.insert({
			shoutout : shoutout,
			score : 0,
			submitted : new Date(),
		});
	},

	deskInsert: function(yak) {
		var postId = Desk.insert({
			desk : desk,
			score : 0,
			submitted : new Date(),
		});
	},

	resourceList: function(yak) {
		var postId = Resource.insert({
			resource : resource,
			score : 0,
			submitted : new Date(),
		});
	},

	commentInsert: function(comment) {
		Comments.insert(comment);
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
