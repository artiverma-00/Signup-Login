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
