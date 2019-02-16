Router.route('/', {name: 'firstPage'});

Router.route('/wellness', {name: 'wellness'});

Router.route('/wellnesssubmit', {name: 'wellnessSubmit'});

Router.route('/wellnesslist', {name: 'wellnessList'});

Router.route('/asksubmit', {name: 'askSubmit'});

Router.route('/asklist', {name: 'askList'});

Router.route('/asqsubmit', {name: 'asqSubmit'});

Router.route('/asqlist', {name: 'asqList'});

Router.route('/noteslist', {name: 'notesList'});

Router.route('/submit', {name: 'notesSubmit'});

Router.route('/landingpage', {name: 'landingPage'});

Router.route('/advice', {name: 'advice'});

Router.route('/advicesubmit', {name: 'adviceSubmit'});

Router.route('/advicelist', {name: 'adviceList'});

Router.route('/shoutout', {name: 'shoutout'});

Router.route('/shoutoutsubmit', {name: 'shoutoutSubmit'});

Router.route('/shoutoutlist', {name: 'shoutoutList'});

Router.route('/desk', {name: 'desk'});

Router.route('/desksubmit', {name: 'deskSubmit'});

Router.route('/desklist', {name: 'deskList'});

Router.route('/resource', {name: 'resource'});

Router.route('/resourcesubmit', {name: 'resourceSubmit'});

Router.route('/resourcelist', {name: 'resourceList'});

Router.route('/joinus', {name: 'joinUs'});

Router.route('/terms', {name: 'terms'});

Router.route('/legal', {name: 'legal'});

Router.route('/privacy', {name: 'privacy'});

Router.route('/invite', {name: 'invite'});

Router.route('/invitelist', {name: 'inviteList'});

Router.route('/register', {name: 'register'});

Router.route('/login', {name: 'login'});

Router.route('/notes/:_id', {
	name: 'notePage',
	data: function() {
		return Notes.findOne(this.params._id);
	}
});

Router.route('/wellness/:_id', {
	name: 'wellnessPage',
	data: function() {
		return Wellness.findOne(this.params._id);
	}
});

Router.route('/ask/:_id', {
	name: 'askPage',
	data: function() {
		return Ask.findOne(this.params._id);
	}
});

Router.route('/advice/:_id', {
	name: 'advicePage',
	data: function() {
		return Advice.findOne(this.params._id);
	}
});

Router.route('/shoutout/:_id', {
	name: 'shoutoutPage',
	data: function() {
		return Shoutout.findOne(this.params._id);
	}
});

Router.route('/desk/:_id', {
	name: 'deskPage',
	data: function() {
		return Desk.findOne(this.params._id);
	}
});

Router.route('/resource/:_id', {
	name: 'resourcePage',
	data: function() {
		return Resource.findOne(this.params._id);
	}
});
