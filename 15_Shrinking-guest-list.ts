let Guests2 = ["Ali", "Hamaza", "Bilal"];
Guests2.unshift("Hassan");
Guests2.push("Shahid");
let mid1: number = Math.round(Guests2.length / 2);
Guests2.splice(mid1, 0, "Umer");
console.log(Guests2)
console.log("Oh no, the new dinner table won't arrive in time for the dinner, and I only have space for two guests!");
let len1:number=Guests2.length;
for (let i = 0; i < len1; i++) {
  if (Guests2[i] == "Hamaza") {
    Guests2[i] = "Aqeel";
  }
  if (Guests2.length <= 2){
      let invited = Guests2.pop();
      console.log(`${invited}, I cordially invite you to join me for an enchanting dinner gathering.`);
    }
  else{
    let non_invited = Guests2.pop();
    console.log(`${non_invited}, sorry i cannot invite you to dinner`);
  }
};
console.log(Guests2)