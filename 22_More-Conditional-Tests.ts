import { log } from "console";


let drink = "COFFEE";
let num = 150;
let lowcasestr = drink.toLowerCase()
const arr = ["Apples","Mango","Banana"]
log(`drink == 'coffee': ${drink == "coffee"}`);
log(`drink != 'coffee': ${drink != "coffee"}`);
log(`lowcasestr == 'coffee': ${lowcasestr == 'coffee'}`)
log(`lowcasestr == 'cOFFEE': ${lowcasestr == 'cOFFEE'}`)
log(`num > 0: ${num > 0 }`)
log(`num < 0: ${num < 0 }`)
log(`num === 150: ${num === 150 }`)
log(`num <= 100: ${num <= 100 }`)
log(`num >= 150: ${num >= 150 }`)
log(`num !== 150: ${num !== 150 }`)
log(`(num < 0) and (num > 100): ${(num < 0) && (num > 100)}`)
log(`(num < 0) or (num === 160): ${(num > 0) || (num === 160)}`)
log(`does arr contains element "Mango": ${arr.includes("Mango")}`)
log(`does arr contains element "1": ${arr.includes("1")}`)