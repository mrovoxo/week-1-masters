Template.adviceItem.events({
	'click':function() {
		Session.set('selected_advice', this._id);
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
			var postId = Advice.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var adviceId = Session.get('selected_advice');
				console.log('Voting');
				Advice.update(adviceId, {$inc: {'score': -1 }});
				Advice.update(adviceId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('delete');
					Review.insert()
					Advice.remove({_id:this._id})
				}
			}
		}
	},

/*	'dueDate':function() {
		if

		var clear = function() {
  var min = new Date(new Date() - DURATION);
  Documents.remove({
    createdAt: {$lt: min}
  });
};


Meteor.startup(function() {
  clear();
  Meteor.setInterval(clear, INTERVAL);
});

	}
	*/
});

Template.adviceItem.helpers({
	acommentsCount: function() {
		return Acomments.find({postId:this._id}).count();
	}
});
