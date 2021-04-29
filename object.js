// Data Structures - Object

// SWBAT 
    // 1. initialize/create an object
    // 2. access object values using their respective keys

let myObject = {}
                // 0        1                   2           3
let nicksArray = ["Nick", "Cookeville, TN", "Red Hook, NY", 29]
                //  0               1       2           3
let archersArray = ["Cookeville,TN", 1, "Archer", "Cookeville, TN"]

// console.log(nicksArray[0])
// console.log(archersArray[2])

const nicksObj = {name: "Nick", currentLocation: "Cookeville, TN", age: 29}
    nicksObj.name = "Patrick Star"    

let archersObj = {currentLocation: "Cookeville, TN", age: 1, name: "Archer"}

//  console.log(nicksObj["name"])
//  console.log(archersObj.name)
let x = 2
 
function passByValue(number){
     number = 5
     console.log(number)
 }

//  passByValue(x)
//  console.log(x)

 function passByReference(object){
     let newObj = {...object}
    // let newObj = Object.assign({ramdp: "alfjal"}, object)
    //  console.log(newObj)
     newObj.name = "SpongeBob"
     return newObj
 }

 let newNickObj= passByReference(nicksObj)
//  console.log(newNickObj)
//  console.log(nicksObj)

 let personArray = [archersObj, nicksObj]

 console.log(personArray)

 let newNames = personArray.map(person => `${person.name} lives in ${person.currentLocation} and is ${person.age} years old.`)

 console.log(newNames)