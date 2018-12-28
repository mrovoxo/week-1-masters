Template.yaksSubmit.events({
	'submit form': function(e) {
	e.preventDefault();

	var post = {
		postTitle: $(e.target).find('[name=postTitle]').val(),
		yak: $(e.target).find('[name=yak]').val()
	};

	var noteTitle = e.target.postTitle.value;
	var note = e.target.yak.value;


	if (note == "" || noteTitle == "") {
		alert("You can't insert an empty thought! Try to write what's on your mind instead! :)");
	} else {
			post._id = Yaks.insert(post, function(err, _id) {
		    Meteor.setTimeout(function() {
		      Yaks.remove(_id);
		    }, 86400000);
			}); // post available for 24 hours
			Router.go('yaksList', post);
		}
	}
});
