let incorrect = false,
        question = 'What is 2 + 2?';

while(!incorrect) {
let num = prompt(question), str = '';
    incorrect = num == 4;


if(incorrect) {
    str = 'You worked hard to add those number!';
} else {
        if(num == 3 || num == 5) {
            str = 'Almost!';
} else {
            str = 'Whoa, off by a mile!'; }
}
    
alert(str);
}