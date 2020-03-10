let cat = {
    eats: true,
    color: 'black'
};

let dog = {
    jumps: true
};

dog.__proto__ = cat;

console.log(dog.color);

