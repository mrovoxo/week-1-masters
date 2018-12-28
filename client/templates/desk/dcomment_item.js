Template.dcommentItem.events({
	'click':function() {
		Session.set('selected_dcomment', this._id);
	},

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
					console.log('danger');
				}
			}
		}
	},

	'click a.delete':function() {
		Dcomments.remove({_id:this._id});
	},
});
