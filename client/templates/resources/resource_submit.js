Template.resourceSubmit.events({
  'submit form': function(e) {
  e.preventDefault();

  var post = {
    postTitle: $(e.target).find('[name=postTitle]').val(),
    resource: $(e.target).find('[name=resource]').val()
  };

	var noteTitle = e.target.postTitle.value;
	var note = e.target.resource.value;


	if (note == "" || noteTitle == "") {
		alert("You can't insert an empty resource post!");
	} else {
      post._id = Resource.insert(post, function(err, _id) {
        Meteor.setTimeout(function() {
          Resource.remove(_id);
        }, 86400000);
      }); // post available for 24 hours
      Router.go('resourceList', post);
    }
  }
});
