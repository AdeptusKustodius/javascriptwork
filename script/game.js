let schekers = document.querySelectorAll('.block_black');
let black_schek='<div draggable="true" class="shashka">&#9899;</div>';
let black_queen='<div draggable="true" class="shashka">>&#9923;</div>';
let white_schek='<div draggable="true" class="shashka">&#9898;</div>';
let white_queen='<div draggable="true" class="shashka">>&#9921;</div>';


//генерация элементов
document.getElementById('Go').onclick = function spawnElements(Go){
for(let b=0; b<12;b++){
    schekers[b].innerHTML=black_schek;
};
for(let w=20; w<35;w++){
    schekers[w].innerHTML=white_schek;
    
}
}
// все черные квадраты в массив

let squat=[];
for(let i=0; i<schekers.length;i++){
    squat[i];

}
// drug&drop
schekers.ondragover = allowDrop;
function allowDrop(event){
    event.preventDefault();
}