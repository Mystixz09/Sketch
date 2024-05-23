const contentContainer = document.querySelector(".content");
const inputs = document.querySelectorAll("input");
const gridValue = document.querySelector(".rangevalue")

let boxes ;
let text ;
let isPressed = false;
let isOver = true;

inputs[0].addEventListener('input' ,()=>{});
inputs[1].addEventListener("input" ,()=>{
    console.log(inputs[1].value);
    while (contentContainer.hasChildNodes()){
        contentContainer.firstChild.remove();
    }
    makeBoxes();
    
    
});

function makeBoxes(){
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
    boxes.forEach((box) =>{
        box.addEventListener('mouseover', (e) => {
            isOver = true;
            console.log(isPressed);
            console.log(isOver);
            if(isPressed && isOver){
                e.target.style.backgroundColor = inputs[0].value;
            }
        });
        box.addEventListener('click' , (e)=>{
            e.target.style.backgroundColor = inputs[0].value;
        });
        box.addEventListener('mousedown', () => {
            isPressed = true;
        });
        
        box.addEventListener('mouseup', () => {
            isPressed = false;
        });
    });
}
makeBoxes();


