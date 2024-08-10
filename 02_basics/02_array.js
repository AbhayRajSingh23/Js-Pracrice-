const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)      //=> add the dc_heroes array as element to marvel_heros array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //=> access the 2D array

// const allHeros = marvel_heros.concat(dc_heros) //=> concat mean here mean in array all elements are joined 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  //=> better way to add elements of multiple elements

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //=> flat methods makes the multidimention array to 1D array
// console.log(real_another_array);



console.log(Array.isArray("Hitesh"))        //=> returns boolean value
console.log(Array.from("Hitesh"))           //=> makes array of the string or obejct entered 
console.log(Array.from({name: "hitesh"})) // interesting [as in case of object object we need to specify if we want key or value as array]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //=> makes array of the fileds that are entered 