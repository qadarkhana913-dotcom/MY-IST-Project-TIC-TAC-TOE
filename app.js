let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#reset_btn");
let game = document.querySelector(".game");
let msg_continer = document.querySelector(".msg_continer");
let msg = document.querySelector("#msg");
let new_btn = document.querySelector("#new_btn");
let body=document.querySelector("body");

let turnO = true;

const winpattrn = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const reset_game = () => {
  turnO = true;
  enable_boxes();
  msg_continer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button was click");
    if (turnO) {
         box.style.color="red";
      box.innerText = "O";
      turnO = false;
    } else {
      box.style.color="green";
      box.innerText="X";
      turnO = true;
    }
    box.Disabled = true;
    checkWiner();
  });
});

const disable_boxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enable_boxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "" ;
  }
};
 const color_change=()=>{
    
 }
const show_Winner = (winner) => {
    msg.style.color="red";
  msg.innerText = `🏆 Congratulations! Winner is  ${winner}`;
  msg_continer.classList.remove("hide");
  body.style.backgroundColor="blue";
  disable_boxes();
};
 

const checkWiner = () => {
  for (let pattron of winpattrn) {
    let position1 = boxes[pattron[0]].innerText;
    let position2 = boxes[pattron[1]].innerText;
    let position3 = boxes[pattron[2]].innerText;
    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        show_Winner(position1);
      }  
    }
  }
  // DRAW CHECK
let isDraw = true;

for (let box of boxes) {
  if (box.innerText === "") {
    isDraw = false; // still empty boxes, not a draw
    break;
  }
}

if (isDraw) {
     body.style.backgroundColor="orange";
  msg.innerText = "Match Draw 🤝";
  msg_continer.classList.remove("hide");
  disable_boxes();
}

};

// this code use to click the button
new_btn.addEventListener("click", reset_game);
reset_btn.addEventListener("click", reset_game);
