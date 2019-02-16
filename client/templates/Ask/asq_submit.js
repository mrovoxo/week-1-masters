Template.asqSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var note = event.target.note.value; 		// get note value

		if (note == '') {
			alert("You can't insert an empty question")
		} else {
				note._id = Meteor.call('asqInsert', note);
				e.target.note.value = "";
			}
	}
});
