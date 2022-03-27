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
  let section = document.getElementById('problem')
  let divElement = section.querySelector('.expression.show-hide');
  divElement.innerText = var1 + ' * ' + var2;
}

function addAnswer() {
  let randomArray = shuffleArray(answerArray);
  let li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i++) {
    li[i].innerText = randomArray[i];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  addAnswer();
  addEquation();
  let currentProb = document.querySelector('.currentProblem');
  let probPlace = parseInt(currentProb.innerText);
  let currentScore = document.querySelector('.currentScore');
  let scorePlace = parseInt(currentScore.innerText);

  const buttons = document.querySelectorAll('li');
  buttons.forEach((answerBtn) => {
    answerBtn.addEventListener('click', () => {
      if (probPlace < 10) {
        probPlace += 1;
        currentProb.innerText = probPlace;
      }
      if (answerBtn.innerText == answer) {
        scorePlace += 1;
        currentScore.innerText = scorePlace;
        console.log('cool')
      }
      //   else {
      //     if (answerBtn.innerText != answer) {
      //       console.log('You Stupid')
      //     }
      //   }
    });
  });

  const startOver = document.getElementById('btnStartOver');
  startOver.addEventListener('click', () => {
    currentProb.innerText = 0;
    currentScore.innerText = 0;
  });

});

function test() {
  console.log('test worked');
}


  // for(let i = 0; i < testScores.length; i++) {
  //   sum = sum + testScores[i];  // add each score to the sum


  // const tasks = document.querySelectorAll('li');

  // tasks.forEach((task) => {
  //   // when you click on a task mark it completed
  //   task.addEventListener('click', () => {
  //     if (!task.classList.contains('completed')) {
  //       task.classList.add('completed');
  //       task.querySelector('i').classList.add('completed');
  //     }
  //   });

  //   // when you double click a task remove the completed class
  //   task.addEventListener('dblclick', () => {
  //     if (task.classList.contains('completed')) {
  //       task.classList.remove('completed');
  //       task.querySelector('i').classList.remove('completed');
  //     }
  //   });
  // });