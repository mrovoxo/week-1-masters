Template.shoutoutItem.events({
	'click':function() {
		Session.set('selected_note', this._id);
	},

	'click a.no':function() {
	if (Meteor.user()) {
		var postId = Shoutout.findOne({_id:this._id});
		if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
			console.log('User already voted');
		} else {
			var noteId = Session.get('selected_note');
			console.log('Voting');
			Meteor.call('shoutoutScoreUpdate', noteId);
			}
		}
	},

	'click a.delete':function() {
		Meteor.call('shoutoutRemove', this._id);
		console.log('successful remove');
	}
});

Template.shoutoutItem.helpers({
	commentsCount: function() {
		return Scomments.find({postId:this._id}).count();
	}
});
