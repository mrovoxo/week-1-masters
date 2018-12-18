Template.dcommentSubmit.events({
	'submit form': function(e, template) {
		e.preventDefault();

		var $body = $(e.target).find('[name=body]');
		var dcomment = {
			body: $body.val(),
			postId: template.data._id,
			submitted: new Date()
		};

		var dcommentBody = e.target.body.value;
		// Check if the comment is not empty
		if (dcommentBody == "") {
			alert("You can't insert empty comment. Try to comment something nice instead! :)")
		} else {
			Meteor.call('dcommentInsert', dcomment);
		}

		// clear field
		e.target.body.value = "";
	}
});
