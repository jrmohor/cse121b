/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

    function add (number1, number2) {
       return number1 + number2; 
        }
    
    function addNumber(add1, add2) {
        let addNumber1 = Number(document.querySelector('#add1').value);
        let addNumber2 = Number(document.querySelector("#add2").value);
        
        document.querySelector("#sum").value = add(addNumber1, addNumber2);
    }

    document.querySelector("#addNumbers").addEventListener('click', addNumber);

/* Function Expression - Subtract Numbers */

    let subtract = function(number1, number2) {
        return number1 - number2;
        }
    let subtractNumbers = function(subtract1, subtract2){ 
        let subtractNumbers1 = Number(document.querySelector("#substract1").value);
        let subtractNumbers2 = Number(document.querySelector("#substract2").value);
        
        document.querySelector("#difference").value = subtract(subtract1, subtract2);
    }
    document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);    

/* Arrow Function - Multiply Numbers */

    let multiply = (factor1, factor2) => factor1 * factor2;

    let multiplyNumbers = (factor1, factor2) => {
        let multiplyNumbers1 = Number(document.querySelector('#factor1').value);
        let multiplyNumbers2 = Number(document.querySelector('#factor2').value);
        document.querySelector('#product').value = multiply(factor1, factor2);
    }

    document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

    const divide = (number1, number2) => {
        return number1 / number2;
    };

    const divideNumbers = (dividend, divisor) => {
        const divideNumbers1 = Number(document.querySelector("#dividend").value);
        const divideNumbers2 = Number(document.querySelector("#divisor").value);

        document.querySelector("#quotient").value = divide(number1, number2);
    };
    document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);

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
