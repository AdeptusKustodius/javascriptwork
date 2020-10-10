function drawChess(){
    let black = true;
    let table = document.body.getElementsByClassName("chess");
    let inChessRow = "";
    for (let i=0;i<table.length;i++){
        for (let b=0; b<8; b++){
        for (let a=0; a<8; a++){
            if(a==0) black = !black;
            inChessRow +='<div class="block"></div>';
            table[i].innerHTML=inChessRow;
} } }}
drawChess();

let clrBlock = document.getElementsByClassName('block');
count = 0; // счётчик
for (let i = 0; i < 8; i++) { // пересчёт элементов в массиве 
  for (let j = 0; j < 8; j++) { //в строке
    if (i % 2 === 0) { // строгое сравнение деления на остаток если остаток равен 0 => закрасить!
      if (j % 2 === 0) {  
        clrBlock[count].classList.add('block_black')
      }
    } else {
      if (j % 2 !== 0) {
        clrBlock[count].classList.add('block_black')
      }
    }
    count++ // добавить+1 к счётчику для пересчёта в строках j%2===0
  }
}


