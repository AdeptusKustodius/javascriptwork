"use strict";

// drug&drop
var dragAndDrop = function dragAndDrop() {
  var gameElement = document.querySelectorAll('.shashka');

  var dragStart = function dragStart() {
    console.log('dragstart');
  };

  gameElement.addEventListener('dragstart', dragStart);
};

dragAndDrop();