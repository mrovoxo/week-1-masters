Template.wellnessItem.events({
	'click':function() {
		Session.set('selected_wellness', this._id);
	},

// MAKE IT SO THAT PEOPLE WITHOUT ACCOUNTS CAN SEE POSTS AND COMMENTS, REGULAR USERS
// CAN MAKE POSTS AND COMMENT AND REPORT AND ADMINS CAN deletE

	'click a.no':function() {
		if (Meteor.user()) {
			var postId = Wellness.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var wellnessId = Session.get('selected_wellness');
				console.log('Voting');
				Wellness.update(wellnessId, {$inc: {'score': -1 }});
				Wellness.update(wellnessId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('danger');
				}
			}
		}
	},

	'click a.delete':function() {
		Wellness.remove({_id:this._id});
	},
});

Template.wellnessItem.helpers({
	wcommentsCount: function() {
		return Wcomments.find({postId:this._id}).count();
	},
});
