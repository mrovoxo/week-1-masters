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
			alert("You can't insert an empty response. Try to comment something helpful instead! :)")
		} else {
			Meteor.call('acommentInsert', acomment);
		}

		// clear field
		e.target.body.value = "";
	}
});
