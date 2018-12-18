Template.dcommentItem.events({
	'click':function() {
		Session.set('selected_dcomment', this._id);
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
			var postId = Dcomments.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var dcommentId = Session.get('selected_dcomment');
				console.log('Voting');
				Dcomments.update(dcommentId, {$inc: {'score': -1 }});
				Dcomments.update(dcommentId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('delete');
					Dcomments.remove({_id:this._id})
				}
			}
		}
	}
});
