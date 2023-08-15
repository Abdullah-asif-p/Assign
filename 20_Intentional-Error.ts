/* Intentional Error: 
If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program. */

const places = [
    "Machu Picchu",
    "Grand Canyon",
    "Colosseum",
    "Santorini",
    "Valley of the Kings",
  ];

try {
    const index = 6
    if (index >= places.length) {
        throw new Error(`Index ${index} is out of bounds`);
    }
    const value = places[index]

    console.log(`Value at index ${index} :${value}`);
} catch (error : any) {
    console.error("An error occurred:", (error as Error).message);
}

export{}