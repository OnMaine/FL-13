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

function getArrayOfKeys(arr, key) {
  const values = []
  executeforEach(arr, row => {
    const value = row[key]
    values.push(value)
  })
  return values
}

function substitute(array) {
  return mapArray(array, value => {
    if (value < 20 && value > 10) {
      return '*'
    }
    return value
  })
}

const getPastDay = (date, daysDelta) => {
  const MS_PER_DAY = 8.64e+7;

  const dateEpoch = date.valueOf();
  const msDelta = daysDelta * MS_PER_DAY;
  return new Date(dateEpoch - msDelta);
}
const date = new Date(2020, 0, 2);
getPastDay(date, 1);
getPastDay(date, 2);
getPastDay(date, 365);

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
