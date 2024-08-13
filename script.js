let boxes=document.querySelectorAll(".btn");
let resetBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container");
let newGameBtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
//playerX,playerO 
let turnO=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("bos was clicked");
        //Player O
        if(turnO){
            box.innerText="O";
            box.classList.add("flipColor");
            turnO=false;
        }
        //Player X
            else{
                box.classList.remove("flipColor");
                box.innerText="X";
                turnO=true;
            }
            box.disabled=true;
            count ++;
            let isWinner=checkWinner();
           
            if(count===9 && !isWinner){
                gameDraw();
            }
    }); 
});
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const disableBoxes=()=>{
   for(let box of boxes){
    box.disabled=true;
   }
}

const enableBoxes=()=>{
    for(let box of boxes){
     box.disabled=false;
     box.innerText="";
    }
 }

const showWinner=(winner)=>{
    msg.innerText=`Congratulations the Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        //console.log(patterns[0],patterns[1],patterns[2]);
       // console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1 !="" && posval2 !="" && posval2 !=""){
            if(posval1===posval2 && posval2===posval3){
               // console.log("Winner",posval1);
                showWinner(posval1);
                return true;
            }
        }
    }
   };

   newGameBtn.addEventListener("click",resetGame);
   resetBtn.addEventListener("click",resetGame);