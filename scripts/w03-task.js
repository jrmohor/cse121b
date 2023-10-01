/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

    function add (number1, number2) {
       return number1 + number2; 
        }
    
    function addNumber() {
        let addNumber1 = Number(document.querySelector('#add1').value);
        let addNumber2 = Number(document.querySelector('#add2').value);
        
        document.querySelector('#sum').value = add(addNumber1, addNumber2);
    }
    document.querySelector('#addNumbers').addEventListener('click', addNumber);

/* Function Expression - Subtract Numbers */

    let subtract = function (num1, num2) {
        return num1 - num2;
        }

    function subtractNumbers() {
            let num1 = Number(document.querySelector('subtract1').value);
            let num2 = Number(document.querySelector('subtract2').value);

            document.querySelector('difference').value = subtract(num1, num2);
    }
    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);    

/* Arrow Function - Multiply Numbers */

    let multiply = (number1, number2) => number1 * number2;
    let multiplyNumbers = () => {
        let multiplyNum1 = Number(document.querySelector('#factor1').value);
        let multiplyNum2 = Number(document.querySelector('#factor2').value);
        return document.querySelector('#product').value = multiply(multiplyNum1,multiplyNum2);
    }
    document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

    let divide = (number1, number2) => number1 / number2;
    let divideNumbers = () => {
        let divideNumb1 = Number(document.querySelector('#dividend').value);
        let divideNumb2 = Number(document.querySelector('#divisor').value);
        return document.querySelector('#quotient').value = divide(divideNumb1, divideNumb2);
    }
    document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
    let currentDate = new Date();
    let currentYear
    currentYear = currentDate.getFullYear();
    document.querySelector("#year").textContent  = currentYear;
    
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

    let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    document.querySelector('#evens') .innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Odds Only Array */
    function findOdds(value) {
        return value %2 != 0;
    }
    const oddFiltered = array.filter(findOdds);

    document.querySelector("#odds").textContent = oddFiltered
    
/* Output Evens Only Array */

    function findEvens(value) {
     return value %2 == 0;
    }
    const evenFiltered = array.filter(findEvens);
    document.querySelector("#evens").textContent = evenFiltered

/* Output Sum of Org. Array */

    function getSumOfArray(array) {
        return array.reduce((acumulator, currentValue) => acumulator + currentValue);
    }
    const sumOfArray = getSumOfArray(array);
    document.querySelector("#sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */

    function multiplyArrayByTwo(array) {
        return array.map(num => num * 2);
    }
    const multiplied = multiplyArrayByTwo(array);
    document.querySelector("#multiplied").textContent = multiplied;

/* Output Sum of Multiplied by 2 Array */

    function sumMultipliedArray(array) {
        return multiplied.reduce((acumulator, currentValue) => acumulator + currentValue);
    }
    const sumOfMultiplied = sumMultipliedArray(array);
    document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;
