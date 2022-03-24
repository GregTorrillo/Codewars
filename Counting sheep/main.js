
//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
   let counter = 0
    for(let i = 0; i < arrayOfSheep.length; i++) {
        if(arrayOfSheep[i]) counter += 1
    }
    return counter
}

//forEach 
function countSheeps(arrayOfSheep) {
    let counter = 0
    arrayOfSheep.forEach(sheep => {
        if(sheep) counter++
    })
    return counter
}

//filter 
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(item => item === true).length
}

//reduce
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((acc, cur) => acc + cur, 0)
}
