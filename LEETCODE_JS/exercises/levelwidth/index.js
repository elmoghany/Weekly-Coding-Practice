// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let count = []
    let loop = 0
    let node = root
    if(node){
        count[0] = 1
        loop++
    }
    for(let child of root.children){

        loop++
    }

    return count
}

module.exports = levelWidth;
