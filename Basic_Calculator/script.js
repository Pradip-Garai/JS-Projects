
//addition
const button=document.querySelector('#add');
button.addEventListener('click',()=>{
  //read the data
  const input1=document.getElementById('input1');
  const num1=Number(input1.value);  //convert string to number

  const input2=document.getElementById('input2');
  const num2=Number(input2.value); //convert string to number
  
    
  //output the result
  const re=document.getElementById('result');
  if(isNaN(num1) || isNaN(num2) || num1===" " || num2===" "){
    re.textContent="Invalid Input.......";
    return;
  }
  const result=num1+num2;
  re.textContent="Result : "+result;
})

//subtraction
const button2=document.querySelector('#sub');
button2.addEventListener('click',()=>{
  //read the data
  const input1=document.getElementById('input1');
  const num1=Number(input1.value);  //convert string to number

  const input2=document.getElementById('input2');
  const num2=Number(input2.value); //convert string to number

  const re=document.getElementById('result');
  if(isNaN(num1) || isNaN(num2) || num1===" " || num2===" "){
    re.textContent="Invalid Input.......";
    return;
  }
  //output the result
  const result=num1-num2;
  re.textContent="Result : "+result;
})

//Multiplication
const button3=document.querySelector('#mul');
button3.addEventListener('click',()=>{
  //read the data
  const input1=document.getElementById('input1');
  const num1=Number(input1.value);  //convert string to number

  const input2=document.getElementById('input2');
  const num2=Number(input2.value); //convert string to number

  //output the result
  const re=document.getElementById('result');
  if(isNaN(num1) || isNaN(num2) || num1===" " || num2===" "){
    re.textContent="Invalid Input.......";
    return;
  }
  const result=num1*num2;
  re.textContent="Result : "+result;
})

//Division
const button4=document.querySelector('#divi');
button4.addEventListener('click',()=>{
  //read the data
  const input1=document.getElementById('input1');
  const num1=Number(input1.value);  //convert string to number

  const input2=document.getElementById('input2');
  const num2=Number(input2.value); //convert string to number

  //output the result
  const re=document.getElementById('result');
  if(isNaN(num1) || isNaN(num2) || num1===" " || num2===" "){
    re.textContent="Invalid Input.......";
    return;
  }
  const result=num1/num2;
  re.textContent=result;
})

//Clear
const clear=document.getElementById('clear');
clear.addEventListener('click',()=>{
    //result box clear
    const re=document.getElementById('result');
    re.textContent=" ";
    
})