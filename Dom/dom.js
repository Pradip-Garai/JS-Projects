const ob=document.getElementById('head1');
ob.style.color=" White";

//query selector
const ob2=document.querySelector('#head2');
ob2.style.fontSize= '30px';
ob2.style.textDecoration="underline";
ob2.style.color='yellow';

const ob3=document.querySelector('.header');
ob3.style.backgroundColor="green";

const ob4=document.querySelector('#ul');
ob4.style.backgroundColor="pink";
ob4.style.color='red';

// all query selector
const obj2=document.querySelectorAll('.header');

//for loop
for(let i=0;i<obj2.length;i++){
    obj2[i].style.backgroundColor = 'green';
    obj2[i].style.color='white';
}

//for of loop
for(let val of obj2)
     val.style.textDecoration='underline';

//for each loop
obj2.forEach((val)=>{
    val.fontSize="25px";
})

//convert Node list to  array
const objj=document.querySelectorAll('.header');
Array.from(objj);

const objj2=document.querySelectorAll('li');

//******************************************************************************************************************** */
// const obje=document.getElementsByTagName('li');
// for(let i=0;i<obje.length;i++)
//     obje[i].style.color = "Aqua";
// Array.from(obje).forEach((val)=> console.log(val));

//******************************************************************************************************************* */
//Accessing using relationship
const list=document.querySelector('li');
console.log(list.parentNode);
console.log(list.parentElement);

const par=document.querySelector('ul');
console.log(par.childNodes);//nodelist
console.log(par.children); //htmlcollection 
console.log(par.firstChild);
console.log(par.lastChild); // output --> #text
console.log(par.firstElementChild); //output--> <li>
console.log(par.nextSibling);//#text

//******************************************************************************************************************* */

console.log(document.getElementById('head1').innerHTML);// Hello Coder<strong style="display: none;"> Army</strong>
console.log(document.getElementById('head1').innerText); //Hello Coder
console.log(document.getElementById('head1').textContent); // Hello Coder Army