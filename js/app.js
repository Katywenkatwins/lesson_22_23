(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    console.log("Я вчу JS");
    console.log("Учим JS");
    console.log("JS");
    console.log("Учим");
    if (true) var size = 15;
    console.log(size);
    let userAge = 145 / 0;
    console.log(userAge);
    let userName;
    console.log(typeof userName);
    let userSize = "45" / "8";
    console.log(typeof userSize);
    let userCounter = 0;
    let users = userCounter++;
    console.log(users);
    console.log(true && 11 || 0);
    let scripthomework_name = 0;
    console.log(scripthomework_name ?? "Без имени");
    if (false) ; else console.log("Брехня");
    if (true) console.log("Правда");
    let message = true ? "Правда" : 0;
    console.log(message);
    if (false) ; else if (true) console.log("Правда");
    for (let i = 1; i < 6; i++) console.log(i);
    for (let num = 0; num < 2; num++) console.log(`Число: ${num}`);
    let num = 0;
    while (num < 2) {
        console.log(`Число: ${num}`);
        num++;
    }
    For1: for (let num = 0; num < 2; num++) for (let size = 0; size < 3; size++) {
        console.log(size);
        if (1 == size) break For1;
    }
    let numOne = Math.round(100 * (1.005 + Number.EPSILON)) / 100;
    console.log(numOne);
    let value = "135.58px";
    console.log(parseFloat(value));
    let value1 = 58 + "Фрілансер";
    if (isNaN(value1)) console.log("Результат виразу NaN");
    console.log(Math.max(10, 58, 39, -150, 0));
    console.log(Math.floor(58.858));
    let scripthomework_text = "фрилансер";
    console.log(scripthomework_text[5]);
    console.log(scripthomework_text.toUpperCase());
    console.log(scripthomework_text.slice(3, 6));
    window["FLS"] = true;
    isWebp();
})();