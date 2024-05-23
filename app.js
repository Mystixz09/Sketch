const contentContainer = document.querySelector(".content");
const inputs = document.querySelectorAll("input");
const gridValue = document.querySelector(".rangevalue")
const buttons = document.querySelectorAll(".controls");
console.log(buttons);

let boxes ;
let text ;
let isPressed = false;
let isOver = true;
let toggle;
let color;

inputs[0].addEventListener('input' ,()=>{
    choice(toggle);
});
inputs[1].addEventListener("input" ,()=>{
    makeBoxes();
});

function makeBoxes(){
    while (contentContainer.hasChildNodes()){
        contentContainer.firstChild.remove();
    }
    for(let i = 0; i<Number(inputs[1].value) ;i++){
        let div = document.createElement('div');
        div.setAttribute("class","row");
        div.setAttribute("id",`row${i}`);
        contentContainer.append(div);
    }
    const rowContents = document.querySelectorAll('.row');
    rowContents.forEach((element) =>{
        for(let i = 0; i<Number(inputs[1].value) ;i++){
            let box = document.createElement('div');
            box.setAttribute("class","box");
            box.setAttribute("id",`box${i}`);
            element.append(box);
        }
    });
    text =`${inputs[1].value} x ${inputs[1].value}`;
    gridValue.textContent = text;
    boxes = document.querySelectorAll(".box");
    choice(toggle);
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            toggle = button.name;
            choice(toggle);
        });
    });
}

makeBoxes();

function choice(toggle){
    if(toggle === 'erase'){
        writeOnScreen("#FFFFFF");
    }else if(toggle === "clear"){
        boxes.forEach((box) =>{
            box.style.backgroundColor = "#FFFFFF";
        });
        toggle = 'draw';
    }
    else{
        writeOnScreen(inputs[0].value);
    }
}
function writeOnScreen(value){
    boxes.forEach((box) =>{
        box.addEventListener('mouseover', (e) => {
            isOver = true;
            if(isPressed && isOver){
                e.target.style.backgroundColor = value;
            }
        });
        box.addEventListener('click' , (e)=>{
            e.target.style.backgroundColor = value;
        });
        box.addEventListener('mousedown', () => {
            isPressed = true;
        });
        
        box.addEventListener('mouseup', () => {
            isPressed = false;
        });
    });
}
