Template.wellnessItem.events({
	'click':function() {
		Session.set('selected_note', this._id);
	},

// MAKE IT SO THAT PEOPLE WITHOUT ACCOUNTS CAN SEE POSTS AND COMMENTS, REGULAR USERS
// CAN MAKE POSTS AND COMMENT AND REPORT AND ADMINS CAN deletE

'click a.no':function() {
if (Meteor.user()) {
	var postId = Wellness.findOne({_id:this._id});
	if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
		console.log('User already voted');
	} else {
		var noteId = Session.get('selected_note');
		console.log('Voting');
		Meteor.call('wellnessScoreUpdate', noteId);
		}
	}
},

'click a.delete':function() {
	Meteor.call('wellnessRemove', this._id);
	console.log('successful remove');
	}
});

Template.wellnessItem.helpers({
	commentsCount: function() {
		return Wcomments.find({postId:this._id}).count();
	}
});
