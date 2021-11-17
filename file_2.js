// Modules
// "fun" to be used in file_3 also
const fun = (name)=>{
    console.log(`Hello ${name}`);
}

fun("Kattapa");

const rahul = "Rahul";

fun(rahul);
setInterval(()=>
{
    fun("Hit");
},1000);

module.exports = fun;      // exporting function