onmessage = function (e) {
    let sum = e.data[0] + e.data[1];

    if (Number.isInteger(sum) && sum > 0) {
        function calcFib(x) {
            if (x > 1) {
                return calcFib(x-1) + calcFib(x-2);
            }
            else {
                return x;
            }
        }
    
        for (let i = 0; i <= sum; i++) {
            this.postMessage("Итерация №" + i + " = " + calcFib(i) + "<br/>");
        }
    
        this.postMessage("********************");
    }

    else {
        this.postMessage("Введите цифры, чья сумма больше 0!");
    }

    

}