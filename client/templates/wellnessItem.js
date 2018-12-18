Template.wellnessItem.events({
	'click':function() {
		Session.set('selected_well', this._id);
	},

	'click a.yes':function() {
		if(Meteor.user()) {
			var postId = Shoutouts.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var wellId = Session.get('selected_well');
				console.log('Voting');
				Shoutouts.update(wellId, {$inc: {'score': 1 }});
				Shoutouts.update(wellId, {$addToSet: {voted : Meteor.userId()}});
			}
		}
	},

	'click a.no':function() {
		if (Meteor.user()) {
			var postId = Shoutouts.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var wellId = Session.get('selected_well');
				console.log('Voting');
				Shoutouts.update(yakId, {$inc: {'score': -1 }});
				Shoutouts.update(yakId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('delete');
					Shoutouts.remove({_id:this._id})
				}
			}
		}
	}
});

Template.wellnessItem.helpers({
	commentsCount: function() {
		return Comments.find({postId:this._id}).count();
	}
});
