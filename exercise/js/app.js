let multiplicationProb;
let var1 = getRandomNumber(10);
let var2 = getRandomNumber(10);
let var3 = getRandomNumber(82);
let var4 = getRandomNumber(82);
let var5 = getRandomNumber(82);
let answer = var1 * var2;
let answerArray = [answer, var3, var4, var5];

/**
 * Utility function to generate a random number based on max
 * @param {number} max
 */
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Utility function to shuffle the items in an array
 * @param {object} arr
 */
function shuffleArray(arr) {
  return arr.sort(function (a, b) { return Math.random() - 0.5 })
}

function addEquation() {
  var1 = getRandomNumber(10);
  var2 = getRandomNumber(10);
  answer = var1 * var2;
  let section = document.getElementById('problem')
  let divElement = section.querySelector('.expression.show-hide');
  divElement.innerText = var1 + ' * ' + var2;
}

function addAnswer() {
  var3 = getRandomNumber(82);
  var4 = getRandomNumber(82);
  var5 = getRandomNumber(82);
  answerArray = [answer, var3, var4, var5];
  let randomArray = shuffleArray(answerArray);
  let li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i++) {
    li[i].innerText = randomArray[i];
  }
}

function nextQuestion(){
  addEquation();
  addAnswer();
}

document.addEventListener('DOMContentLoaded', () => {
  nextQuestion();

  let currentProb = document.querySelector('.currentProblem');
  let probPlace = parseInt(currentProb.innerText);
  let currentScore = document.querySelector('.currentScore');
  let scorePlace = parseInt(currentScore.innerText);

  const buttons = document.querySelectorAll('li');
  buttons.forEach((answerBtn) => {
    answerBtn.addEventListener('click', () => {
      if(probPlace == 10){
        let element = document.querySelector('ul');
        let section = document.getElementById('problem')
        let divElement = section.querySelector('.expression.show-hide');
        let textElement = document.querySelector('.show-hide')
        element.remove();
        divElement.remove();
        textElement.remove();
      }
      if (probPlace < 10) {
        probPlace += 1;
        currentProb.innerText = probPlace;
      }
      if ((answerBtn.innerText == answer) && (scorePlace < 10)) {
        scorePlace += 1;
        currentScore.innerText = scorePlace;
       
      }
      nextQuestion();
    });
  });

  const startOver = document.getElementById('btnStartOver');
  startOver.addEventListener('click', () => {
    location.reload();
  });

});
