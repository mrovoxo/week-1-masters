Template.shoutoutSubmit.events({
  'submit form': function(e) {
		e.preventDefault();

		var note = event.target.note.value; 		// get note value

    if (note == '') {
      alert("You can't insert a blank post")
    } else {
        note._id = Meteor.call('shoutoutInsert', note);
    		Router.go('shoutoutList');
      }
	}
});
