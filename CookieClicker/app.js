const titleEl = document.querySelector("#title-el");
const countEl = document.querySelector("#count-el");
const addoneEl = document.querySelector("#plusone-el");
const saveEl = document.querySelector("#save-el");
const saveDisplayEl = document.querySelector("#display-save-el");

let count = 0;
let savedClicks = [];

const increment = () => {
    count++;
    countEl.textContent = count;
  
}

//Array or String
function save() {
    savedClicks.push(count);

    // saveDisplayEl.innerHTML += "<li>" + count + "</li>"

    const li = document.createElement("li");
    li.textContent = count;
    saveDisplayEl.append(li);


    // let countStr = count + " - ";
    // saveDisplayEl.textContent += countStr;
     count = 0;
     countEl.textContent = count
   
}

addoneEl.addEventListener("click", increment)
saveEl.addEventListener("click",save)



