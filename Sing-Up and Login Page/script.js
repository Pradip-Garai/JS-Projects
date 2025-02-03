const button=document.querySelector('button');

//count mobail number digit
function countDigit(num){
    let count=1;
    for(;num>10;num/=10)
        count++;
    return count;
}


button.addEventListener('click',(event)=>{
    event.preventDefault(); // Prevent form submission
    const Name=document.getElementById('inp1').value;
    const Phone=document.getElementById('inp2').value;
    const Email=document.getElementById('inp3').value;
    const Password=document.getElementById('inp4').value;
    const Password2=document.getElementById('inp5').value;
    
    // convert string to number
    let mob=Number(Phone);
    let digit=countDigit(mob);
    // userName=Name;

    if(Name.trim()===""){
        alert("Please Fill Name Section");
    }
    else if(Phone.trim()===""){
        alert("Please Fill Mobail Number");
    }
    else if(digit!=10){
        alert("Mobail Number Should be 10 Digits");
    }
    else if(Email.trim()===""){
        alert("Please Fill Email Section");
    }
    else if(Password.trim()===""){
        alert("Please Set Password");
    }
    else if(Password2.trim()===""){
        alert("Please Enter Confirm Password");
    }
    else if(Password!=Password2){
        alert("Comfirm Password Not Matched!!!");
    }
    else{
        alert(`Welcome ${Name}!!!`);
        window.location.href="login.html";
    }
})

/*********************************************** LOGIN ************************************************************************* */
const button2=document.getElementById('btn');
button2.addEventListener('click',()=>{
    
})