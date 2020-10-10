"use strict";

var schekers = document.querySelectorAll('.block_black');
var black_schek = '<div class="shashka_black "id="target" draggable="true" >&#9899;</div>';
var black_queen = '<div class="shashka_black shashka_queen" id="target" draggable="true" >&#9923;</div>';
var white_schek = '<div class="shashka_white" id="target" draggable="true" >&#9898;</div>';
var white_queen = '<div class="shashka_white shashka_queen" id="target" draggable="true" >&#9921;</div>'; //генерация элементов

document.getElementById('Go').onclick = function spawnElements() {
  for (var b = 0; b < 12; b++) {
    schekers[b].innerHTML = black_schek;
  }

  for (var w = 20; w < 32; w++) {
    schekers[w].innerHTML = white_schek;
  }
}; //очистка доски


document.getElementById('reset').onclick = function (reset) {
  for (var b = 0; b < 12; b++) {
    schekers[b].innerHTML = "";
  }

  for (var w = 20; w < 32; w++) {
    schekers[w].innerHTML = "";
  }
};