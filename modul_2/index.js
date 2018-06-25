let numbers = [];
let total = 0;
let userInput;
do {
    userInput = prompt('Enter number');
    numbers.push(Number(userInput));
    if(userInput === null || userInput === " "){
    numbers.pop();
    break;
    }
} while(userInput !== null);

for (let i of numbers){
    total += i;
} 
 if (numbers.length){
        const message = `Общая сумма чисел равна ${total}`;
        alert(message);
}
