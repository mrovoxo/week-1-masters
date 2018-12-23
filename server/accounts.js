/*
AccountsTemplates.configure({
  postSignUpHook: postSignUp
});

var postSignUp = function(userId){
  console.log(userId)
  Roles.addUsersToRoles(userId, 'admin')
};
*/

AccountsTemplates.addField({
  _id: "address",
  type: "text",
});
