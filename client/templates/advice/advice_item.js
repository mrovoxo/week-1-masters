Template.adviceItem.events({
	'click':function() {
		Session.set('selected_advice', this._id);
	},

	'click a.no':function() {
		if (Meteor.user()) {
			var postId = Advice.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var adviceId = Session.get('selected_advice');
				console.log('Voting');
				Advice.update(adviceId, {$inc: {'score': -1 }});
				Advice.update(adviceId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('danger');
				}
			}
		}
	},

	'click a.delete':function() {
		Advice.remove({_id:this._id});
	},
});

Template.adviceItem.helpers({
	acommentsCount: function() {
		return Acomments.find({postId:this._id}).count();
	}
});
