function convert(stringToSplit) {
    result = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof(arguments[i]) === "string") {
            result.push(Number(arguments[i]));
        } else {
          result.push(String(arguments[i]));
        }
    }
    return result;
}

console.log(convert('1', 2, 3, '4'));

console.log(typeof result[1]);
