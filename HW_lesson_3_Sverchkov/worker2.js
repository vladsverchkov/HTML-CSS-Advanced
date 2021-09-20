onmessage = function (e) {
    let sum = e.data[0] + e.data[1];

    if (Number.isInteger(sum) && sum > 0) {

        function calcFactorial(x) {

            if (x > 1) {
                return (calcFactorial(x - 1) * x);
            }
            else {
                return x;
            }
            
        }

        for (let i = 1; i <= sum; i++) {
            this.postMessage(i + "! = " + calcFactorial(i) + "<br/>");
        }

        this.postMessage("********************");

    } 
    else 
    {
        this.postMessage("Введите цифры, чья сумма больше 0!");
    }

}