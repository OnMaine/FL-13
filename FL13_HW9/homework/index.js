function makeListFromRange(arr) {
    let [start, stop] = arr;
    let list = [start], b = start;
    let step = 1;
    while (b < stop) {
        list.push(b += step);
    }
    return list;
}


console.log(makeListFromRange([3, 7]));
