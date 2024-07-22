let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let winner=document.querySelector(".winner");
let msg=document.querySelector("#msg");
let restart=document.querySelector("#restart");
let turnO=true;
const pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(turnO){
            box.innerText="O";
            box.style.color="green";
            turnO=false;
            count++;
        }
        else{
            box.innerText="X";
            turnO=true;
            count++;
        }
        console.log("count: "+count);
        if (count===9) {
            msg.innerText="Game is Draw";
            winner.classList.remove("hide");
            count=0;
        } 
        box.disabled=true;
        check();
    })

})

const final=(pos)=>{
    msg.innerText=" Conguratuation!!! Winner: "+pos;
    winner.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }
}
const check=()=>{
    for(let pat of pattern){
        let pos1=boxes[pat[0]].innerText;
        let pos2=boxes[pat[1]].innerText;
        let pos3=boxes[pat[2]].innerText;

        if(pos1 !="" && pos2 !=""&& pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner: "+pos1);
                final(pos1);
            }
        }
    }
};

const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame=()=>{
    turnO=true;
    enable();
    winner.classList.add("hide");
};

restart.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);