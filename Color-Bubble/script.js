document.body.addEventListener('click',(event)=>{
    //craete a div 
    const circle=document.createElement('div');
    circle.className='circle';
    
    //find clicking position
    const x=event.clientX;
    const y=event.clientY;

    circle.style.left=`${x-40}px`;
    circle.style.top=`${y-40}px`;
   
    const text=["Hello","Hola","Hi","Welcome","Hey","Namaste","Namaskar","Salam","Howdy","What'up"];
    circle.textContent=text[Math.floor(Math.random()*text.length)];
    document.body.appendChild(circle);
    const background=["red","blue","orange","yellow","green","purple","wheat","aqua","magenta"];
    circle.style.backgroundColor=background[Math.floor(Math.random()*background.length)];
    setTimeout(()=>{
        circle.remove();
    },5000);
})