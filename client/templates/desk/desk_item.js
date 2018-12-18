Template.deskItem.events({
	'click':function() {
		Session.set('selected_desk', this._id);
	},

/*
	'click a.yes':function() {
		if(Meteor.user()) {
			var postId = Yaks.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var yakId = Session.get('selected_yak');
				console.log('Voting');
				Yaks.update(yakId, {$inc: {'score': 1 }});
				Yaks.update(yakId, {$addToSet: {voted : Meteor.userId()}});
			}
		}
	},
*/

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
					console.log('delete');
					Desk.remove({_id:this._id})
				}
			}
		}
	}
});

Template.deskItem.helpers({
	dcommentsCount: function() {
		return Dcomments.find({postId:this._id}).count();
	}
});
