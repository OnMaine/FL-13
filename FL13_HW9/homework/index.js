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
convert('1', 2, 3, '4');

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
    return;
}

executeforEach([1,2,3], function(el) {
 console.log(el * 2)
});

function mapArray(arr, func) {
    let array =[];
    executeforEach(arr,function(el) {
        array.push(func(+el));
    });
    return array;
}
mapArray([2, '5', 8], function(el) {
  return el + 3
});

function filterArray(arr, func) {
    let filteredArr = [];
    executeforEach(arr, function(el) {
        if (func(el)) {
            filteredArr.push(el);
        }
    });
    return filteredArr;
}
filterArray([2, 5, 8], function(el) {
  return el % 2 === 0
});

function containsValue(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}
containsValue([2, 5, 8], 2);
containsValue([12, 4, 6], 5);

function flipOver(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}
flipOver('hey world');

function makeListFromRange(arr) {
    let [start, stop] = arr;
    let list = [start], b = start;
    let step = 1;
    while (b < stop) {
        list.push(b += step);
    }
    return list;
}
makeListFromRange([2, 7]);
