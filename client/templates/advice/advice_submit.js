Template.adviceSubmit.events({
  'submit form': function(e) {
  e.preventDefault();

  var post = {
    postTitle: $(e.target).find('[name=postTitle]').val(),
    advice: $(e.target).find('[name=advice]').val()
  };

	var noteTitle = e.target.postTitle.value;
	var note = e.target.advice.value;


	if (note == "" || noteTitle == "") {
		alert("You can't insert an empty advice post. Try to write something helpful instead! :)");
	} else {
      post._id = Advice.insert(post, function(err, _id) {
        Meteor.setTimeout(function() {
          Advice.remove(_id);
        }, 86400000);
      }); // post available for 24 hours
      Router.go('adviceList', post);
    }
  }
});
