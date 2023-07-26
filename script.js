'use strict';
let secretNum = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNum;
let score = 10,
  highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score <= 0) {
    document.querySelector('.message').textContent = 'Game Finished! Try Again';
    document.querySelector('.score').textContent = 0;
  } else if (guess === 0) {
    document.querySelector('.message').textContent = 'NO Value!';
  } else if (guess != secretNum) {
    document.querySelector('.message').textContent =
      guess < secretNum ? 'Too low Guess Value!📉' : 'Too High Guess Value!📈';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Correct Value!🎉';
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highScore = Math.max(score, highScore);
    document.querySelector('.highscore').textContent = highScore;
  }
});
//Again button Functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
