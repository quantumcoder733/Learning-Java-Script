// this function generates random color in rgb format

function randomColor() { 
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
return `rgb(${r},${g},${b})`;
}
window.addEventListener('DOMContentLoaded', () => {
  document.body.style.backgroundColor = randomColor();
});
// this for loop is used to assign the random colors to the boxes
for(let i=0;i<5;i++){
    // the box variable is used to get all the classes with name box
    const box = document.getElementsByClassName("box")[i]
    // this line assigns the random color to the background of the box
    box.style.backgroundColor = randomColor()
}

for(let i=0;i<5;i++){
    const box = document.getElementsByClassName("box")[i]
    box.style.borderColor = randomColor()
}

