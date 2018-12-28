Template.wellnessSubmit.events({
  'submit form': function(e) {
  e.preventDefault();

  var post = {
    postTitle: $(e.target).find('[name=postTitle]').val(),
    wellness: $(e.target).find('[name=wellness]').val(),
  };

	var noteTitle = e.target.postTitle.value;
	var note = e.target.wellness.value;


	if (note == "" || noteTitle == "") {
		alert("You can't insert an empty note. Try to write something funny instead! :)");
	} else {
      post._id = Wellness.insert(post, function(err, _id) {
        Meteor.setTimeout(function() {
          Wellness.remove(_id);
        }, 86400000);
      }); // post available for 24 hours
      Router.go('wellnessList', post);
    }
  }
});

/* This is for early on in the app if you don't want posts to be deleted yet
Template.resourceSubmit.events({
'submit form': function(e) {
e.preventDefault();

var post = {
postTitle: $(e.target).find('[name=postTitle]').val(),
resource: $(e.target).find('[name=resource]').val()
};

post._id = Resource.insert(post);
Router.go('resourceList', post);
}
});
*/
