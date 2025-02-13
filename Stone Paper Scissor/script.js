const button=document.querySelector('#input');

let ComPoints=0;
let UserPoints=0;

// computer array
const computerArr=[0,1,2];

button.addEventListener('click',(event)=>{
   console.log(event.target.id);
   let computerValue = Math.floor(Math.random()*computerArr.length);
   let userValue=Number(event.target.id);

   // access the gamebord img section
   const img =document.getElementById('img');
   const img2 =document.getElementById('img2'); 
  
   // print user img
   if(userValue===0)
    img2.src='./img/uRock.jpg';
   else if(userValue===1)
    img2.src='./img/uPaper.jpg';
   else
    img2.src='./img/uScissor.jpg';

    // print computer img
   if(computerValue===0)
    img.src='./img/cRock.jpg';
   else if(computerValue===1)
    img.src='./img/cPaper.jpg';
   else
    img.src='./img/cScissor.jpg';

    // check result 
    if((computerValue==0 && userValue==1) || (computerValue==1 && userValue==2) || (computerValue==2 && userValue==0)){
        UserPoints++;
        const p2=document.getElementById('p2').textContent=`You : ${UserPoints}`;
        const print=document.querySelector('pre').innerHTML="YOU WINNER";
    }
    else if((computerValue==2 && userValue==1) || (computerValue==1 && userValue==0) || (computerValue==0 && userValue==2)){
        ComPoints++;
        const p1=document.getElementById('p1').textContent=`Computer : ${ComPoints}`;
        const print=document.querySelector('pre').innerHTML="YOU LOSS";
    }
    else{
        const print=document.querySelector('pre').innerHTML="DRAW MATCH!!!";
    }

});

const Restart = document.getElementById('restart');
Restart.addEventListener('click',()=>{
    ComPoints=0;
    UserPoints=0;
    const p1=document.getElementById('p1').textContent=`Computer   : ${ComPoints}`;
    const p2=document.getElementById('p2').textContent=`You  : ${ComPoints}`;
    const print=document.querySelector('pre').innerHTML="COMPUTER VS YOU";
    img.src='./img/cRock.jpg';
    img2.src='./img/uRock.jpg';
});