Template.askCommentSubmit.events({
	'submit form': function(e, template) {
		e.preventDefault();

		var $body = $(e.target).find('[name=comment]');
		var comment = {
			body: $body.val(), //e.target.comment.value,
			score : 0,
			postId: template.data._id,
			createdAt : new Date(),
			owner: Meteor.userId(),
      username: Meteor.user().username,
			//userIp: this.request.connection.remoteAddress,
			//userlocation: Geolocation.currentLocation()
		};

		var commentBody = e.target.comment.value;

		check(commentBody, String);
		if (commentBody == "") {
			alert("You can't insert empty comment. Try to comment something nice instead! :)")
		} else {
			Meteor.call('askCommentInsert', comment);
		//	console.log(comment.userIp);
		//	console.log(comment.userLocation);
		}

		// clear field
		e.target.comment.value = "";
	}
});
