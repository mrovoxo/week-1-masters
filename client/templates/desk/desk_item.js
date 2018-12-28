Template.deskItem.events({
	'click':function() {
		Session.set('selected_desk', this._id);
	},

	'click a.no':function() {
		if (Meteor.user()) {
			var postId = Desk.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var deskId = Session.get('selected_desk');
				console.log('Voting');
				Desk.update(deskId, {$inc: {'score': -1 }});
				Desk.update(deskId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('danger');
				}
			}
		}
	},

	'click a.delete':function() {
		Desk.remove({_id:this._id});
	},
});

Template.deskItem.helpers({
	dcommentsCount: function() {
		return Dcomments.find({postId:this._id}).count();
	}
});
