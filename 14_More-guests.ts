let Guests1 = ["Ali", "Hamaza", "Bilal"];
Guests1.unshift("Hassan");
Guests1.push("Shahid");
let mid: number = Math.round(Guests1.length / 2);
Guests1.splice(mid, 0, "Umer");
for (let i = 0; i < Guests1.length; i++) {
  if (Guests1[i] == "Hamaza") {
    Guests1[i] = "Aqeel";
  }
  console.log(`${Guests1[i]}, I cordially invite you to join me for an enchanting dinner gathering.`);
}
console.log("\nGreat news! I've found a bigger dinner table, more space for everyone at the party!");
