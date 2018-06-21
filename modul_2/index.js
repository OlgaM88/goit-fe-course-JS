let numbers = [];
let total = 0;
do {
    let userInput = prompt('Enter number');
    numbers.push(Number(userInput));
    if(userInput === null || userInput === " "){
    numbers.pop();
    break;
    }
} while(true);

for (let i of numbers){
    total += i;
} 
 if (numbers.length > 1){
        const message = `Общая сумма чисел равна ${total}`;
        alert(message);
}
