console.log('1: ')
for (let i = 0; i < 10; i++) {
    console.log(i)
}

i = 3;
console.log('2: ');
while (i) {
    console.log(i--);
}

i = 0;
console.log('3: ');
while (++i < 5) {
    console.log( i );
}

i = 0;
console.log('4: ');
while (i++ < 5) {
    console.log( i );
}

console.log('5: ');
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('6: ');
for (let i = 0; i < 5; ++i) {
    console.log(i);
}

console.log('7: ');
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log( i );
    }
}

console.log('8: ');
i = -1;
while (++i < 3) {
    console.log(`number ${i}!`)
}

console.log('9: ');
let number;
do {
    number = prompt("Enter a number greater than 100", 0);
} while (number <= 100 && number);


console.log('10: ');
let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue nextPrime;
        }

        console.log( i );
    }

