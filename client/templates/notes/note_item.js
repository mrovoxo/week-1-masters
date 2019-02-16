Template.noteItem.events({
	'click':function() {
		Session.set('selected_note', this._id);
	},

	'click a.no':function() {
	if (Meteor.user()) {
		var postId = Notes.findOne({_id:this._id});
		if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
			console.log('User already voted');
		} else {
			var noteId = Session.get('selected_note');
			console.log('Voting');
			Meteor.call('noteScoreUpdate', noteId);
			}
		}
	},

	'click a.delete':function() {
		Meteor.call('noteRemove', this._id);
		console.log('successful remove');
	}
});

Template.noteItem.helpers({
	commentsCount: function() {
		return Comments.find({postId:this._id}).count();
	}
});
