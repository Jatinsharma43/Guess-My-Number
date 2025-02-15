'use strict';
// console.log(document.querySelector('.message'))
// console.log(document.querySelector('.message').innerHTML); //Start guessing...
// console.log(document.querySelector('.message').textContent); //Start guessing...
// console.log(document.querySelector('.message').innerText); //Start guessing...
// console.log(document.querySelector('.message').outerHTML); //<p class="message">Start guessing...</p>
//                              2
// changing html content through textcontent (dom manipulation)
// document.querySelector('.message').textContent = 'correct number !'
// console.log(document.querySelector('.message').textContent); //correct number !
// document.querySelector('.number').textContent = 13;
// console.log(document.querySelector('.number').textContent); //13
// console.log(document.querySelector('.guess').value); // to get the value
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value); //23
//                              3
let secretNumber = Math.trunc(Math.random()*20)+1; // gives random no
// math.random() gives no bw 0 to 1 in decimal so we multiply it with 20 and to remove decimal we use math.trunc() and add 1 in it so that we also get 20 
let score = 20; // state variable(best approach)
// document.querySelector('.number').textContent = secretNumber;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () { // function event handler executes everytime the .check clASS IS CLICKED // click is the name of event
const guess = Number(document.querySelector('.guess').value);
if (!guess){
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
}
else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    // manipulating stle in js using . style followed by . name of style property to be changed
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}
else if (guess !== secretNumber) {
    if(score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber?'Too High!':'Too low';
        displayMessage(guess > secretNumber?'Too High!':'Too low');
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = 'you lost the game!';
            displayMessage('you lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    
}
// else if(guess > secretNumber) {
//     if(score > 1) {
//     document.querySelector('.message').textContent = 'Too High!';
//     score--;
//     document.querySelector('.score').textContent = score;
//     }
//     else {
//         document.querySelector('.message').textContent = 'you lost the game!';
//         document.querySelector('.score').textContent = 0;
//     }

// }
// else if(guess < secretNumber) {
//     if(score > 1) {
//     document.querySelector('.message').textContent = 'Too Low!';
//     score--
//     document.querySelector('.score').textContent = score;
//     }
//     else {
//         document.querySelector('.message').textContent = 'you lost the game!';
//         document.querySelector('.score').textContent = 0;
//     }
// }
});
// reseting everything that changed
document.querySelector('.again').addEventListener('click',function () {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
});
