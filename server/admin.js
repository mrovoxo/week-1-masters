/*
var users = [
//      {username:"boss", password:"bossman", roles:['admin']},
//      {username:"notboss", password:"notboss", roles:['reg']},
//      {username:"greg", password:"gregular", roles:[]}
  {username:"devo", password:"developer", roles:['developer', 'admin']}
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
*/
