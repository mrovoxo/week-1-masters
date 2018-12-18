Template.rcommentSubmit.events({
	'submit form': function(e, template) {
		e.preventDefault();

		var $body = $(e.target).find('[name=body]');
		var rcomment = {
			body: $body.val(),
			postId: template.data._id,
			submitted: new Date()
		};

		var rcommentBody = e.target.body.value;
		// Check if the comment is not empty
		if (rcommentBody == "") {
			alert("You can't insert an empty comment. Try to comment something nice instead! :)")
		} else {
			Meteor.call('rcommentInsert', rcomment);
		}

		// clear field
		e.target.body.value = "";
	}
});
