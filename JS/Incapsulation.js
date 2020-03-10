let dog = {
    name: 'Rex',
    color: 'Black',
    fur: 'short',
    paws: function (frontPaws) {
        return function (backPaws) {
            return frontPaws + backPaws;
        }
    }
};

console.log(dog.paws(2)(2));
