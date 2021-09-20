onmessage = function (e) {
    let sum = e.data[0] + e.data[1];

    if (Number.isInteger(sum) && sum > 0) {

        function multiplyNumbers(x) {
            let result = 1;
            let arrayOfRandomNumbers = [];
            let arrayOfResultValues = [];

            for (let i = 1; i <= x; i++) {
                let rand = Math.floor(Math.random() * 100000);
                result *= rand;

                arrayOfResultValues.push(result);
                arrayOfRandomNumbers.push(rand);
            }
            return [arrayOfResultValues, arrayOfRandomNumbers];
        }

        let result = multiplyNumbers(sum);

        for (let i = 0; i < sum; i++) {
            this.postMessage("Iteration #" + i + " = " + result[0][i] +
                ". Рандомное число на этой итерации: " + result[1][i] + "<br/>");
        }

        this.postMessage("********************");

    }
    else {
        this.postMessage("Введите цифры, чья сумма больше 0!");
    }
}