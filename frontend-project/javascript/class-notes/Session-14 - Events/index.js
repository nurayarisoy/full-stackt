// let navbarItem1 = document.getElementsByClassName("nav__item")[0].innerText;
// console.log(navbarItem1);
// let navbarItem1 = document.getElementsByClassName("nav__links")[0].firstElementChild.innerText;
let navbarItem1 = document.getElementsByClassName("nav__links")[0].children[0];
let navbarItem2 = document.getElementsByClassName("nav__links")[0].children[1];
let navbarItem3 = document.getElementsByClassName("nav__links")[0].children[2];
// console.log(navbarItem1);

let h1 = document.querySelector("h1");
let span = h1.querySelector(".highlight");
span.style.color = "red";
// span.classList.remove("highlight");
// span.className = "highlight";
// span.classList.add("highlight");
// console.log(span);
let headerDiv = h1.parentElement.children;
// console.log(headerDiv);
// [... headerDiv].forEach(function(element) {
//     if(element != h1){
//         element.style.transform = 'scale(0.7)';
//         element.style.color = "purple";
//     }
// });

for (let index = 0; index < headerDiv.length; index++) {
    if(headerDiv[index] != h1){
        headerDiv[index].style.transform = 'scale(0.7)';
        headerDiv[index].style.color = "purple";
    }
}

// DOM EVENTS

window.onload = (e) => {
    console.log("your page is loaded");
    // alert("your page was rendered");
}

window.addEventListener("load", (e) => {
    console.log("windowload eventlistener added");
    console.log(navbarItem1.innerText);
});

window.addEventListener("DOMContentLoaded", function(e){
    console.log("DOMContent was Loaded");
});

navbarItem1.addEventListener("click", ()=>{
    alert("Paths clicked by eventlistener");
});

navbarItem1.onclick = () =>{
    alert("Paths clicked by old version");
}
navbarItem2.addEventListener("mouseover", () => {
    navbarItem2.innerText = "Over Me!";
    navbarItem2.style.color = "green";
});

navbarItem2.addEventListener("mouseout", () =>{
    navbarItem2.innerText = "Instructors";
    navbarItem2.style.color = "#444444";
    navbarItem2.style.fontSize = "1.7rem"
});

// Bubbling 

// // 🔥🔥🔥🔥🔥  rgb rndom color(rgb(255,255,255) onclick of Community Li (CODE CHALLENGE)  🔥🔥🔥🔥🔥

const randomNumber = () => Math.round(Math.random() * 255);

const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;


console.log(randomColor());
navbarItem3.addEventListener("click", (e)=>{
    e.stopPropagation();
    navbarItem3.style.backgroundColor = randomColor();
});

navbarItem3.parentElement.addEventListener("click", ()=>{
    navbarItem3.parentElement.style.backgroundColor = randomColor();
});

navbarItem3.parentElement.parentElement.addEventListener("click", ()=>{
    navbarItem3.parentElement.parentElement.style.backgroundColor = randomColor();
});
