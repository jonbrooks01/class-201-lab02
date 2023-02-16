'use strict';

let score = 0;

let ask0 = prompt('What is your name?');
alert('Hello ' + ask0 + ' welcome to my ABOUT ME PAGE');

function questionOne() {
    let ask1 = prompt('Would you like to know more about me? (yes/no)');
    let result = ask1.toLowerCase();
    if (result === 'yes' || result === 'y') {
        alert('Let\'s play!');
    } else if (result === 'no' || result === 'n') {
        alert('we should play anyways!');
    }
};

function questionTwo() {
    let ask2 = prompt('Do you think I live in Seattle? (yes/no)');
    let result2 = ask2.toLowerCase();

    if (result2 === 'no' || result2 === 'n') {
        alert('Your right I do live in washington though');
        score++;
    } else if (result2 === 'yes' || result2 === 'y') {
        alert('actually I don\'t live in Seattle');
    }
}

function questionThree() {
    let ask3 = prompt('Do you think I like the outdoor\'s? (yes/no)');
    let result3 = ask3.toLowerCase();

    if (result3 === 'yes' || result3 === 'y') {
        alert('Yeah your right, I enjoy hiking and camping!');
        score++;
    } else if (result3 === 'no' || result3 === 'n') {
        alert('Actually I do enjoy the outdoors, I hope you do as well!');
    }
}

function questionFour() {
    let ask4 = prompt('Do you think I am under 30 year\'s old? (yes/no)');
    let result4 = ask4.toLowerCase();

    if (result4 === 'yes' || result4 === 'y') {
        alert('Way to go!! your right I am 28 years old');
        score++;
    } else if (result4 === 'no' || result4 === 'n') {
        alert('You are incorrect I am 28 years old.');
    }
}
function questionFive() {
    let ask5 = prompt('Would you like to see the rest of my website?? (yes/no)');
    let result5 = ask5.toLowerCase();

    if (result5 === 'yes' || result5 === 'y') {
        alert('Perfect I hope you enjoy your stay');
    } else if (result5 === 'no' || result5 === 'n') {
        alert('Well I hope you like my website anyways!');
    }
}
//create a fx for q6
// it will take 4 attempts
// fx prompt input number
// output a number
//compare it to 12
//call fx to run

function questionSix() {
    let attempt = 4;
    let answer = 12;
    while (attempt) {
        let ask6 = parseInt(prompt(`Guess a number between 1-20 you have ${attempt} guesses.`));
        // ask6 = Number(ask6);
        console.log(ask6);
        attempt--;

        if (ask6 > answer) {
            // ask6 = Number(ask6);
            alert('Your answer is too high try again');
        } else if (ask6 < answer) {
            // ask6 = Number(ask6);
            alert('Your answer is to low try again');
        } else if (ask6 === answer) {
            alert('Congrat\'s you got it!!');
            score++;
            break;
        }
        if (!attempt) {
            alert('You didn\'t guess it within 4 attempts');
        }
    }

}

//create a fx question7
//input array
//output string

function questionSeven() {
    let correct = false;
    let attempt1 = 6;
    let travel = ['las vegas', 'st.louis', 'new york'];

    while (attempt1) {
        let ask7 = prompt(`Guess where I\'m traveling next, you have ${attempt1} guesses.`).toLowerCase();
        attempt1--;

        for (let i = 0; i < travel.length; i++) {
            if (ask7 === travel[i]) {
                alert('You got it right I will be going this year!');
                score++;
                console.log(score);
                correct = true;
                attempt1 = 0;
            }
        }
        if (attempt1 > 0) {
            alert('That is not correct but I would love to go there');
        }
    }
    if (!correct) {
        alert('You did not guess correctly I will be going to ' + travel);
    }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionSix();
questionSeven();
questionFive();
alert('Thanks for playing ' + ask0 + ' You got ' + score + ' answers right!!');
