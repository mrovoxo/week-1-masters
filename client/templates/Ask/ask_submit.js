Template.askSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var note = event.target.note.value; 		// get note value

		if (note == '') {
			alert("You can't insert an empty response. Try to respond to the question instead! :)")
		} else {
				note._id = Meteor.call('askInsert', note);
				e.target.note.value = "";
				Router.go('/');
		}
	}
});
