const usernames = ["Admin", "Eric", "Jack", "Ali", "Alex"];

if (usernames.length === 0) console.log("We need to find some users!");

for (const username of usernames) {
  if (username == "Admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again`);
  }
}
usernames.length = 0;
