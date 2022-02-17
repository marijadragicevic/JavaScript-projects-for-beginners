// DOM
let container = document.querySelector(".container");
let ispis = document.querySelector(".ispis");
let p = document.querySelector("p");
let ispisH = document.getElementById("ispisH");
let ispisM = document.getElementById("ispisM");
let ispisS = document.getElementById("ispisS");
// promenljive
let sat = null;
let tenSekunde = 0;
let sekunde = 0;
let min = 0;
let br = 0;

container.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.id === "btn1") {
        clearInterval(sat);
        sat = setInterval(() => {
            tenSekunde++;
            if (tenSekunde === 100) {
                sekunde++;
                if (sekunde === 60) {
                    min++;
                    sekunde = 0;
                }
                tenSekunde = 0;
            }
            tenSekunde = String(tenSekunde).padStart(2, "0");
            sekunde = String(sekunde).padStart(2, "0");
            min = String(min).padStart(2, "0");

            ispisS.innerHTML = tenSekunde;
            ispisM.innerHTML = sekunde;
            ispisH.innerHTML = min;

        }, 1000 / 100);
        btn1.disabled = true;
        btn1.style.backgroundColor = "#ade796";
        btn1.style.color = "white";
    }

    else if (e.target.id === "btn2") {
        clearInterval(sat);
        btn1.disabled = false;
        btn1.style.backgroundColor = "white";
        btn1.style.color = "#78df50";
    }
    else if (e.target.id === "btn3") {
        document.location.reload();
    }
    else if (e.target.id === "btn4") {
        br++;
        let p1 = document.createElement("p");
        p1.innerHTML += `<p>${br}.time </p> <span>${p.innerHTML}</span>`;
        ispis.prepend(p1);
    }
});