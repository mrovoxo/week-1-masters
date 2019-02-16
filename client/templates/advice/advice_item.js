Template.adviceItem.events({
	'click':function() {
		Session.set('selected_note', this._id);
	},

	'click a.no':function() {
	if (Meteor.user()) {
		var postId = Advice.findOne({_id:this._id});
		if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
			console.log('User already voted');
		} else {
			var noteId = Session.get('selected_note');
			console.log('Voting');
			Meteor.call('adviceScoreUpdate', noteId);
			}
		}
	},

	'click a.delete':function() {
		Meteor.call('adviceRemove', this._id);
		console.log('successful remove');
	}
});

Template.adviceItem.helpers({
	commentsCount: function() {
		return Acomments.find({postId:this._id}).count();
	}
});
