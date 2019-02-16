Template.resourceItem.events({
	'click':function() {
		Session.set('selected_note', this._id);
	},

	'click a.no':function() {
	if (Meteor.user()) {
		var postId = Resource.findOne({_id:this._id});
		if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
			console.log('User already voted');
		} else {
			var noteId = Session.get('selected_note');
			console.log('Voting');
			Meteor.call('resourceScoreUpdate', noteId);
			}
		}
	},

	'click a.delete':function() {
		Meteor.call('resourceRemove', this._id);
		console.log('successful remove');
	}
});

Template.resourceItem.helpers({
	commentsCount: function() {
		return Rcomments.find({postId:this._id}).count();
	}
});
