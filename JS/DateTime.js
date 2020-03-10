let d = new Date(2012, 1, 20, 3, 12);
console.log('1: ', '\n', d); // 1 задача из главы

function getWeekDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}
let date = new Date(2018, 2, 5);
console.log('2: ', '\n', getWeekDay(date)); //2 задача из главы

function getEuroLocalDay(date) {

    let day = date.getDay();

    if (day === 0) {
        day = 7;
    }

    return day;
}
console.log('3: ', '\n', getEuroLocalDay(date)); //3 задача из главы

function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

let date2 = new Date(2018, 4, 22);
console.log('4: '); //4 задача из главы
console.log(getDateAgo(date2, 1));
console.log(getDateAgo(date2, 2));
console.log(getDateAgo(date2, 365));

function getLastDayOfMonth(year, month) {
    let date3 = new Date(year, month + 1, 0);
    return date3.getDate();
}
console.log('5: ');
console.log(getLastDayOfMonth(2012, 0)); //5 задача из главы
console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2013, 1));

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.round(diff / 1000);
}
console.log('6: ');
console.log(getSecondsToday()); //6 задача из главы

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}
console.log('7: ');
console.log(getSecondsToTomorrow()); //7 задача из главы


let nowDate = new Date();
console.log('1: ');
console.log(nowDate.getDate());

let currentDay = nowDate.getDay();
let currentMonth = nowDate.getMonth();
let currentYear = nowDate.getFullYear();
console.log('2: ');
console.log(currentDay);
console.log(currentMonth);
console.log(currentYear);