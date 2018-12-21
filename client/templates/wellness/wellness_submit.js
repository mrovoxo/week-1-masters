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


Template.wellnessSubmit.events({
'submit form': function(e) {
e.preventDefault();

var post = {
postTitle: $(e.target).find('[name=postTitle]').val(),
wellness: $(e.target).find('[name=wellness]').val()
};

post._id = Wellness.insert(post, function(err, _id) {
  Meteor.setTimeout(function() {
    Wellness.remove(_id);
  }, 180000);});
//Wellness.createIndex( { "createdAt": 1 }, { expireAfterSeconds: 60 } );
Router.go('wellnessList', post);
}
});
