Template.resourceItem.events({
	'click':function() {
		Session.set('selected_resource', this._id);
	},

	'click a.no':function() {
		if (Meteor.user()) {
			var postId = Resource.findOne({_id:this._id})
			if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
				console.log('User already voted');
			} else {
				var resourceId = Session.get('selected_resource');
				console.log('Voting');
				Resource.update(resourceId, {$inc: {'score': -1 }});
				Resource.update(resourceId, {$addToSet: {voted : Meteor.userId()}});
				if (postId.score <= -3) {
					console.log('danger');
				}
			}
		}
	},

	'click a.delete':function() {
		Resource.remove({_id:this._id});
	},
});

Template.resourceItem.helpers({
	rcommentsCount: function() {
		return Rcomments.find({postId:this._id}).count();
	}
});
