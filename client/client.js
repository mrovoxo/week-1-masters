Template.notesList.helpers({
	notes: function() {
		return Notes.find({}, {sort : {createdAt: -1}});
	}
})

Template.askList.helpers({
	ask: function() {
		return Ask.find({}, {sort : {createdAt: -1}});
	}
})

Template.asqList.helpers({
	asq: function() {
		return Asq.find();
	}
})

Template.wellnessList.helpers({
	wellness: function() {
		return Wellness.find({}, {sort : {createdAt: -1}});
	}
})

Template.shoutoutList.helpers({
	shoutout: function() {
		return Shoutout.find({}, {sort : {createdAt: -1}});
	}
})

Template.adviceList.helpers({
	advice: function() {
		return Advice.find({}, {sort : {createdAt: -1}});
	}
})

Template.deskList.helpers({
	desk: function() {
		return Desk.find({}, {sort : {createdAt: -1}});
	}
})

Template.resourceList.helpers({
	resource: function() {
		return Resource.find({}, {sort : {createdAt: -1}});
	}
})

Template.inviteList.helpers({
	invite: function() {
		return Invite.find({}, {sort : {acceptString: false}});
	}
})
