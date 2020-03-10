if(browser === 'Edge') {
    alert('You\'ve got the Edge!')
} else if (browser === 'Chrome'
|| browser === 'Firefox'
|| browser === 'Safari'
|| browser === 'Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert('We hope that this page looks ok!')
}

const number = +prompt('Enter number between 0 and 3', '');
switch (number) {
    case 0:
        alert('You entered 0');
        break;
    case 1:
        alert('You entered 1');
        break;
    case 2:
    case 3:
        alert('You entered probably 2 or 3');
        break;
}

let username = prompt('Enter login');
if (username === 'Admin') {
    let password = prompt('Enter password');
    if (password === 'I am Admin') {
        alert('Hello!');
    } else if (password === '' || password === null) {
        alert('Cancelled');
    } else {
        alert('Wrong password');
    }
} else if (username === '' || username === null) {
    alert('Cancelled');
} else {
    alert('IDK Who you are!');
}