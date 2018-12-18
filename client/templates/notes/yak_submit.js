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


Template.yaksSubmit.events({
'submit form': function(e) {
e.preventDefault();

	var post = {
	postTitle: $(e.target).find('[name=postTitle]').val(),
	yak: $(e.target).find('[name=yak]').val()
	};

	var noteTitle = e.target.postTitle.value;
	var note = e.target.yak.value;


	if (note == "" || noteTitle == "") {
		alert("You can't insert an empty note. Try to write something funny instead! :)"); //  + note + " : " + noteTitle
	} else {
			// alert("you can post my friend");
			post._id = Yaks.insert(post);
			Router.go('yaksList', post);
	}
	}
});
