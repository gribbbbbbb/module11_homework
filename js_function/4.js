let num_1 = 5;
let num_2 = 15;

let counter = setInterval(function interval() {
    console.log(num_1);
    if (num_1 == num_2) {
        clearInterval(counter);
    }
    num_1++
}, 1000);
