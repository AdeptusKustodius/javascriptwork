let schekers = document.querySelectorAll('.block_black');
let black_schek='<div class="shashka_black "id="target" draggable="true" >&#9899;</div>';
let black_queen='<div class="shashka_black shashka_queen" id="target" draggable="true" >&#9923;</div>';
let white_schek='<div class="shashka_white" id="target" draggable="true" >&#9898;</div>';
let white_queen='<div class="shashka_white shashka_queen" id="target" draggable="true" >&#9921;</div>';


//генерация элементов
document.getElementById('Go').onclick = function spawnElements(){
    for(let b=0; b<12;b++){
    schekers[b].innerHTML=black_schek;
  }
    for(let w=20; w<32;w++){
    schekers[w].innerHTML=white_schek;    
  }
}
//очистка доски
document.getElementById('reset').onclick = function(reset){
  for(let b=0; b<12;b++){
    schekers[b].innerHTML="";
  }
    for(let w=20; w<32;w++){
    schekers[w].innerHTML="";    
  }
}






