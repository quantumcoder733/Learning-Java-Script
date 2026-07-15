console.log("hello world");
let boxes = document.getElementsByClassName("box");
console.log(boxes);

document.getElementsByClassName("box")[4].style.backgroundColor = "aqua";
document.getElementsByClassName("box")[4].style.border = "2px solid black";

document.getElementById("box2").style.backgroundColor = "brown  ";

document.querySelector(".box").style.backgroundColor = "blue";
document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = "green";
});

document.getElementsByTagName("div")[0].style.backgroundColor = "yellow";

e = document.getElementsByTagName("div");
// e[4].matches("box2");
// true

// continue video 69