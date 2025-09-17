const inputMain = document.querySelector(".input");
const log = document.getElementById("values");
const log11 = document.querySelector(".userText");
const newchatbtn = document.querySelector(".newchat");
const threedotsbtn = document.querySelector(".threedots");
const darkmodebtn = document.querySelector(".darkmode");

const inputField = document.getElementById("myInput");
const outputParagraph = document.getElementById("output");

inputMain.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default Enter key behavior (e.g., new line)
    const inputValue = inputMain.value;
    log.textContent = `${inputValue}`;
    inputMain.value = ""; // Clear the input field after getting the value
    log11.classList.remove("hide");
  }
});

newchatbtn.addEventListener("click", () => {
    log11.classList.add("hide");
})



let modebtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

modebtn.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})

threedotsbtn.addEventListener("click", () => {
    darkmodebtn.innerHTML = "Dark Mode";
})

const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);
