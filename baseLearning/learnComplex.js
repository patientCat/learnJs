// learn array
const array = new Array(1, 2, 3 ,4)
console.log(array)

const fruits = ["banana", true, 1]
console.log(fruits)

fruits.push('apple')

console.log(fruits)

// learn object

const person ={
    name : "luke",
    age : 13,
    address : "new street",
    like : ["fruit", "badminton"]
}

console.log(person)

console.log(person.name)
console.log(person.like[0])


// get value from person

const {
    name,
    unknown,
} = person;

console.log(`name=${name}, unknown=${unknown}`)

// add attribute

person.email = "kk@qq.com"
console.log(person)


// json
const todolist = [
    {
        id : 1,
        text : "do sport",
        IsComplete : true,
    },
    {
        id : 2,
        text : "eat dinner",
        IsComplete : true,
    },
    {
        id : 3,
        text : "meet girl friend",
        IsComplete : false,
    },
]

console.log(JSON.stringify(todolist))