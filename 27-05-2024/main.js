function outerFunction(x, initialValue) {
    let result = initialValue;

    function innerFunction(y) {
        result += y;
        return result;
    }

    return innerFunction;
}



