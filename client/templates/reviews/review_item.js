/*
Meteor.startup(function() {
  Review._ensureIndex({ creationDate:1 }, { expireAfterSeconds:30 });
});
*/

Template.reviewItem.events({
	'click':function() {
		Session.set('selected_review', this._id);
	},
// MAKE IT SO THAT PEOPLE WITHOUT ACCOUNTS CAN SEE POSTS AND COMMENTS, REGULAR USERS
// CAN MAKE POSTS AND COMMENT AND REPORT AND ADMINS CAN deletE
/*
	'click a.yes':function() {
		if(Meteor.user()) {
			var postId = Review.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var reviewId = Session.get('selected_review');
				console.log('Voting');
				Review.update(reviewId, {$inc: {'score': 1 }});
				Review.update(reviewId, {$addToSet: {voted : Meteor.userId()}});
			}
		}
	},
	*/

	'click a.repost':function() {
		var zone = $(e.target).find('[name=zone]').val();
		if (zone == "well") {
			console.log(zone);
			Wellness.insert({_id:this._id});
		} else if (zone == "notice") {
				console.log(zone);
				Yaks.insert({_id:this._id});
		} else if (zone == "des") {
				console.log(zone);
				Desk.insert({_id:this._id});
		} else if (zone == "res") {
				console.log(zone);
				Resource.insert({_id:this._id});
		} else if (zone == "shout") {
				console.log(zone);
				Shoutout.insert({_id:this._id});
		} else if (zone == "adv") {
				console.log(zone);
				Advice.insert({_id:this._id});
		}
		console.log('remove');
		Review.remove({_id:this._id});
	},

	'click a.delete':function() {
		Review.remove({_id:this._id});
	},
/*
	'removeOldPosts': function() {
		setTimeout(alert("remove an old post"), 6000);
		setTimeout(Review.remove({_id:this._id}), 60000);
	}
*/
});

Template.reviewItem.helpers({
	wcommentsCount: function() {
		return Wcomments.find({postId:this._id}).count();
	}
});

/*
setTimeout(alert("remove an old post"), 6000);
setTimeout(Review.remove({_id:this._id}), 60000);

var DURATION = 60000;
var INTERVAL = 90000;
var clear = function() {
  var min = new Date(new Date() - DURATION);
  Review.remove({
    createdAt: {$lt: min}
  });
};
*/

/*
Meteor.startup(function() {
	reviewRemove();
	Meteor.setInterval(reviewRemove, 90000);
});
*/

/*
Meteor.startup(function() {
  clear();
  Meteor.setInterval(clear, INTERVAL);
});
*/
