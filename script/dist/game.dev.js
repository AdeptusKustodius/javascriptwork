"use strict";

var schekers = document.querySelectorAll('.block_black');
var black_schek = '<div draggable="true" class="shashka">&#9899;</div>';
var black_queen = '<div draggable="true" class="shashka">>&#9923;</div>';
var white_schek = '<div draggable="true" class="shashka">&#9898;</div>';
var white_queen = '<div draggable="true" class="shashka">>&#9921;</div>'; //генерация элементов

document.getElementById('Go').onclick = function spawnElements(Go) {
  for (var b = 0; b < 12; b++) {
    schekers[b].innerHTML = black_schek;
  }

  ;

  for (var w = 20; w < 35; w++) {
    schekers[w].innerHTML = white_schek;
  }
}; // все черные квадраты в массив


var squat = [];

for (var i = 0; i < schekers.length; i++) {
  squat[i];
} // drug&drop


schekers.ondragover = allowDrop;

function allowDrop(event) {
  event.preventDefault();
}