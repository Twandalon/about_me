'use strict';

var correct = 0;
var question1 = 'What\'s your name?';
var username = prompt(question1);
console.log(question1 + ' : ' + username);

while (username === '' || username === null) {
  username = prompt(question1);
}
var response1 = 'Hi ' + username + ', nice to meet you!';
alert(response1);

function questionYorN(){
  var answer1 = prompt('Do you think I\'ve skydived before ' + username + '?');
  console.log(answer1);
  if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
    alert('Yep, I\'m that dumb!');
    correct++;
  } else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
    alert('Actually, I was dumb enough to do that.');
  } else {
    alert('hmm..');
  }

  var answer2 = prompt('Do you think I own a dog ' + username + '?');
  console.log(answer2);
  if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
    alert('Yes, he fear poops when I give him a bath.');
    correct++;
  } else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
    alert('On the contrary, I do!');
  } else {
    alert('huh?');
  }

  var answer3 = prompt('Have I been to Vietnam ' + username + '?');
  console.log(answer3);
  if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
    alert('That\'s right! The food is amazing.');
    correct++;
  } else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
    alert('Wrong, I\'ve been all over Vietnam!');
  } else {
    alert('wut?');
  }

  var answer4 = prompt('Am I a gamer ' + username + '?');
  console.log(answer4);
  if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
    ('Yup, I spend too much time playing them.');
    correct++; } else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
      alert('Incorrect.');
    } else {
      alert('ok?');
    }

  var answer5 = prompt('Have I broken any bones ' + username + '?');
  console.log(answer5);
  if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y') {
    alert('I sure have. It hurt.');
    correct++;
  } else if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
    alert('Incorrect.');
  } else {
    alert('..?');
  }
}

questionYorN();

function walking(){
  var counter = 0;
  while (counter < 4) {
    var question6 = parseInt(prompt('How many miles do I walk to Code Fellows?'));
    console.log(typeof question6);
    if (question6 < 2){
      alert('Too low!');
    }
    if (question6 > 2){
      alert('Too high!');
    }
    if (question6 === 2){
      alert('You got it right!');
      correct++;
      break;
    }
    else {
      counter++;
    }
  }
}

walking();

function countriesQ(){
  var countries = ['vietnam', 'germany', 'france', 'italy', 'croatia'];
  for (var counter = 0; counter < 6; counter++) {
    var question7 = prompt('What countries have I traveled to?');
    console.log(typeof question7);
    if (countries.includes(question7)) {
      alert('You got it right! Vietnam, Germany, France, Italy, or Croatia.');
      correct++;
      break;
    }
    else if (counter < 5) {
      alert('Try again!');
    } else {
      alert('You have run out of tries. The answers are');
    }
  }
}

countriesQ();

alert(username + ' you got ' + correct + ' answers correct!' );
