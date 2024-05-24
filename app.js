const contentContainer = document.querySelector(".content");
const inputs = document.querySelectorAll("input");
const gridValue = document.querySelector(".rangevalue")
const buttons = document.querySelectorAll(".controls");

let boxes ;
let text ;
let isPressed = false;
let isOver = true;
let toggle;
let color;

makeBoxes();

inputs[0].addEventListener('input' ,()=>{
    choice(toggle);
});
inputs[1].addEventListener("input" ,()=>{
    makeBoxes();
});

function getRandomValue(){
    return Math.floor((Math.random() * 255)).toString(16);
}
function rgb(){
    return `#${getRandomValue()}${getRandomValue()}${getRandomValue()}`;
}


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
        button.addEventListener('click', () => {
            toggle = button.name;
            choice(toggle);
        });
    });
}



function choice(toggle){
    if(toggle === 'erase'){
        buttons.forEach((button) =>{
            button.classList.remove("clicked");
        });
        writeOnScreen("#FFFFFF");
        buttons[1].classList.add("clicked");
    }else if(toggle === "clear"){
        buttons.forEach((button) =>{
            button.classList.remove("clicked");
        });
        boxes.forEach((box) =>{
            box.style.backgroundColor = "#FFFFFF";
        });
        writeOnScreen("#FFFFFF");
        buttons[2].classList.add("clicked");
    }else if (toggle === "random"){
        buttons.forEach((button) =>{
            button.classList.remove("clicked");
        });
        boxes.forEach((box) =>{
            box.addEventListener('mouseover', (e) => {
                isOver = true;
                if(isPressed && isOver){
                    e.target.style.backgroundColor = rgb();
                }
            });
            box.addEventListener('click' , (e)=>{
                e.target.style.backgroundColor = rgb();

            });
            box.addEventListener('mousedown', () => {
                isPressed = true;
            });
            
            box.addEventListener('mouseup', () => {
                isPressed = false;
            });
        });
        buttons[3].classList.add("clicked");
    }
    else{
        buttons.forEach((button) =>{
            button.classList.remove("clicked");
        });
        writeOnScreen(inputs[0].value);
        buttons[0].classList.add("clicked");
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
