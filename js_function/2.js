function primeNumber(num) {
    if ((num < 2) || (num > 1000)) {
        return "Данные неверны";
    } else {
        for (let i = 2; i < num; i ++) {
            if (num % i == 0) {
                return "Не простое число";
            }
        }
        return "Простое число";
    }
}

let a = prompt();
console.log(primeNumber(a));