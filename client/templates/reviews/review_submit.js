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


Template.reviewSubmit.events({
'submit form': function(e) {
e.preventDefault();

var post = {
postTitle: $(e.target).find('[name=postTitle]').val(),
review: $(e.target).find('[name=review]').val()
};

post._id = Review.insert(post, function(err, _id) {
  Meteor.setTimeout(function() {
    Review.remove(_id);
  }, 30000);});
//Review.createIndex( { "createdAt": 1 }, { expireAfterSeconds: 60 } );
Router.go('reviewList', post);
}
});
