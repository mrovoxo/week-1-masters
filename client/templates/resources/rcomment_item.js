Template.rcommentItem.events({
	'click':function() {
		Session.set('selected_rcomment', this._id);
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
			var postId = Rcomments.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var rcommentId = Session.get('selected_rcomment');
				console.log('Voting');
				Rcomments.update(rcommentId, {$inc: {'score': -1 }});
				Rcomments.update(rcommentId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('delete');
					Rcomments.remove({_id:this._id})
				}
			}
		}
	}
});
