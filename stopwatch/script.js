// Button
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
// Ispis
let p = document.querySelector("p");
let ispisH = document.getElementById("ispisH");
let ispisM = document.getElementById("ispisM");
let ispisS = document.getElementById("ispisS");
// promenljive
let sat = null;
let tenSekunde = 0;
let sekunde = "00"; // ne moze ovako da ostane
let min = "00";

btn1.addEventListener("click", function () {
    clearInterval(sat);

    sat = setInterval(() => {
        tenSekunde++;
        if (tenSekunde == 100) {
            sekunde++;
            if (sekunde == 60) {
                min++;
                if (min < 10) {
                    min = "0" + min;
                }
                sekunde = 0;
            }
            else if (sekunde < 10) {
                sekunde = "0" + sekunde;
            }
            tenSekunde = 0;
        }
        else if (tenSekunde < 10) {
            tenSekunde = "0" + tenSekunde;
        }

        ispisS.innerHTML = tenSekunde;
        ispisM.innerHTML = sekunde;
        ispisH.innerHTML = min;


    }, 10);
    btn1.disabled = true;
    btn1.style.backgroundColor = "#ade796";
    btn1.style.color = "rgb(255, 252, 222)";
});

btn2.addEventListener("click", function (e) {
    e.preventDefault();
    clearInterval(sat);
    btn1.disabled = false;
    btn1.style.backgroundColor = "rgb(255, 252, 222)";
    btn1.style.color = "#78df50";
});
btn3.addEventListener("click", function (e) {
    e.preventDefault();
    document.location.reload();
});