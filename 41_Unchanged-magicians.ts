import { show_magicians } from "./39_Magicians";
import { make_great } from "./40_Great-magicians";

const magician_names: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Penn Jillette",
];
const new_arr = make_great(magician_names);
show_magicians(new_arr);
console.log("\nUnchanged Array");
show_magicians(magician_names);
