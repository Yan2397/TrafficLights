
let s1 = document.createElement("span");
s1.id = "s1"
let s2 = document.createElement("span");
s2.id = "s2"


let main=setInterval(() => {
    


    let rs = 5
    let redLight = setInterval(() => {
        let r = document.querySelector("#red");
        r.style.background = "#f00";
        r.style.boxShadow = "0 0 150px #f00";
        r.style.transition=".5s"
        s1.style.color = '#f00'
        
        

        s1.innerHTML = rs
        yellow.append(s1)
        if (rs == 0) {

            clearInterval(redLight);
            r.style.background = "gray";

            r.style.boxShadow = "0 0 0";

            s1.remove();

        }
        rs--;



    }, 1000)



let yellowTime = setTimeout(() => {
    let ys = 2
    let yellowLight = setInterval(() => {
        let y = document.querySelector("#yellow");
        y.style.background = "#f7d708"
        y.style.boxShadow = "0 0 110px #f7d708";
        y.style.transition=".5s"
        

        if (ys == 0) {
            clearInterval(yellowLight);
            clearTimeout(yellowTime);
            y.style.background = "gray";
            y.style.boxShadow = "0 0 0";


        }
        ys--;
        
    }, 1000);

}, 3000)


let greenTime = setTimeout(() => {
    let gs = 5
    let greenLight = setInterval(() => {
        let g = document.querySelector("#green");
        s2.innerHTML = gs
        yellow.append(s2)
        g.style.background = "#00cc00"
        g.style.boxShadow = "0 0 120px  #00cc00";
        g.style.transition=".5s"
        s2.style.color = "#00cc00";


        if (gs == 0) {
            clearInterval(greenLight);
            clearTimeout(greenTime);
            g.style.background = "gray";
            g.style.boxShadow = "0 0 0";
            s2.remove()

        }
        gs--;
        
    }, 1000);

}, 5000)

let yellowTimeback = setTimeout(() => {
    let ys = 2
    let yellowLight = setInterval(() => {
        let y = document.querySelector("#yellow");
        y.style.background = "#f7d708"
        y.style.boxShadow = "0 0 110px #f7d708";
        y.style.transition=".5s"
        

        if (ys == 0) {
            clearInterval(yellowLight);
            clearTimeout(yellowTimeback);
            y.style.background = "gray";
            y.style.boxShadow = "0 0 0";


        }
        ys--;
        
    }, 1000);

}, 10500)

}, 12500);



// "use strict";
// // находим все классы
// var circle = document.getElementsByClassName("circle");
// // функция - счётчик counter
// function counter(setCounterOne, setCounterTwo, classIndex0, classIndex1, classIndex2) {
// 	// выводим счётчик
// 	var timeoutId = setInterval(function () { 
// 		classIndex0.classList.add("circleBGColor1");
// 		classIndex1.innerHTML = setCounterOne;
// 		classIndex1.classList.add("circleColor1");
// 		// очищаем счетчик и добавляем класс(желтый)
// 		if(setCounterOne <= 3) {
// 			classIndex1.innerHTML = "";
// 			classIndex1.classList.add("circleBGColor2");
// 		}
// 		setCounterOne--;
// 		// при достижении нуля останавливаем таймер и удаляем клас(желтый и красный)
// 		if (setCounterOne == 0) {
// 			clearInterval(timeoutId);
// 			classIndex1.classList.remove("circleBGColor2", "circleColor1");
// 			classIndex0.classList.remove("circleBGColor1");
// 			var timeId = setInterval(function() {
// 				// добавляем класс(зелёный)
// 				classIndex2.classList.add("circleBGColor3");
// 				classIndex1.innerHTML = setCounterTwo;
// 				classIndex1.classList.add("circleColor2");
// 				// добавляем второй счётчик
// 				if(setCounterTwo <= 3) {
// 					// мигание
// 					setTimeout(function() {
// 						classIndex2.classList.remove("circleBGColor3");
// 					}, 500);
// 				}
// 				if(setCounterTwo == 0) {
// 					clearInterval(timeId);
// 					classIndex1.innerHTML = "";
// 					classIndex1.classList.remove("circleColor2");
// 				}
// 				setCounterTwo--;
// 			}, 1000);
// 		}
// 	},1000);
// }
// // функция - подсчет таймаутов
// var totalCounter;
// function sumTimeout(counterOne, counterTwo) {
// 	var sumCounterOne = counterOne * 1000;
// 	var sumCounterTwo = counterTwo * 1000;
// 	totalCounter = (sumCounterOne + sumCounterTwo) + 1000;
// 	return totalCounter;
// }
// // рекурсия setTimeout
// setTimeout(function restartCounter() {
// 	// счётчик
// 	var addCounterOne = 10;
// 	var addCounterTwo = 7;
// 	// вызов подсчет таймаутов
// 	sumTimeout(addCounterOne, addCounterTwo);
// 	// вызов светофора counter( первый счётчик , второй счётчик, класс с индексом [0], класс с индексом [1], класс с индексом [2]);
// 	counter(addCounterOne, addCounterTwo, circle[0], circle[1], circle[2]);
// 	setTimeout(restartCounter, totalCounter);
// },100);