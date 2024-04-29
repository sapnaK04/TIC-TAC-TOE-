let boxes =document.querySelectorAll(".box");
let btnreset = document.querySelector("#btn-reset");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO=true;

const Patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


const resetGame=()=>{
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            //playerO
            box.innerText="O";
            turnO=false;
        }
        else{
            //playerX
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        winner();

    });
    
});


const enabledBoxes=()=>{
    for(let box of boxes ){
        box.disabled=false;
        box.innerText="";
    }
}


const disabledBoxes=()=>{
    for(let box of boxes ){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}



const winner=()=>{
    for(let pattern of Patterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};


newbtn.addEventListener("click", resetGame);
btnreset.addEventListener("click", resetGame);