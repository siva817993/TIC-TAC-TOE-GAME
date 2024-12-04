let boxes=document.querySelectorAll(".box")
let rebtn=document.querySelector("#rebtn")
let msg=document.querySelector("#msg") 
let start=document.querySelector(".start")
let newbtn=document.querySelector(".newbtn")
const arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let turno=true;
let count=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
           turno=false;
           
    
        }
        else{
            box.innerText="X"
            turno=true;
        }
     box.disabled=true;
     count++;

     let isWinner = checkwinner();
 
     if (count === 9 && !isWinner) {
       gameDraw();
     }
     
    
    });
    
   
});

    const gameDraw = () => {
        msg.innerText = `Game was a Draw.`;
        start.classList.remove("hide");
        disableboxes();
      };
      

const resetgame=()=>{
    turno=true;
    count=0;
    enableboxes();
    start.classList.add("hide");

}
rebtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame)
const enableboxes=()=>{
    for(let box of boxes){
        box.innerText=""
        box.disabled=false;

    }
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
};
const showwinner=(winner)=>{
    msg.innerText=`Game Over, winner is ${winner}`;
start.classList.remove("hide")
    disableboxes();
}
const checkwinner=()=>{
    for(let p of arr){
        let val1=boxes[p[0]].innerText
        let val2=boxes[p[1]].innerText
        let val3=boxes[p[2]].innerText
        if(val1!="" && val2!="" && val3!=""){
        if(val1===val2 && val2===val3){
         showwinner(val1)
         return true
        }
    }

    }
}
