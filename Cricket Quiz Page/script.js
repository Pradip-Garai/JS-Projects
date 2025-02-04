const originalAns={
    q1:"Sachin Tendulkar",
    q2:"West Indies",
    q3: "Sachin Tendulkar",
    q4: "264",
    q5: "Muttiah Muralitharan"
};

const form=document.querySelector('form');
form.addEventListener('submit',(event)=>{
   
    event.preventDefault();
   
    const data=new FormData(form);

    let result=0;
    for(let [key,val] of data.entries()){ // data.entries return key and value pair 
        if(val===originalAns[key])
            result++;
    }

    // const  answer=Array.from(data.values());
    // console.log(answer);
   
    // let result=0;
    // for(let i=0;i<answer.length;i++){
    //       if(answer[i] === originalAns[i])
    //         result++;
    // }
  
//    const out=document.getElementById('output');
//    out.innerText = `Score : ${result} out of 5 is Correct\n\n`;

//    const div=document.getElementById('quiz');
//    div.append(out);

  alert(`Score : ${result} out of 5 is Correct`);

  form.reset();
})