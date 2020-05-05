function convert() {
    let result = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            result.push(Number(arguments[i]));
        } else {
          result.push(String(arguments[i]));
        }
    }
    return result;
}
convert();

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
    return arr;
}

executeforEach();

function mapArray(arr, func) {
    let array =[];
    executeforEach(arr,function(el) {
        array.push(func(el));
    });
    return array;
}
mapArray();

function filterArray(arr, func) {
    let filteredArr = [];
    executeforEach(arr, function(el) {
        if (func(el)) {
            filteredArr.push(el);
        }
    });
    return filteredArr;
}
filterArray();
//5

function flipOver(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}
flipOver();
//7
function makeListFromRange(arr) {
    let [start, stop] = arr;
    let list = [start], b = start;
    let step = 1;
    while (b < stop) {
        list.push(b += step);
    }
    return list;
}
makeListFromRange();
