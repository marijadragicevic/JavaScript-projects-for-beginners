// SAT
let div = document.querySelector("div");
let addZero = a => (a < 10) ? a = "0" + a : a;

setInterval(() => {
    let datum = new Date();
    let sati = datum.getHours();
    let min = datum.getMinutes();
    let sekunde = datum.getSeconds();
    sekunde = addZero(sekunde);
    min = addZero(min);
    sati = addZero(sati);
    if (sati >= 0 && sati < 12) {
        div.innerHTML = `${sati} : ${min} : ${sekunde} AM`;
    }
    else {
        div.innerHTML = `${sati} : ${min} : ${sekunde} PM`;
    }
}, 100);

// ALARM
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let ul = document.querySelector("ul");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

btn1.addEventListener("click", function (e) {
    e.preventDefault();

    let input1Value = parseInt(input1.value);
    let input2Value = parseInt(input2.value);
    if (input1Value < 0 || input1Value >= 24 || input2Value < 0 || input2Value > 60) {
        alert(`Wrong input!`);
    }
    else {
        if (isNaN(input1Value)) {
            input1Value = 0;
        }
        if (isNaN(input2Value)) {
            input2Value = 0;
        }
        input1Value = addZero(input1Value);
        input2Value = addZero(input2Value);

        let li = document.createElement("li");
        if (input1Value < 12) {
            li.innerHTML = `Alarm  - ${input1Value} : ${input2Value} AM`;
        }
        else {
            li.innerHTML = `Alarm  - ${input1Value} : ${input2Value} PM`;
        }
        ul.appendChild(li);

    }
    input1.value = "";
    input2.value = "";
});


// izbrisati li tag na klik
ul.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        e.target.remove();
    }
});

// reload stranice
btn2.addEventListener("click", function (e) {
    e.preventDefault();
    document.location.reload();
});