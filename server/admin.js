var users = [
      {username:"boss", password:"bossman", roles:['admin']},
      {username:"notboss", password:"notboss", roles:['reg']},
      {username:"greg", password:"gregular", roles:[]}
    ];

_.each(users, function (user) {
  var id;

  id = Accounts.createUser({
    username: user.username,
    password: user.password,
  });

  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(id, user.roles);
  }

});

//Roles.addUsersToRoles("JXP5R7DPph8xjZoDF", ['admin']);

/*

AccountsTemplates.configure({
  postSignUpHook: postSignUp
});

var postSignUp = function(userId){
  console.log(userId)
  Roles.addUsersToRoles(userId, 'admin')
};


AccountsTemplates.addField({
  _id: "address",
  type: "text",
});

*/
