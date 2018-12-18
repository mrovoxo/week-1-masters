// Template.yaksSubmit.events({
// 	'submit .yaksSubmitForm': function(event,err) {

// 		event.preventDefault();
// 		var postTitle = event.target.postTitle.value; 		// get yakTitle value
// 		var yak = event.target.yak.value; 		// get yak value

// 		// check if the value is empty
// 		if (yak == "") {
// 			alert("Post details");
// 		} else {
// 			Meteor.call('yakInsert', yak);
// 			Meteor.call('postTitleInsert', postTitle)
// 			/*post._id = Yaks.insert(post);*/
// 			Router.go('yaksList');
// 		}

// 	}
// });


Template.shoutoutSubmit.events({
'submit form': function(e) {
e.preventDefault();

var post = {
postTitle: $(e.target).find('[name=postTitle]').val(),
shoutout: $(e.target).find('[name=shoutout]').val()
};

post._id = Shoutout.insert(post);
Router.go('shoutoutList', post);
}
});
