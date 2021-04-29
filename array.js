// Data Structures - Array

// SWBAT 
    // 1. initialize/create an array
    // 2. access individual elements of an array by index
    // 3. loop over an array using forEach


let myArray = []
// let names = ["Alberto", "Mike", "Valton"]
myArray.push("bananas")
// console.log(myArray)
myArray.unshift("apples")
// console.log(myArray)
// console.log(myArray[0])
/// array followed by square brackets containing index
/// array[index]

function logArrayElements(array){
    let newArray = [...array]
    // let newObj = {...object}
    newArray[2] = "Zach"
    console.log(newArray[2])
}

// logArrayElements(names)
// console.log(names[2])



// iteration
/// for ([initialization]; [condition]; [final-expression]{
    // code to execute on each loop
// }

let names = ["Alberto"]

function greeter(names){
    for(let i = 0; i < names.length; i++){
        console.log(i)
        console.log(names[i])
    }
}

greeter(names)