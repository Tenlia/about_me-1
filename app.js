'use scrict';
var tally = 0;
var userName = prompt('Greetings! What is your name?');
alert('Welcome' + ' ' + userName + ', glad you\'re here');

//Liz has altered this question to be a function
var answer1 = prompt ('Has Alison been to Siberia?').toLowerCase();
function question1(){
  if(answer1 === 'yes' || answer1 === 'y') {
    alert('Correct! Alison spent a winter in Siberia! Brr!!!');
    tally++;
  }
  else {
    alert('Incorrect, Alison spent several wintery months almost freezing to death in Siberia.');
  }
};
question1();

//Liz has altered this question to be a function
var answer2 = prompt('Has Alison ever been to the Amazon?').toLowerCase();
function question2(){
  if(answer2 === 'yes' || answer2 === 'y'){
    alert('Yup! Alison spent a summer in the Amazon in Peru living and working with the Iquito tribe.');
    tally++;
  }
  else{
    alert('Nope! Alison spent 3 months in the Peruvian Amazon working with Iquito elders on documenting their language');
  }
};
question2();

//Liz has altered this question to be a function
var answer3 = prompt('Has Alison ever been to the Serengeti?').toLowerCase();
function question3(){
  if (answer3 === 'no' || answer3 === 'n'){
    alert('You are correct! Alison has never been to Africa, but would love to!');
    tally++;
  }
  else{
    alert('No way! Alison has never been to Africa, but is dying to go!');
  }
};
question3();

//Liz has alter this question to be a function
var answer4 = prompt('Has Alison ever harvested cranberries?').toLowerCase();
function question4(){
  if (answer4 === 'yes' || answer4 === 'y'){
    alert('You are correct! Alison managed an organic cranberry farm for 5 years!');
    tally++;
  }
  else{
    alert('Incorrect! Alison managed an organic cranberry farm in Cape Cod for 5 years and can no longer stand the taste of cranberry juice!');}
};
question4();

//Liz has changed this question to be a function
var answer5 = prompt('Does Alison own a bicycle?').toLowerCase();
function question5(){
  if(answer5 === 'yes' || answer5 === 'y'){
    alert ('Incorrect -kind of! Trick question! She actually owns 2');
  }else{alert ('Correct She owns two bicycles that she loves equally.');
    tally++;
  }
};
question5();

//Liz turned this question into a function
function question6(){
  var counterNumber = 0;
  while(counterNumber < 5) {
    var numberAnswer = prompt ('Guess what number Alison is thinking');
    if(numberAnswer === '16'){
      alert('correct');
      counterNumber = 5;
      tally++;
    }
    else if (numberAnswer > 16) {
      alert('Too high!');
      counterNumber++;
    }
    else {
      alert('Too Low!');
      counterNumber++;
    }
  }
};
question6();

//Liz has changed this question into a function
//fixed the "keep guessing" to not come up everytime and the tally to come up after the question is done
var myStates = ['pa','or','va','ca','ma'];
var counterStates = 0;
function question7(){
  while (counterStates < 6){
    var answerStates = prompt('Name a state that Alison has lived in. In 2 letter acronyms please').toLowerCase();
    for (var i = 0; i < myStates.length; i++){
      if(answerStates === myStates[i]){
        var correctAnswer = 1;
        counterStates = 7;
        alert('You are correct!');
        tally++;
        break;
      }
    }
    if(counterStates < 6){
      alert('Keep guessing!');
      counterStates++;
    }
  }
};
question7();

alert('You got' + ' ' + tally + '' + 'out of 7 correct,' + ' ' + userName + '.' );
