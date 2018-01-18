// Variables and selections

let viesRestantes = 10;
let compteurVies = document.getElementById('vies');
compteurVies.innerText = viesRestantes;

let points = 0;
let compteurPoints = document.getElementById('points');
compteurPoints.innerText = points;

let start = document.getElementById('start');
let reset = document.getElementById('reset');

let first = document.getElementById('one');
let second = document.getElementById('two')
let third = document.getElementById('three');
let fourth = document.getElementById('four');
let fifth = document.getElementById('five');
let sixth = document.getElementById('six');
let seventh = document.getElementById('seven');
let eighth = document.getElementById('eight');
let ninth = document.getElementById('nine');

let holes = document.getElementsByTagName('div');

let pika = document.getElementById('pika');
let hammer = document.getElementById('hammer');
let missed = document.getElementById('miss');

let spawnInRandomCell = function() {  // Makes a mole appear in a random place and adds the event listeners to the div
  if (viesRestantes > 0) {
    let randomNumber = Math.ceil(Math.random() * 9);
    document.body.addEventListener('keypress', moleDisappearsByKey);
    for (i = 0; i < holes.length; i++) {
      holes[i].addEventListener('click', moleDisappearsByClick)
    };
    for (place = 1; place < 10; place++) {
      if (place === randomNumber) {
        holes[place - 1].classList.add('mole');
        pika.play();
      };
    };
  };
};

let miss = function() { // The mole automatically disappears and player looses a life
  for (i = 0; i < holes.length; i++) {
    if (holes[i].classList.contains('mole')) {
      holes[i].classList.remove('mole');
      missed.play();
      viesRestantes--;
      compteurVies.innerText = viesRestantes;
    };
  };
};

let moleDisappearsByClick = function(event) { // Makes the mole disappear on click and adds a point
  if (this.classList.contains('mole')) {
    this.classList.remove('mole');
    hammer.play();
    points++;
    compteurPoints.innerText = points;
  };
};

let moleDisappearsByKey = function(event) { // Makes the mole disappear on corresponding keypress and adds a point
  switch (event.key) {
    case '1':
      if (first.classList.contains('mole')) {
        first.classList.remove('mole');
        hammer.play();
        points++;
        compteurPoints.innerText = points;
      };
      break;
    case '2':
      if (second.classList.contains('mole')) {
        second.classList.remove('mole');
        hammer.play();
        points++;
        compteurPoints.innerText = points;
      };
      break;
    case '3':
      if (third.classList.contains('mole')) {
        third.classList.remove('mole');
        hammer.play();
        points++;
        compteurPoints.innerText = points;
      };
      break;
    case '4':
      if (fourth.classList.contains('mole')) {
        fourth.classList.remove('mole');
        hammer.play();
        points++;
        compteurPoints.innerText = points;
      };
      break;
    case '5':
      if (fifth.classList.contains('mole')) {
        fifth.classList.remove('mole');
        hammer.play();
        points++;
        compteurPoints.innerText = points;
      };
      break;
    case '6':
      if (sixth.classList.contains('mole')) {
        sixth.classList.remove('mole');
        hammer.play();
        points++;
        compteurPoints.innerText = points;
      };
      break;
    case '7':
      if (seventh.classList.contains('mole')) {
        seventh.classList.remove('mole');
        hammer.play();
        points++;
        compteurPoints.innerText = points;
      };
      break;
    case '8':
      if (eighth.classList.contains('mole')) {
        eighth.classList.remove('mole');
        hammer.play();
        points++;
        compteurPoints.innerText = points;
      };
      break;
    case '9':
      if (ninth.classList.contains('mole')) {
        ninth.classList.remove('mole');
        hammer.play();
        points++;
        compteurPoints.innerText = points;
      };
      break;
  };
};

let launch = function () { // Launches the game
  setInterval(spawnInRandomCell, 1000);
  setInterval(miss, 999);
};

let restart = function () { // Reset the lives and points
  viesRestantes = 10;
  points = 0;
  compteurVies.innerText = viesRestantes;
  compteurPoints.innerText = points;
};

start.addEventListener('click', launch);
reset.addEventListener('click', restart);
