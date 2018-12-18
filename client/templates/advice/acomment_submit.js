Template.acommentSubmit.events({
	'submit form': function(e, template) {
		e.preventDefault();

		var $body = $(e.target).find('[name=body]');
		var acomment = {
			body: $body.val(),
			postId: template.data._id,
			submitted: new Date()
		};

		var acommentBody = e.target.body.value;
		// Check if the comment is not empty
		if (acommentBody == "") {
			alert("You can't insert empty comment. Try to comment something nice instead! :)")
		} else {
			Meteor.call('acommentInsert', acomment);
		}

		// clear field
		e.target.body.value = "";
	}
});
