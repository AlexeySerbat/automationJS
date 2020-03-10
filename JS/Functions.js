function addition () {
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(c);
}

addition();

function yourName() {
    let name = 'Alexander';
    if (name === 'Alex') {
        console.log('Hi ' + name )
    } else {
        console.log('Wrong name')
    }
}
yourName();

function argumentType (argument) {
    console.log(typeof argument);
}
argumentType(12);


let arr = [4,5,7,8,14,45,76];
function even(a){

    return a.filter(function(val){
        return val % 2 === 0
    })
}
console.log(even(arr));

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////Задачи из таблицы///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////











function changeOrder(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log('1: ')
console.log(changeOrder(12345));

function isPalindrome (word) {
    let wordReversed = '';
    for (let i = word.length; i > 0; i--) {
        wordReversed += word[i-1] ;
    }
    return word === wordReversed;
}
console.log(isPalindrome('dad'));

function combinator (string) {
    let list_of_strings = [];
    for(let i = 0; i < string.length; i++) {
        for(let j = i + 1; j < string.length + 1; j++) {
            list_of_strings.push(string.slice(i, j));
        }
    }
    return list_of_strings;
}

console.log(combinator("Dog"));

function inAlphabeticalOrder(string)
{
    return string.split('').sort().join('');
}
console.log(inAlphabeticalOrder("webmaster"));


function uppercase(str)
{
    let wordArray = str.split(' ');
    let upperCaseWord = [];

    for(let i = 0; i < wordArray.length; i++){
        upperCaseWord.push(wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1));
    }
    return upperCaseWord.join(' ');
}
console.log(uppercase("the quick brown fox"));


function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    for (let i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
console.log(longestWord('Web Development Tutorial'));

function vowelCount(str1)
{
    let vowelList = 'aeiouAEIOU';
    let vowelCount = 0;
    for(let i = 0; i < str1.length ; i++) {
        if (vowelList.indexOf(str1[i]) !== -1) {
            vowelCount += 1;
        }
    }
    return vowelCount;
}
console.log(vowelCount("The quick brown fox"));

function numberIsPrime(number) {

    if (number === 1) {
        return false;
    } else if(number === 2) {
        return true;
    } else {
        for(let i = 2; i < number; i++) {
            if(number % i === 0) {
                return false;
            }
        } return true;
    }
}
console.log(numberIsPrime(7));

function argumentType (argument) {
    console.log(typeof argument);
}
argumentType(12);

function Matrix(n) {

    let i;
    let j;

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i === j) {
                console.log(' 1 ');
            } else {
                console.log(' 0 ');
            }
        }
        console.log('----------');
    }
}
Matrix(4);


function showSecondGreatest_Lowest(arr_num) {
    arr_num.sort(function(x, y)
    {
        return x - y;
    });
    let unique = [arr_num[0]];
    let result = [];

    for(let j=1; j < arr_num.length; j++)
    {
        if(arr_num[j-1] !== arr_num[j])
        {
            unique.push(arr_num[j]);
        }
    }
    result.push(unique[1],unique[unique.length-2]);
    return result.join(',');
}

console.log(showSecondGreatest_Lowest([1,2,3,4,5]));

function perfectNumber(number) {
    let temp = 0;
    for(let i = 1; i <= number / 2; i++) {
        if(number % i === 0) {
            temp += i;
        }
    }
    if(temp === number && temp !== 0) {
        console.log("It's a perfect number.");
    } else {
        console.log("It's not a perfect number.");
    }
}
perfectNumber(28);

function factors(n) {
    let numFactors = [], i;
    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0) {
            numFactors.push(i);
            if (n / i !== i) {
                numFactors.push(n / i);
            }
        }
    numFactors.sort(function(x, y) {
        return x - y;
    });
    return numFactors;
}
console.log(factors(15));

function amountToCoins(amount, coins) {
    if (amount === 0) {
        return [];
    } else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat( amountToCoins(left, coins) );
        } else {
            coins.shift();
            return amountToCoins(amount, coins);
        }
    }
}
console.log(amountToCoins(46, [25, 10, 5, 2,1]));


function exp(b,n) {
    let ans = 1;
    for (let i =1; i <= n; i++) {
        ans = b * ans;
    }
    return ans;
}
console.log(exp(3, 3));

function uniqueChar(str1) {
    let str=str1;
    let uniql="";
    for (let x=0;x < str.length;x++) {
        if(uniql.indexOf(str.charAt(x))==-1) {
            uniql += str[x];
        }
    }
    return uniql;
}
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

function Char_Counts(str1) {
    let uchars = {};
    str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
    return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));

function array_binarySearch(narray, delement) {
    let mposition = Math.floor(narray.length / 2);
    if (narray[mposition] === delement) {
        return mposition;
    } else if (narray.length === 1) {
        return null;
    } else if (narray[mposition] < delement) {
        let arr = narray.slice(mposition + 1);
        let res = array_binarySearch(arr, delement);
        if (res === null) {
            return null;
        } else {
            return mposition + 1 + res;
        }
    } else {
        let arr1 = narray.slice(0, mposition);
        return array_binarySearch(arr1, delement);
    }
}

let myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(array_binarySearch(myArray, 17));

function BiggerElements(val) {
    return function(evalue, index, array) {
        return (evalue >= val);
    };
}
let result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log(result);

function makeid(l)
{
    let text = "";
    let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < l; i++ )
    {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
}
console.log(makeid(8));
