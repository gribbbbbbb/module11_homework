let arr = [4, 2, 0, null, 5, 'a', null, 2];

function evenoddArray(arrfunc) {
    let odd = 0;
    let even = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arrfunc[i] == 0) {
            zero++;
        } else {
            if (typeof(arrfunc[i]) == "number") {
                if (arrfunc[i] % 2 ==0) {
                    even++;
                } else {
                    odd++;
                }
            }
        }
    }

    return [odd, even, zero];
}

let res = evenoddArray(arr);

console.log("Нечётных = " + res[0]);
console.log("Чётных = " + res[1]);
console.log("Нулей = " + res[2]);