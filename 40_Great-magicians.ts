import {show_magicians} from "./39_Magicians";


export const make_great = (magician_names: string[]) : string[] =>{
    const new_arr = magician_names.map(name => "Great " + name);
    return new_arr;
} 


if (require.main === module){
    const magician_names: string[] = ["Harry Houdini","David Copperfield","Penn Jillette"]
    const new_arr = make_great(magician_names);
    show_magicians(new_arr)
}
