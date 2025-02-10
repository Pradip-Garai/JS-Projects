const noButton = document.getElementById("no");

noButton.addEventListener("mouseenter", function() {
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

const yesButton = document.getElementById("yes");

yesButton.addEventListener('click',()=>{
    const div =document.createElement('div');
    div.id='answer';
    const h1=document.createElement('h1');
    h1.className = 'font-effect-neon';
    h1.innerHTML='I LOVE YOU 2';

    div.append(h1);
    document.body.append(div);
})