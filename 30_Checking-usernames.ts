const current_users = ["Admin", "Eric", "Jack", "Ali", "Alex"];
const new_users = ["Lily", "Max", "Ali", "Jack", "Leo"];

for (const current_user  of current_users){
    for (const new_user of new_users){
        if (current_user == new_user){
            console.log(`${new_user} is already in use try a new username`);
        }else{
            console.log(`username ${new_user} is available`)
        }
    }
}
    
