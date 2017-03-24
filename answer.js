let correct = false;
const question = 'What is 2 + 2?';

while(!correct) {
    let guess = prompt(question);
    let response = '';
    correct = guess == 4;

    if(correct) {
        response = 'You worked hard to add those number!';
    } else if(guess == 3 || guess == 5) {
        response = 'Almost!';
    } else {
        response = 'Whoa, off by a mile!';
    }
    
    alert(response);
}