Yaks = new Mongo.Collection('yaks');

Shoutout = new Mongo.Collection('shoutout');

Advice = new Mongo.Collection('advice');

Desk = new Mongo.Collection('desk');

Review = new Mongo.Collection('review');

Resource = new Mongo.Collection('resource');

Comments = new Mongo.Collection("comments");

Acomments = new Mongo.Collection("acomments");

Scomments = new Mongo.Collection("scomments");

Dcomments = new Mongo.Collection("dcomments");

Rcomments = new Mongo.Collection("rcomments");

Router.route('/', {name: 'accounts'});

Router.route('/wellness', {name: 'wellness'});

Router.route('/wellnesssubmit', {name: 'wellnessSubmit'});

Router.route('/wellnesslist', {name: 'wellnessList'});

Router.route('/yakslist', {name: 'yaksList'});

Router.route('/submit', {name: 'yaksSubmit'});

Router.route('/login', {name: 'firstpage'});

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


// Josh: tried routing to a new list from /wellness
// Router.route('/wellness', {name: 'yaksList'})
// Router.route('/wellness', {name: 'yaks'})

Router.route('/yaks/:_id', {
	name: 'yakPage',
	data: function() {
		return Yaks.findOne(this.params._id);
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
})
