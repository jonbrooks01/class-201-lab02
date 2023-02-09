'use strict';
alert('Hello Welcome to my ABOUT ME PAGE');

let ask1 = prompt('Would you like to know more about me? (yes/no)');
let result = ask1.toLowerCase();

if (result === 'yes') { 
    alert('Let\'s play!');
} else if (result === 'no'){
    alert('we should play anyways!');
}
let ask2 = prompt('Do you think I live in Seattle? (yes/no)');
let result2 = ask2.toLowerCase();

if (result2 === 'yes') {
    alert('Your right I do live in washington though');
} else if (result2 === 'no'){
    alert ('actually I don\'t live in Seattle');
}

let ask3 = prompt('Do you think I like the outdoor\'s? (yes/no)');
let result3 = ask3.toLowerCase();

if (result3 === 'yes'){
    alert('Yeah your right, I enjoy hiking and camping!');
} else if (result3 === 'no'){
    alert('Actually I do enjoy the outdoors, I hope you do as well!');
}

let ask4 = prompt('Do you think I am under 30 year\'s old? (yes/no)');
let result4 = ask4.toLowerCase();

if (result4 === 'yes'){
    alert('Way to go!! your right I am 28 years old');
} else if (result4 === 'no'){
    alert('You are incorrect I am 28 years old.');
}

let ask5 = prompt('Would you like to see the rest of my website?? (yes/no)');
let result5 = ask5.toLowerCase();

if (result5 === 'yes'){
    alert('Perfect I hope you enjoy your stay');
} else if (result4 === 'no'){
    alert('Well I hope you like my website anyways!')
}

alert('Thanks for playing!!!')
