Notes = new Mongo.Collection('notes');

Wellness = new Mongo.Collection('wellness');

Ask = new Mongo.Collection('ask');

Asq = new Mongo.Collection('asq');

Shoutout = new Mongo.Collection('shoutout');

Advice = new Mongo.Collection('advice');

Desk = new Mongo.Collection('desk');

Review = new Mongo.Collection('review');

Resource = new Mongo.Collection('resource');

Comments = new Mongo.Collection("comments");

Wcomments = new Mongo.Collection("wcomments");

Askcomments = new Mongo.Collection('askcomments');

Acomments = new Mongo.Collection("acomments");

Scomments = new Mongo.Collection("scomments");

Dcomments = new Mongo.Collection("dcomments");

Rcomments = new Mongo.Collection("rcomments");

Invite = new Mongo.Collection("invite");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('notes', function notesPublication() {
    return Notes.find();
  });

  Meteor.publish('comments', function commentsPublication() {
    return Comments.find();
  });

	Meteor.publish('wellness', function wellnessPublication() {
    return Wellness.find();
  });

  Meteor.publish('wcomments', function wcommentsPublication() {
    return Wcomments.find();
  });

  Meteor.publish('ask', function askPublication() {
    return Ask.find();
  });

  Meteor.publish('asq', function asqPublication() {
    return Asq.find();
  });

  Meteor.publish('askcomments', function askCommentsPublication() {
    return Askcomments.find();
  });

  Meteor.publish('advice', function advicePublication() {
    return Advice.find();
  });

  Meteor.publish('acomments', function acommentsPublication() {
    return Acomments.find();
  });

  Meteor.publish('desk', function deskPublication() {
    return Desk.find();
  });

  Meteor.publish('dcomments', function dcommentsPublication() {
    return Dcomments.find();
  });

  Meteor.publish('resource', function resourcePublication() {
    return Resource.find();
  });

  Meteor.publish('rcomments', function rcommentsPublication() {
    return Rcomments.find();
  });

  Meteor.publish('shoutout', function shoutoutPublication() {
    return Shoutout.find();
  });

  Meteor.publish('scomments', function scommentsPublication() {
    return Scomments.find();
  });

  Meteor.publish("invite", function invitePublication() {
    return Invite.find();
  });
}

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe('notes');
  Meteor.subscribe('comments');
  Meteor.subscribe('wellness');
  Meteor.subscribe('wcomments');
  Meteor.subscribe('ask');
  Meteor.subscribe('askcomments');
  Meteor.subscribe('asq');
  Meteor.subscribe('advice');
  Meteor.subscribe('acomments');
  Meteor.subscribe('desk');
  Meteor.subscribe('dcomments');
  Meteor.subscribe('resource');
  Meteor.subscribe('rcomments');
  Meteor.subscribe('shoutout');
  Meteor.subscribe('scomments');
  Meteor.subscribe('invite');
}
