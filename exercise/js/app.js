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


// Create DOM thingy to show answer after button clicked
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

/**
 * Utility function to shuffle the items in an array
 * @param {object} arr
 */
function shuffleArray(arr) {
  return arr.sort(function (a, b) { return Math.random() - 0.5 })
}

document.addEventListener('DOMContentLoaded', () =>{
    const button = document.getElementById('answers');
    button.addEventListener('click', )
});

function selectAnswer(){

    
}
// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('btnStartOver')
//     button.addEventListener('click', );
//   });
  
addAnswer();
addEquation();


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