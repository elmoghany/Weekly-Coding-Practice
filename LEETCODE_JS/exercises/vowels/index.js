// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}


// function vowels(str) {
//     // checker = ('aeiou')
//     let checker  = ['a', 'e', 'i', 'o', 'u']
//     let count=0
//     for(let char of str.toLowerCase()) {
//         if (checker.includes(char)){
//             count++
//         }
//     }
//     return count
// }

// function vowels(str) {
//     vowels = ['a', 'e', 'i', 'o', 'u']
//     let count=0
//     for(let char of str.toLowerCase()) {
//         console.log(char)
//         for(let i=0; i<vowels.length; i++){
//             if (char == vowels[i])
//                 count++
//         }
//     }
//     return count
// }

module.exports = vowels;
