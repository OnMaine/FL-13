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

function containsValue(arrValue, obj) {
    let i = arrValue.length;
    while (i--) {
       if (arrValue[i] === obj) {
           return true;
       }
    }
    return false;
}
containsValue([2, 5, 8], 2);
containsValue([12, 4, 6], 5);

function flipOver(flipStr) {
    let newStr = '';
    for (let i = flipStr.length - 1; i >= 0; i--) {
        newStr += flipStr.charAt(i);
    }
    return newStr;
}
flipOver('hey world');

function makeListFromRange(arrRange) {
    let [start, stop] = arrRange;
    let list = [start], b = start;
    let step = 1;
    while (b < stop) {
        list.push(b += step);
    }
    return list;
}
makeListFromRange([2, 7]);

function formatDate(date) {
  let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear(),
      hour = d.getHours(),
      minutes = d.getMinutes();
  let result = [year, month, day].join('/') +' ' +[hour, minutes].join(':');
  if (month.length < 2) {
      month = '0' + month;
  }
  if (day.length < 2) {
      day = '0' + day;
  }
  return result;
}

formatDate(new Date('6/15/2019 09:15:00'));
formatDate(new Date());
