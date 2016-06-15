'use scrict';
var userName = prompt('Greetings! What is your name?');
alert('Welcome' + ' ' + userName + ', glad you\'re here');

var answer1 = prompt ('Has Alison been to Siberia?').toLowerCase();
if(answer1 === 'yes' || answer1 === 'y') {
  alert('Correct! Alison spent a winter in Siberia! Brr!!!');
}
else {
  alert('Incorrect, Alison spent several wintery months almost freezing to death in Siberia.');
};

var answer2 = prompt('Has Alison ever been to the Amazon?').toLowerCase();
if(answer2 === 'yes' || answer2 === 'y'){
  alert('Yup! Alison spent a summer in the Amazon in Peru living and working with the Iquito tribe.');
}
else{
  alert('Nope! Alison spent 3 months in the Peruvian Amazon working with Iquito elders on documenting their language');
};

var answer3 = prompt('Has Alison ever been to the Serengeti?').toLowerCase();
if (answer3 === 'no' || answer3 === 'n'){
  alert('You are correct! Alison has never been to Africa, but would love to!');
}
else{
  alert('No way! Alison has never been to Africa, but is dying to go!');
};

var answer4 = prompt('Has Alison ever harvested cranberries?').toLowerCase();
if (answer4 === 'yes' || answer4 === 'y'){
  alert('You are correct! Alison managed an organic cranberry farm for 5 years!');}
else{
  alert('Incorrect! Alison managed an organic cranberry farm in Cape Cod for 5 years and can no longer stand the taste of cranberry juice!');}

var answer5 = prompt('Does Alison own a bicycle?').toLowerCase();if(answer5 === 'yes' || answer5 === 'y'){
  alert ('Incorrect -kind of! Trick question! She actually owns 2');}else{alert ('Correct She owns two bicycles that she loves equally.');}
