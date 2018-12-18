Template.scommentSubmit.events({
	'submit form': function(e, template) {
		e.preventDefault();

		var $body = $(e.target).find('[name=body]');
		var scomment = {
			body: $body.val(),
			postId: template.data._id,
			submitted: new Date()
		};

		var scommentBody = e.target.body.value;
		// Check if the comment is not empty
		if (scommentBody == "") {
			alert("You can't insert an empty comment. Try to comment something nice instead! :)")
		} else {
			Meteor.call('scommentInsert', scomment);
		}

		// clear field
		e.target.body.value = "";
	}
});
