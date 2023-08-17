export const show_magicians = (magician_names:string[]):void =>{
    for (const magician of magician_names){
        console.log(`Magician's name: ${magician} `)
    }
}


if (require.main === module){
    const magician_names: string[] = ["Harry Houdini","David Copperfield","Penn Jillette"]
    show_magicians(magician_names)
}