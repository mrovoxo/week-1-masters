Template.wellnessList.helpers({
	wells: function() {
		return Shoutouts.find({}, {sort : {score: -1}});
	}
})
