let dog = {
    name: 'Rex',
    age: 5
};

dog.action = 'Barking';
console.log(dog);

dog.name = 'Rich';
console.log(dog);

dog.math = function math(a,b) {
    return a + b;
};

console.log(dog.math(2,3));

