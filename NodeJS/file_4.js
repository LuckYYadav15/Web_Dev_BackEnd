// module.exports.array = ['data1', 'data2', 'data3', 'data4'];
// module.exports.fun = {
//     name: "Name",
//     roll: "roll",
// }
// object

// objects
a = ["Yuvi", "Karan", "Boman"]
const person = {
    name: a[0],
    age: 21,
    greet() {
        console.log( 'hi, i am ' + this.name )
    }
}
person.greet()
//database to be used in other files