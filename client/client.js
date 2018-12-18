Template.yaksList.helpers({
	yaks: function() {
		return Yaks.find({}, {sort : {score: -1}});
	}
})

Template.wellnessList.helpers({
	wellness: function() {
		return Wellness.find({}, {sort : {score: -1}});
	}
})

Template.shoutoutList.helpers({
	shoutout: function() {
		return Shoutout.find({}, {sort : {score: -1}});
	}
})

Template.adviceList.helpers({
	advice: function() {
		return Advice.find({}, {sort : {score: -1}});
	}
})

Template.deskList.helpers({
	desk: function() {
		return Desk.find({}, {sort : {score: -1}});
	}
})

Template.resourceList.helpers({
	resource: function() {
		return Resource.find({}, {sort : {score: -1}});
	}
})
