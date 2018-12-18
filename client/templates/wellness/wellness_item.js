Template.wellnessItem.events({
	'click':function() {
		Session.set('selected_wellness', this._id);
	},

/*
	'click a.yes':function() {
		if(Meteor.user()) {
			var postId = Wellnesss.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var wellnessId = Session.get('selected_wellness');
				console.log('Voting');
				Wellnesss.update(wellnessId, {$inc: {'score': 1 }});
				Wellnesss.update(wellnessId, {$addToSet: {voted : Meteor.userId()}});
			}
		}
	},
	*/

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
					console.log('delete');
					Review.insert({_id:this._id});
					Wellness.remove({_id:this._id})
				}
			}
		}
	},

	'removeOldPosts': function() {
		setTimeout(alert("remove an old post"), 6000);
		setTimeout(Wellness.remove({_id:this._id}), 60000);
	}

});

Template.wellnessItem.helpers({
	wcommentsCount: function() {
		return Wcomments.find({postId:this._id}).count();
	}
});
