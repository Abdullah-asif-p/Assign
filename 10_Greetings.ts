const Names = ["Hamza", "Ali", "Ahsan", "Hassan"];
let len: number = Names.length;
// loop to print all the names in the Array(Names) one by in one 
for (let i: number = 0; i < len; i++){ 
    // Greet each person in array using template literals
    console.log(`Hello,${Names[i]}`);
};