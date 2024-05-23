const contentContainer = document.querySelector(".content");
const inputs = document.querySelectorAll("input");

let boxes ;
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
// contentContainer.addEventListener('mouseout' , ()=>{
//     isPressed = false;
// });


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
    boxes = document.querySelectorAll(".box");
    boxes.forEach((box) =>{
        box.addEventListener('mouseenter', (e) => {
            isOver = true;
            console.log(isPressed);
            console.log(isOver);
            if(isPressed && isOver){
                e.target.style.backgroundColor = inputs[0].value;
            }
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










// boxes.forEach((box) =>{
//     box.addEventListener('cl')
// });

