let person = {
    firstName: 'sean',
    age: 18 ,
    address: 'india',
    food: 'Non-Veg',
    bloodType: 'A-joke'
};
console.log(person)
console.log('changed name')
person.firstName = 'jeany'
console.log(person.firstName)
console.log('changed food type')
person['food'] = 'Veg'
console.log(person.food)
let selection = person.age
console.log(selection)

