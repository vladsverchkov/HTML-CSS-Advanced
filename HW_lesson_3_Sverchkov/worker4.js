onmessage = function (e) {
    let sum = e.data[0] + e.data[1];

    if (Number.isInteger(sum) && sum > 0) {

        function hardCalculations(x) {
            if (x > 3) {
                return hardCalculations(x - 1) * hardCalculations(x - 1);
            }
            else {
                return x;
            }
        }

        for (let i = 1; i <= sum; i++) {
            this.postMessage("Iteration #" + i + " = " + hardCalculations(i) + "<br/>");
        }

        this.postMessage("********************");

    }

    else {
        this.postMessage("Введите цифры, чья сумма больше 0!");
    }
}