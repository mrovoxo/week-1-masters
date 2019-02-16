Template.invite.events({
  'click a.generateCode':function() {
    const code = Random.hexString(16);
    code._id = Meteor.call('inviteInsert', code);
    window.alert('Invitation Code: ' + code);
  },

  'submit form': function(e) {
    e.preventDefault();

    var code = e.target.code.value;
    check(code, String);
    if (code == "") {
      alert("You can't insert an empty invitation code. Please insert a proper code :)")
    } else {
      Meteor.call('acceptInvite', code, function(error, result) {
        if (error) {
          window.alert(error.message);
        } else {
          window.alert('Invitation code confirmed. Welcome to oSay! You can now create an account');
          Router.go('/register');
        }
      });
      // AND THEN ROUTER.GO(SIGN UP) THAT WAY THEY CAN IMMEDIATELY REGISTER FOR AN Account
      // AFTER THIS, HAVE LOGIN BUTTONS ONLY HAVE THE LOGIN AND NOT THE SIGN UP SO THAT USERS
      // CAN ALWAYS LOGIN BC ONLY THOSE WHO HAVE USED THE INVITATION CODE WILL HAVE THE OPPORTUNITY
      // TO CREATE AN ACCOUNT EVEN THOUGH EVERYONE HAS THE OPPORTUNITY TO LOGIN BUT THAT DOESN'T
      // MATTER BC NOT EVERYONE CAN CREATE AN ACCOUNT WITHOUT AN INVITATION CODE

    // clear field
      e.target.code.value = "";
    }
  }
});




//    Accounts.createUser({invitationId: Template.instance().data.invitationId /*,.. other fields */})

/*
Template.invite.helpers({
  results: function(){
    return Invites.find({
      code: Session.get('invite'),
          if (invite = invite)
          {
            Router.go('/');
          }
        });
    }
});
*/

// 031cb1207f84275b

// 3f3181647c8cb578

// 446144f0ddf42122

// f17735a6083080c2
