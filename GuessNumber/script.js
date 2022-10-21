// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// /*
// Problem 
// we work for a company building a smart home trermometer. our most recent task is this:
// Given an array of temparature of one day, calculate the temperature amplitude. keep in mind
// that sometimes there might be a senser error
// */
// const temparaturess = [3, -2, -6, -1, 'error', 9, 1, 17, 15, 14, 9, 5];
// const calcAmplitude = (temparaturess) => {
//     let min = temparaturess[0];
//     let max = temparaturess[0];
//     for (let i = 0; i < temparaturess.length; i++) {
//         if (temparaturess[i] === "string")
//             continue;
//         if (min > temparaturess[i]) {
//             min = temparaturess[i];
//         }
//         if (temparaturess[i] > max)
//             max = temparaturess[i];
//     }
//     return (max - min);
// }
// const amplitude = calcAmplitude(temparaturess);
// console.log(amplitude);
// //Problem 2
// //Function should now recive 2 array of temp
// //1) Understand the problem
// //-with 2 array should be implement functonality twoce? NO 
// //just merge two array
// //2) Breaking up into sub-problems 
// //Merge 2 array

// const measureKelvin = function () {
//     const mesurment = {
//         type: 'temp',
//         unit: "celsius",
//         value: Number(prompt("Degrees celsius"))
//     }
//     const kelvin = mesurment.value + 273;
//     return kelvin;
// }
// console.log(measureKelvin());


const calcAmplitude = (t1, t2) => {
    const temparaturess = t1.concat(t2);
    let min = temparaturess[0];
    let max = temparaturess[0];
    for (let i = 0; i < temparaturess.length; i++) {
        if (temparaturess[i] === "string")
            continue;
        if (min > temparaturess[i]) {
            min = temparaturess[i];
        }
        if (temparaturess[i] > max)
            max = temparaturess[i];
    }
    return (max - min);
}
const amplitudeBug = calcAmplitude([2, 5, 1], [9, 4, 5])
console.log(amplitudeBug);