Template.asqItem.events({
	'click':function() {
		Session.set('selected_note', this._id);
	},

	'click a.delete':function() {
		Meteor.call('asqRemove', this._id);
		console.log('successful remove');
	}
});

Template.asqItem.helpers({
	asqCommentsCount: function() {
		return Ask.find().count();
	},

	asqItem: function() {
		return Asq.findOne({}, {sort: {createdAt: -1, limit: 1}});
	}
});
