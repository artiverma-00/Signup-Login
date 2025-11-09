// Signup function
function signup(userName) {
  const usernames = ["john", "alice", "bob"];

  if (usernames.includes(userName)) {
    return "User Already Regsistered, Please Login";
  } else {
    usernames.push(userName);
    return "Signup Successfull, Please Login";
  }
}

console.log(signup("john"));     // User Already Regsistered, Please Login
console.log(signup("charlie"));  // Signup Successfull, Please Login

function login(userName, password) {
  const usernames = ["john", "alice", "bob"];
  const correctPassword = "Emp@123";

  if (usernames.includes(userName)) {
    if (password === correctPassword) {
      return "Login Sucessfull...";
    } else {
      return "Wrong Password....";
    }
  } else {
    return "User Not Found, Please Signup";
  }
}


console.log(login("alice", "Emp@123"));  // Login Sucessfull...
console.log(login("alice", "1234"));     // Wrong Password....
console.log(login("newUser", "Emp@123")); // User Not Found, Please Signup
