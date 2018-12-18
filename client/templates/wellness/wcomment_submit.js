Template.wcommentSubmit.events({
	'submit form': function(e, template) {
		e.preventDefault();

		var $body = $(e.target).find('[name=body]');
		var wcomment = {
			body: $body.val(),
			postId: template.data._id,
			submitted: new Date()
		};

		var wcommentBody = e.target.body.value;
		// Check if the comment is not empty
		if (wcommentBody == "") {
			alert("You can't insert an empty comment. Try to comment something nice instead! :)")
		} else {
			Meteor.call('wcommentInsert', wcomment);
		}

		// clear field
		e.target.body.value = "";
	}
});
