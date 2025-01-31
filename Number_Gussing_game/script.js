const val=Math.floor(Math.random()*(100-1+1)+1);
const button=document.querySelector('button');
button.addEventListener('click',()=>{
    const input=document.querySelector('#result');
    const num=Number(input.value);

    //access to ans place
    const ans=document.querySelector('.ans');
    if(num===val){
        ans.textContent= "Congratulations!!! You Guess Right\nAnswer  "+val;
        return;
    }
    else if(val>num){
        ans.textContent="Too Low!!!";
    }
    else
    ans.textContent="Too Height!!!";
})