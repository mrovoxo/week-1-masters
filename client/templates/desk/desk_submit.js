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


Template.deskSubmit.events({
'submit form': function(e) {
e.preventDefault();

var post = {
postTitle: $(e.target).find('[name=postTitle]').val(),
desk: $(e.target).find('[name=desk]').val()
};

post._id = Desk.insert(post);
Router.go('deskList', post);
}
});
