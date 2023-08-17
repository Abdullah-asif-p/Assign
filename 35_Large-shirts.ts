const make_shirt = (size: string = "large", msg: string = "I love TypeScript"):void=>{
    console.log(`Creating a ${size}-sized T-shirt with the message: "${msg}"`);
};
make_shirt()
make_shirt("medium")
make_shirt("small")

export{}
