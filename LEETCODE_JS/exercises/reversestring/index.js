// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     const temp = []
//     for(let i=str.length-1; i>=0; i--){
//         temp[str.length-i-1] = str[i]
//     }
//     return temp.join('')
// }

// function reverse(str) {
//     return str.split('').reverse().join('')
// }

// function reverse(str) {
//     let reversed = ''

//     for(let character of str){
//         reversed = character + reversed
//     }
//     return reversed
// }


function reverse(str) {
    return str.split('').reduce( (accumulator, current_char) => {
        return current_char + accumulator
    }, )
}

reverse("hello")
module.exports = reverse;
