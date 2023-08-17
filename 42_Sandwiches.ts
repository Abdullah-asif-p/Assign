
const sandwich = (items : string[]) =>{
    console.log("You ordered a sandwich with: ");
    items.forEach(item =>{
        console.log(`- ${item}`);
    })
}

sandwich(["Turkey", "Swiss cheese", "Lettuce", "Tomato", "Mustard"]);
sandwich(["Smokey beef", "Cheddar cheese", "Mayonnaise"]);
sandwich(["Grilled chicken", "Ranch dressing", "Lettuce"]);