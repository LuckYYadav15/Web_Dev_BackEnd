const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;
// if we don't know data type then we have to use a '!' at last to avoid error in ts
// generic type that interact with another type of data e.g. array
//const nRes: Array<number> = [];

const numResults: number[] = [];
const stringResults: string[] = [];
/*
function add(num1: number, num2: number)
{
    return num1+num2;
}

buttonElement.addEventListener('click', () =>
{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    console.log(result);
});       */


/*
function add(num1: number | string, num2: number | string)
{
    if(typeof num1 == 'number' && typeof num2 == 'number')
    {
        return num1 + num2;
    }
    else if(typeof num1 == 'string' && typeof num2 == 'string')
    {
        return num1 + num2;
    }
    return +num1 + +num2;
}
*/

type numorstr = number | string;
type objres = {val: number; timestamp: Date};
interface ResObj {
    val: number;
    timestamp: Date;
}

function add(num1: numorstr, num2: numorstr)
{
    if(typeof num1 == 'number' && typeof num2 == 'number')
    {
        return num1 + num2;
    }
    else if(typeof num1 == 'string' && typeof num2 == 'string')
    {
        return num1 + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj: objres)
{
    console.log(resultObj.val);
}

buttonElement.addEventListener('click', () =>
{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result as number);
    const stringResult = add(num1, num2);
    stringResults.push(stringResult as string);
    printResult({val: result as number, timestamp: new Date()});
    console.log(numResults, stringResults);
});

const mypromise = new Promise<string>((resolve, reject)=>
{
    setTimeout(() =>
    {
        resolve('It worked');
    }, 1000);
});

mypromise.then((mpresult)=>
{
    console.log(mpresult.split('w'));
});