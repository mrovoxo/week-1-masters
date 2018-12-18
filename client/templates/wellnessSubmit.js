Template.wellnessSubmit.events({
	'submit .wellnessSubmitForm': function(event,err) {

		event.preventDefault();
		var well = event.target.well.value; 		// get yak value

		// check if the value is empty
		if (well == "") {
			alert("You can't insert empty well. Try to write something funny instead! :)");
		} else {
			Meteor.call('wellInsert', well);
			/*post._id = Yaks.insert(post);*/
			Router.go('wellnessList');
		}

	}
});
