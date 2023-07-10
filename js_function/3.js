function summ(num_1) {
    return function (num_2) {
        return num_1 + num_2;
    }
}

console.log(summ(5)(12));