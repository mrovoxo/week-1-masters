/*
Meteor.startup(function() {
  Wellness._ensureIndex({ creationDate:1 }, { expireAfterSeconds:30 });
});
*/

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
					alert(postId.score);
					console.log('delete');
					Review.insert({_id:this._id});
					Wellness.remove({_id:this._id});
				}
			}
		}
	},

	'click a.delete':function() {
		Wellness.remove({_id:this._id});
	},
/*
	'removeOldPosts': function() {
		setTimeout(alert("remove an old post"), 6000);
		setTimeout(Wellness.remove({_id:this._id}), 60000);
	}
*/
});

Template.wellnessItem.helpers({
	wcommentsCount: function() {
		return Wcomments.find({postId:this._id}).count();
	}
});

/*
setTimeout(alert("remove an old post"), 6000);
setTimeout(Wellness.remove({_id:this._id}), 60000);

var DURATION = 60000;
var INTERVAL = 90000;
var clear = function() {
  var min = new Date(new Date() - DURATION);
  Wellness.remove({
    createdAt: {$lt: min}
  });
};
*/

/*
Meteor.startup(function() {
	wellnessRemove();
	Meteor.setInterval(wellnessRemove, 90000);
});
*/

/*
Meteor.startup(function() {
  clear();
  Meteor.setInterval(clear, INTERVAL);
});
*/
