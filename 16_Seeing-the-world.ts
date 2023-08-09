const places = [
  "Machu Picchu",
  "Grand Canyon",
  "Colosseum",
  "Santorini",
  "Valley of the Kings",
];
console.log(places);
const sorted_array = [...places].sort();
console.log("sorted array \n", sorted_array);
console.log("Orignal array \n", places);
const reverse_sorted_array = [...sorted_array].reverse();
console.log("reverse sorted array\n", reverse_sorted_array);
console.log("Orignal array \n", places);
console.log("Reversed order:", places.reverse());
console.log("Back to original order:", places.reverse);
console.log("Sorted in alphabetical order:", places.sort());
console.log("Sorted in reverse alphabetical order:", places.reverse());

export{}