x = '10'
if(x == 10){
    console.log('x is 10')
}

if(x === '10'){
    console.log('x is 10')
}

// learn 三目运算符

const y = 10

y > 10 ? console.log('y > 10') : console.log('y <= 10')


// learn for

for(let i = 0; i < 10; i++){
    console.log(i)
}

let array = [
    {
        name :"luke",
        age : 12,
    },
    {
        name :"james",
        age : 18,
    },
]

for(let elem of array){
    console.log(elem.name)
}

array.forEach((value, number, a_array)=>{
    console.log(value.name)
});
