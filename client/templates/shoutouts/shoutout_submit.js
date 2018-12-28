Template.shoutoutSubmit.events({
  'submit form': function(e) {
  e.preventDefault();

  var post = {
    postTitle: $(e.target).find('[name=postTitle]').val(),
    shoutout: $(e.target).find('[name=shoutout]').val()
  };

	var noteTitle = e.target.postTitle.value;
	var note = e.target.shoutout.value;


	if (note == "" || noteTitle == "") {
		alert("You can't insert an empty shoutout post!");
	} else {
      post._id = Shoutout.insert(post, function(err, _id) {
        Meteor.setTimeout(function() {
          Shoutout.remove(_id);
        }, 86400000);
      }); // post available for 24 hours
      Router.go('shoutoutList', post);
    }
  }
});
