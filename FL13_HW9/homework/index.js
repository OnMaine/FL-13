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

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
    return;
}

function mapArray(arr, func) {
    let array =[];
    executeforEach(arr,function(el) {
        array.push(func(+el));
    });
    return array;
}

function filterArray(arr, func) {
    let filteredArr = [];
    executeforEach(arr, function(el) {
        if (func(el)) {
            filteredArr.push(el);
        }
    });
    return filteredArr;
}

function containsValue(arrValue, obj) {
    let i = arrValue.length;
    while (i--) {
       if (arrValue[i] === obj) {
           return true;
       }
    }
    return false;
}

function flipOver(flipStr) {
    let newStr = '';
    for (let i = flipStr.length - 1; i >= 0; i--) {
        newStr += flipStr.charAt(i);
    }
    return newStr;
}

function makeListFromRange(arrRange) {
    let [start, stop] = arrRange;
    let list = [start], b = start;
    let step = 1;
    while (b < stop) {
        list.push(b += step);
    }
    return list;
}

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
    let bigger = 10;
    let smaller = 20;
    if (value < smaller && value > bigger) {
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

function formatDate(date) {
  let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear(),
      hour = d.getHours(),
      minutes = d.getMinutes();
  let result = [year, month, day].join('/') +' ' +[hour, minutes].join(':');
  let febr = 2;
  if (month.length < febr) {
      month = '0' + month;
  }
  if (day.length < febr) {
      day = '0' + day;
  }
  return result;
}
