const board = document.querySelector('.board');
// x and O printing 
let turn = 'O';

let totalTrun = 0;


// set winner conditions as a 2D array 
let winner= [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [2,4,6],[0,4,8]
]

 let boardArray = new Array(9).fill("E");  // 9 size array filled with E means empty


// check winner 
function checkWinner(){
   for(let [index0,index1,index2] of winner){
        if(boardArray[index0]!="E" && boardArray[index0]===boardArray[index1] && boardArray[index1]===boardArray[index2])
            return 1;
   }
   return 0;
}

const printer = (event)=>{
    // console.log(event.target.id);

    const element = event.target;
    
  // control overlap 
  if(boardArray[element.id]==="E"){

    totalTrun++;

    if(turn === 'O'){
        element.innerHTML = "O";
        boardArray[element.id]="O";
        if(checkWinner()){
            document.getElementById('winningMessage').innerHTML = "Winner is O";
            board.removeEventListener('click',printer);
            return;
        }
        turn='X';
    }
    else{
        element.innerHTML = "X";
        boardArray[element.id]="X";
        if(checkWinner()){
            document.getElementById('winningMessage').innerHTML = "Winner is X";
            board.removeEventListener('click',printer);
            return;
        }
        turn='O';
    }
    if(totalTrun==9){
        document.getElementById('winningMessage').innerHTML = "Match is draw";
    }
   }else{
     alert("Section is filled ");
   }
}

board.addEventListener('click',printer);

// Restart 
const restart = document.getElementById('restartButton');
restart.addEventListener('click',()=>{
    const cell =document.getElementsByClassName('cell');
    Array.from(cell).forEach((val)=>{
      val.innerHTML = "";
    })
    turn ="O";
    totalTrun=0;
    boardArray =new Array(9).fill("E");
    document.getElementById('winningMessage').innerHTML = "";
    board.addEventListener('click',printer);
})