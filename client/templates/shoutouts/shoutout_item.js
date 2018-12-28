Template.shoutoutItem.events({
	'click':function() {
		Session.set('selected_shoutout', this._id);
	},

	'click a.no':function() {
		if (Meteor.user()) {
			var postId = Shoutout.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var shoutoutId = Session.get('selected_shoutout');
				console.log('Voting');
				Shoutout.update(shoutoutId, {$inc: {'score': -1 }});
				Shoutout.update(shoutoutId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('danger');
				}
			}
		}
	},

	'click a.delete':function() {
		Shoutout.remove({_id:this._id});
	},
});

Template.shoutoutItem.helpers({
	scommentsCount: function() {
		return Scomments.find({postId:this._id}).count();
	}
});
