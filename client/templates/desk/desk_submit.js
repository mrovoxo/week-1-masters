Template.deskSubmit.events({
  'submit form': function(e) {
  e.preventDefault();

  var post = {
    postTitle: $(e.target).find('[name=postTitle]').val(),
    desk: $(e.target).find('[name=desk]').val()
  };

	var noteTitle = e.target.postTitle.value;
	var note = e.target.desk.value;


	if (note == "" || noteTitle == "") {
		alert("You can't insert an empty note to God. Try to write what's on your heart instead! :)");
	} else {
      post._id = Desk.insert(post, function(err, _id) {
        Meteor.setTimeout(function() {
          Desk.remove(_id);
        }, 86400000);
      }); // post available for 24 hours
      Router.go('deskList', post);
    }
  }
});
