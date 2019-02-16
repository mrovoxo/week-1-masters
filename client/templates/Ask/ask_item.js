Template.askItem.events({
	'click':function() {
		Session.set('selected_note', this._id);
	},

	'click a.no':function() {
	if (Meteor.user()) {
		var postId = Ask.findOne({_id:this._id});
		if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
			console.log('User already voted');
		} else {
			var noteId = Session.get('selected_note');
			console.log('Voting');
			Meteor.call('askScoreUpdate', noteId);
			}
		}
	},

	'click a.delete':function() {
		Meteor.call('askRemove', this._id);
		console.log('successful remove');
	}
});

Template.askItem.helpers({
	commentsCount: function() {
		return Askcomments.find({postId:this._id}).count();
	}
});
