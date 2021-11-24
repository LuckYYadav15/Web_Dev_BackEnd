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

// editing array
console.log(a.map((username, surname)=> "Name: " + username + surname))
console.log('this is original a: ' + a)
//database to be used in other files

// nested array: spread and rest
const nestedarr = [a]
console.log("this is nestedarr: " + nestedarr)

// array with values of "a" and we can add more values to it
const b = a.slice();
b.push("hariram");
console.log("this is new array: b"+ b)

const copiedarr = [...a];
console.log("this is copiedarr: " + copiedarr);

const copiedperson = {...person}
console.log("copied object: " + copiedarr)

// allows to pass as many as values to function
const fun = (...args) =>{
    return [args]
}
console.log(fun(1,2,3,4,546,"sadf"))


// Destructuring
const print = ({name, age}) => {
    console.log(name, age);
}
print(person);
const [name1, name2] = a;
console.log(name1, name2);