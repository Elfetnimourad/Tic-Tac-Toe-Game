"use strict";
let boxes = document.querySelectorAll('.divs');
let btn = document.querySelector('button');
let count = 0;
let probaWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let arroFx = [];
let arrofo = [];
//[0, 1, 3, 6]
boxes.forEach((element, index) => {
    element.addEventListener('click', () => {
        element.innerHTML = '';
        // X styling
        let i = document.createElement("i");
        i.className = 'fa-solid fa-xmark';
        i.style.fontSize = "70px";
        i.style.color = "red";
        // checking for empty Boxes 
        if (i.className !== "") {
            count++;
        }
        console.log('counts', count);
        if (count > 0 && count % 2 !== 0) {
            i.className = 'fa-solid fa-xmark';
            arroFx.push(index);
            arroFx.sort((a, b) => a - b);
            console.log("arroFx", arroFx);
        }
        else if (count > 0 && count % 2 === 0) {
            i.className = 'fa-regular fa-circle';
            arrofo.push(index);
            arrofo.sort((a, b) => a - b);
            console.log("arrofo", arrofo);
        }
        // if(){
        // i.classList.toggle('fa-regular fa-circle')
        // }else if(i.className = 'fa-regular fa-circle'){
        //         i.classList.remove('fa-regular fa-circle')
        //   i.classList.toggle('fa-solid fa-xmark')
        // }
        // i.style.fontSize = "70px";
        // i.style.color = "red"
        const XPlayer = probaWins.map((e, index) => {
            let setArrOfX = new Set(arroFx);
            return e.filter(c => setArrOfX.has(c));
            // return e.filter((c,i)=>JSON.stringify(c) === JSON.stringify([i]));
        });
        const OPlayer = probaWins.map((e, index) => {
            let setArrOfO = new Set(arrofo);
            return e.filter(c => setArrOfO.has(c));
        });
        // console.log("let's see ",probaWins.map((e,index)=>{
        //   return e.concat(arroFx[index]);
        // }))
        //
        element.style.display = 'flex';
        element.style.justifyContent = 'center';
        element.style.alignItems = "center";
        console.log('hi', index);
        // let x:(string|null) = '❌'
        // i.textContent = x
        element.appendChild(i);
        console.log('XPlayer', XPlayer);
        let checkX = probaWins.some((e, i) => JSON.stringify(e) == JSON.stringify(XPlayer[i]));
        let checkO = probaWins.some((e, i) => JSON.stringify(e) == JSON.stringify(OPlayer[i]));
        console.log('finding', probaWins.filter((e, i) => JSON.stringify(e) == JSON.stringify(XPlayer[i])));
        if (checkX) {
            alert('X Player Win');
        }
        else if (checkO) {
            alert('O Player Win');
        }
        else if (count >= 9) {
            alert("Equal");
        }
    });
});
btn.addEventListener('click', function () {
    boxes.forEach(e => {
        e.innerHTML = '';
    });
    arroFx = [];
    arrofo = [];
    count = 0;
    console.log("arroFx", arroFx);
    console.log("arrofo", arrofo);
});
