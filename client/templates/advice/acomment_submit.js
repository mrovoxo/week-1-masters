Template.acommentSubmit.events({
	'submit form': function(e, template) {
		e.preventDefault();

		var $body = $(e.target).find('[name=comment]');
		var comment = {
			body: $body.val(),
			score : 0,
			postId: template.data._id,
			createdAt : new Date(),
			owner: Meteor.userId(),
      username: Meteor.user().username,
		};

		var commentBody = e.target.comment.value;
		// Check if the comment is not empty
		check(commentBody, String);
		if (commentBody == "") {
			alert("You can't insert an empty response. Try to comment something helpful instead! :)")
		} else {
			Meteor.call('acommentInsert', comment);
		}

		// clear field
		e.target.comment.value = "";
	}
});
