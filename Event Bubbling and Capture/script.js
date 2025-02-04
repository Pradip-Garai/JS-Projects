const grandparent=document.getElementById('GrandParent');
const parent=document.getElementById('parent');
const child=document.getElementById('child');

// Event Bubbling and event capture

// addEventListerner(event_name,callbak,capturing);

//bydefalut bubbling running 
child.addEventListener('click',(event)=>{
    console.log("Child Click");
    event.stopPropagation();  // stopping bubbling and capturing 
},true) // false means bubbling or true menas captiring 

parent.addEventListener('click',()=>{
    console.log("parent Click");
    event.stopPropagation();  // stopping bubbling and capturing 
},false)

grandparent.addEventListener('click',()=>{
    console.log("grandparent Click");
    event.stopPropagation();  // stopping bubbling and capturing 
},true)


// event deligation