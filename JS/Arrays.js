let fruits = ['Apple', 'Orange', 'Peal', 'Kiwi', 'Pineapple', 'Melon'];

fruits.forEach(function (item) {
    console.log(item);
});

for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

let fruitsToStr =fruits.join(',');
console.log(fruitsToStr);

let fruitsToARr = fruitsToStr.split(',') ;
console.log(fruitsToARr);

let fruitsHello = fruits.map (fruits => 'hello ' + fruits);
console.log(fruitsHello);

let num = [-1, 0, 1, 2, 3, 4, 5];
num.forEach(function (item) {
    let numToBool = Boolean(num);
    console.log(numToBool);
});

