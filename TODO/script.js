const button = document.querySelector('button');
let taskCount = 1;

button.addEventListener('click',(event)=>{
    // event.preventDefault();
    const Task = document.getElementById('input').value;

    const div = document.createElement('div');
    div.id='task';
    div.innerHTML =`${taskCount}. ${Task}`;

    taskCount++;
    
    const Container = document.getElementById('contain');
    Container.append(div);
   
    // empty the input box
    document.getElementById('input').value="";
})