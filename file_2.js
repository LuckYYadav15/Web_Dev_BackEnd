// Modules

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
module.exports = fun;