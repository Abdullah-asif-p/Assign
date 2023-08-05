const main = () =>{
    let Name : string = "jaVed iqBal";
    let uppercased_Name : string = Name.toUpperCase();
    console.log(uppercased_Name);
    let lowercased_Name : string = Name.toLowerCase();
    console.log(lowercased_Name);
    let titlecased_Name : string = titlecase(Name);
    console.log(titlecased_Name);
};

// Title case is given string (Name) and it returns the modified string
const titlecase = (str:string) => {
// Converts the entire input string(str) to lowercase and split it into an array of words using map
    return str.toLowerCase().split(" ").map(mapping_string_array).join(" ");   
};

// Map function used to convert each word to title case
const mapping_string_array = (word:string) => {
// Convert the first character of the word to uppercase and concatenate it with the rest of the word
    return ((word.charAt(0).toUpperCase()) + word.slice(1));
};
