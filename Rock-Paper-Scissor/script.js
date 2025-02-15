let userPoint=0;
let computerPoint=0;

// computer input
const inputArray=[0,1,2];

const result=document.getElementById('result');
const userScore=document.getElementById('user-score');
const computerScore=document.getElementById('computer-score');

// print computer input image 
const computerImg=document.getElementById('computer-img');

const button=document.getElementById('userChoice');
button.addEventListener('click',(event)=>{

    // taking user input and computer input 
    let computerInput=Math.floor(Math.random()*inputArray.length);
    let userInput=Number(event.target.id);

    if(computerInput===0)
        computerImg.src="./img/RI.jpg";
    else if(computerInput===1)
        computerImg.src="./img/PI.jpg";
    else
       computerImg.src="./img/SI.jpg";

    // check condittions
      //user winner

      if(computerInput===userInput){
          result.innerHTML="Draw Match !!!";
      }
      else if((computerInput==0 && userInput==1) || (computerInput==1 && userInput==2) || (computerInput==2 && userInput==0)){
        userPoint++;
        userScore.innerHTML=`${userPoint}`;
        result.innerHTML="YOU WIN";
      }
      else if((computerInput==0 && userInput==2) || (computerInput==1 && userInput==0) || (computerInput==2 && userInput==1)){
        computerPoint++;
        computerScore.innerHTML=`${computerPoint}`;
        result.innerHTML="YOU LOST";
      }
});

//restart button
const reStart=document.getElementById('restart');
reStart.addEventListener('click',()=>{
   computerPoint=0;
   userPoint=0;
   result.innerHTML="Pick your move!";
   computerImg.src="./img/q1.jpg";
   computerScore.innerHTML="0";
   userScore.innerHTML="0"; 
})