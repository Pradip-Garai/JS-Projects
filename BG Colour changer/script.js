// const red=document.getElementById('red');
// const blue=document.getElementById('blue');
// const orange=document.getElementById('orange');
// const yellow=document.getElementById('yellow');
// const magenta=document.getElementById('magenta');
// const body=document.querySelector('body');


// red.addEventListener('click',()=>{
//    body.style.backgroundColor = "red";
// })

// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = "blue";
// })

// yellow.addEventListener('click',()=>{
//     body.style.backgroundColor = "yellow";
// })

// magenta.addEventListener('click',()=>{
//     body.style.backgroundColor = "magenta";
// })

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = "orange";
//  })

/******************************************************************************************************************************** */
//optimise code 

// const button=document.querySelectorAll('button');
// const body=document.body;

// //accessing all button one by one that's why using for each loop 
// button.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         body.style.backgroundColor= button.id; // here print id colors  like red , blue .... 
//     })
// })
// we have to optimise code 
/* suppoes we have 100 button then 100 eventListener will be executed and that will be consume memory and our project will be slow
that why we have to  optimise our code using  event bubling and event capturing  */



/***********************************  Most Optimise Code ******************************************************/
// event deligation through event bubbling 
// here we set event at parent and we can easily access all child 
const root=document.getElementById('root');

root.addEventListener('click',(event)=>{
    if(event.target.tagName === 'BUTTON')
    document.body.style.backgroundColor = event.target.id;
   // OTHERWISE NOT CHANGE ANY COLOR 
})