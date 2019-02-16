Meteor.methods({
	noteInsert: function(note) {
		check(note, String);

		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		var postId = Notes.insert({
			note : note,
			score : 0,
			createdAt : new Date(),
			owner: Meteor.userId(),
      username: Meteor.user().username,
			//userIp: this.connection.remoteAddress,
			//userlocation: Geolocation.currentLocation()
		});

// The auto timed delete function

		check(postId, String);
		Meteor.setTimeout(function() {
			Notes.remove(postId);
		}, 2147483647);
	},

	noteRemove: function(note) {
		check(note, String);

		Notes.remove(note);
	},

	noteReturnPostId: function(note) {
		check(note, String);
		var postId = Notes.findOne(note);
	},

	noteScoreUpdate: function(noteId) {
		check(noteId, String);

		Notes.update(noteId, {$inc: {'score': -1 }});
		Notes.update(noteId, {$addToSet: {voted : Meteor.userId()}});
	},


	commentInsert: function(comment) {
		if (! this.userId) {
		  throw new Meteor.Error('not-authorized');
		}

		var commentId = Comments.insert(comment);

		check(commentId, String);

		// The auto timed delete function
		Meteor.setTimeout(function() {
			Comments.remove(commentId);
		}, 2147483647);
	},

	commentRemove: function(comment) {
		Comments.remove(comment);
	},

	commentReturnPostId: function(comment) {
		check(comment, String);
		var postId = Comments.findOne(comment);
	},

	commentScoreUpdate: function(commentId) {
		check(commentId, String);
		Comments.update(commentId, {$inc: {'score': -1 }});
		Comments.update(commentId, {$addToSet: {voted : Meteor.userId()}});
	},

	// ASK

	askInsert: function(note) {
		check(note, String);

		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		var postId = Ask.insert({
			note : note,
			score : 0,
			createdAt : new Date(),
			owner: Meteor.userId(),
      username: Meteor.user().username,
			//userIp: this.request.connection.remoteAddress,
			////userlocation: Geolocation.currentLocation()
		});

		console.log(postId.username);
		//console.log(userIp);
		//console.log(userLocation);

// The auto timed delete function

		check(postId, String);
		Meteor.setTimeout(function() {
			Ask.remove(postId);
		}, 2147483647);
	},

	askRemove: function(note) {
		check(note, String);

		Ask.remove(note);
	},

	askReturnPostId: function(note) {
		check(note, String);
		var postId = Ask.findOne(note);
	},

	askScoreUpdate: function(noteId) {
		check(noteId, String);

		Ask.update(noteId, {$inc: {'score': -1 }});
		Ask.update(noteId, {$addToSet: {voted : Meteor.userId()}});
	},


	askCommentInsert: function(comment) {
		if (! this.userId) {
		  throw new Meteor.Error('not-authorized');
		}

		var commentId = Askcomments.insert(comment);

		check(commentId, String);

		// The auto timed delete function
		Meteor.setTimeout(function() {
			Askcomments.remove(commentId);
		}, 2147483647);
	},

	askCommentRemove: function(comment) {
		Askcomments.remove(comment);
	},

	askCommentReturnPostId: function(comment) {
		check(comment, String);
		var postId = Askcomments.findOne(comment);
	},

	askCommentScoreUpdate: function(commentId) {
		check(commentId, String);
		Askcomments.update(commentId, {$inc: {'score': -1 }});
		Askcomments.update(commentId, {$addToSet: {voted : Meteor.userId()}});
	},

	// ASQ
	asqInsert: function(note) {
		check(note, String);

		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		var postId = Asq.insert({
			note : note,
			score : 0,
			createdAt : new Date(),
			owner: Meteor.userId(),
      username: Meteor.user().username,
			//userIp: this.request.connection.remoteAddress,
			////userlocation: Geolocation.currentLocation()
		});

// The auto timed delete function

		check(postId, String);
		Meteor.setTimeout(function() {
			Asq.remove(postId);
		}, 2147483647);
	},

	asqRemove: function(note) {
		check(note, String);

		Asq.remove(note);
		Ask.remove({});
	},

	// ADVICE
	adviceInsert: function(note) {
		check(note, String);

		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		var postId = Advice.insert({
			note : note,
			score : 0,
			createdAt : new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username,
			//userIp: this.request.connection.remoteAddress,
			//userlocation: Geolocation.currentLocation()
		});

	// The auto timed delete function

		check(postId, String);
		Meteor.setTimeout(function() {
			Advice.remove(postId);
		}, 2147483647);
	},

	adviceRemove: function(note) {
		check(note, String);

		Advice.remove(note);
	},

	adviceReturnPostId: function(note) {
		check(note, String);
		var postId = Advice.findOne(note);
	},

	adviceScoreUpdate: function(noteId) {
		check(noteId, String);

		Advice.update(noteId, {$inc: {'score': -1 }});
		Advice.update(noteId, {$addToSet: {voted : Meteor.userId()}});
	},


	acommentInsert: function(comment) {
		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		var commentId = Acomments.insert(comment);

		check(commentId, String);

		// The auto timed delete function
		Meteor.setTimeout(function() {
			Acomments.remove(commentId);
		}, 2147483647);
	},

	acommentRemove: function(comment) {
		Acomments.remove(comment);
	},

	acommentReturnPostId: function(comment) {
		check(comment, String);
		var postId = Acomments.findOne(comment);
	},

	acommentScoreUpdate: function(commentId) {
		check(commentId, String);
		Acomments.update(commentId, {$inc: {'score': -1 }});
		Acomments.update(commentId, {$addToSet: {voted : Meteor.userId()}});
	},

	// DESK
	deskInsert: function(note) {
		check(note, String);

		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		var postId = Desk.insert({
			note : note,
			score : 0,
			createdAt : new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username,
			//userIp: this.request.connection.remoteAddress,
			//userlocation: Geolocation.currentLocation()
		});

	// The auto timed delete function

		check(postId, String);
		Meteor.setTimeout(function() {
			Desk.remove(postId);
		}, 2147483647);
	},

	deskRemove: function(note) {
		check(note, String);

		Desk.remove(note);
	},

	deskReturnPostId: function(note) {
		check(note, String);
		var postId = Desk.findOne(note);
	},

	deskScoreUpdate: function(noteId) {
		check(noteId, String);

		Desk.update(noteId, {$inc: {'score': -1 }});
		Desk.update(noteId, {$addToSet: {voted : Meteor.userId()}});
	},


	dcommentInsert: function(comment) {
		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		var commentId = Dcomments.insert(comment);

		check(commentId, String);

		// The auto timed delete function
		Meteor.setTimeout(function() {
			Dcomments.remove(commentId);
		}, 2147483647);
	},

	dcommentRemove: function(comment) {
		Dcomments.remove(comment);
	},

	dcommentReturnPostId: function(comment) {
		check(comment, String);
		var postId = Dcomments.findOne(comment);
	},

	dcommentScoreUpdate: function(commentId) {
		check(commentId, String);
		Dcomments.update(commentId, {$inc: {'score': -1 }});
		Dcomments.update(commentId, {$addToSet: {voted : Meteor.userId()}});
	},

	// RESOURCES
	resourceInsert: function(note) {
		check(note, String);

		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		var postId = Resource.insert({
			note : note,
			score : 0,
			createdAt : new Date(),
			owner: Meteor.userId(),
      username: Meteor.user().username,
			//userIp: this.request.connection.remoteAddress,
			//userlocation: Geolocation.currentLocation()
		});

// The auto timed delete function

		check(postId, String);
		Meteor.setTimeout(function() {
			Resource.remove(postId);
		}, 2147483647);
	},

	resourceRemove: function(note) {
		check(note, String);

		Resource.remove(note);
	},

	resourceReturnPostId: function(note) {
		check(note, String);
		var postId = Resource.findOne(note);
	},

	resourceScoreUpdate: function(noteId) {
		check(noteId, String);

		Resource.update(noteId, {$inc: {'score': -1 }});
		Resource.update(noteId, {$addToSet: {voted : Meteor.userId()}});
	},


	rcommentInsert: function(comment) {
		if (! this.userId) {
		  throw new Meteor.Error('not-authorized');
		}

		var commentId = Rcomments.insert(comment);

		check(commentId, String);

		// The auto timed delete function
		Meteor.setTimeout(function() {
			Rcomments.remove(commentId);
		}, 2147483647);
	},

	rcommentRemove: function(comment) {
		Rcomments.remove(comment);
	},

	rcommentReturnPostId: function(comment) {
		check(comment, String);
		var postId = Rcomments.findOne(comment);
	},

	rcommentScoreUpdate: function(commentId) {
		check(commentId, String);
		Rcomments.update(commentId, {$inc: {'score': -1 }});
		Rcomments.update(commentId, {$addToSet: {voted : Meteor.userId()}});
	},

	// SHOUTOUTS
	shoutoutInsert: function(note) {
		check(note, String);

		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		var postId = Shoutout.insert({
			note : note,
			score : 0,
			createdAt : new Date(),
			owner: Meteor.userId(),
      username: Meteor.user().username,
			//userIp: this.request.connection.remoteAddress,
			//userlocation: Geolocation.currentLocation()
		});

// The auto timed delete function

		check(postId, String);
		Meteor.setTimeout(function() {
			Shoutout.remove(postId);
		}, 2147483647);
	},

	shoutoutRemove: function(note) {
		check(note, String);

		Shoutout.remove(note);
	},

	shoutoutReturnPostId: function(note) {
		check(note, String);
		var postId = Shoutout.findOne(note);
	},

	shoutoutScoreUpdate: function(noteId) {
		check(noteId, String);

		Shoutout.update(noteId, {$inc: {'score': -1 }});
		Shoutout.update(noteId, {$addToSet: {voted : Meteor.userId()}});
	},


	scommentInsert: function(comment) {
		if (! this.userId) {
		  throw new Meteor.Error('not-authorized');
		}

		var commentId = Scomments.insert(comment);

		check(commentId, String);

		// The auto timed delete function
		Meteor.setTimeout(function() {
			Scomments.remove(commentId);
		}, 2147483647);
	},

	scommentRemove: function(comment) {
		Scomments.remove(comment);
	},

	scommentReturnPostId: function(comment) {
		check(comment, String);
		var postId = Scomments.findOne(comment);
	},

	scommentScoreUpdate: function(commentId) {
		check(commentId, String);
		Scomments.update(commentId, {$inc: {'score': -1 }});
		Scomments.update(commentId, {$addToSet: {voted : Meteor.userId()}});
	},

	// WELLNESS
	wellnessInsert: function(note) {
		check(note, String);

		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		var postId = Wellness.insert({
			note : note,
			score : 0,
			createdAt : new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username,
			//userIp: this.request.connection.remoteAddress,
			//userlocation: Geolocation.currentLocation()
		});

	// The auto timed delete function

		check(postId, String);
		Meteor.setTimeout(function() {
			Wellness.remove(postId);
		}, 2147483647);
	},

	wellnessRemove: function(note) {
		check(note, String);

		Wellness.remove(note);
	},

	wellnessReturnPostId: function(note) {
		check(note, String);
		var postId = Wellness.findOne(note);
	},

	wellnessScoreUpdate: function(noteId) {
		check(noteId, String);

		Wellness.update(noteId, {$inc: {'score': -1 }});
		Wellness.update(noteId, {$addToSet: {voted : Meteor.userId()}});
	},


	wcommentInsert: function(comment) {
		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		var commentId = Wcomments.insert(comment);

		check(commentId, String);

		// The auto timed delete function
		Meteor.setTimeout(function() {
			Wcomments.remove(commentId);
		}, 2147483647);
	},

	wcommentRemove: function(comment) {
		Wcomments.remove(comment);
	},

	wcommentReturnPostId: function(comment) {
		check(comment, String);
		var postId = Wcomments.findOne(comment);
	},

	wcommentScoreUpdate: function(commentId) {
		check(commentId, String);
		Wcomments.update(commentId, {$inc: {'score': -1 }});
		Wcomments.update(commentId, {$addToSet: {voted : Meteor.userId()}});
	},

	inviteInsert: function(code) {
		check(code, String);

		var inviteId = Invite.insert({
			code : code,
			createdAt : new Date(),
			accepted: false,
			acceptString: 'false',
		});
	},

	acceptInvite: function(code) {
    check(code, String);

    // find invitation in database
    let invite = Invite.findOne({ code: code});

    //check if invitation exists and if it hasn't already been accepted
    if (invite && invite.accepted == false) {
        //update invitation to now be accepted
        Invite.update(
            { '_id': invite._id},
            { $set: { accepted: true,
											'acceptString': 'true'}}
        );
				console.log('code accepted');

    } else {
				console.log('Your invitation code is not valid');
	      throw new Meteor.Error('invalid', 'Your invitation code ' + code + ' is not valid');
	  }
	},
});
