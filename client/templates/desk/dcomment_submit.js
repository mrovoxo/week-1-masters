Template.dcommentSubmit.events({
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

		check(commentBody, String);
		if (commentBody == "") {
			alert("You can't insert empty comment. Try to comment something nice instead! :)")
		} else {
			Meteor.call('dcommentInsert', comment);
		}

		// clear field
		e.target.comment.value = "";
	}
});
