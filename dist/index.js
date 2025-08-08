let boxes = document.querySelectorAll('.divs');
let btn = document.querySelector('button');
let probaWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let arroFx = [];
let arrofo = [];
let turn = "X";
boxes.forEach((element, index) => {
    element.addEventListener('click', () => {
        // clear before update it
        element.innerHTML = '';
        //Prevent from Filled Boxes to modified it
        if (element.children.length > 0)
            return;
        let i = document.createElement("i");
        i.className = 'fa-solid fa-xmark';
        i.style.fontSize = "70px";
        i.style.color = "red";
        if (turn === "X") {
            i.className = 'fa-solid fa-xmark';
            arroFx.push(index);
            arroFx.sort((a, b) => a - b);
            setTurn("O");
        }
        else if (turn === "O") {
            i.className = 'fa-regular fa-circle';
            arrofo.push(index);
            arrofo.sort((a, b) => a - b);
            console.log("arrofo", arrofo);
            setTurn("X");
        }
        const XPlayer = probaWins.map((e, index) => {
            let setArrOfX = new Set(arroFx);
            return e.filter(c => setArrOfX.has(c));
        });
        const OPlayer = probaWins.map((e, index) => {
            let setArrOfO = new Set(arrofo);
            return e.filter(c => setArrOfO.has(c));
        });
        element.style.display = 'flex';
        element.style.justifyContent = 'center';
        element.style.alignItems = "center";
        console.log('hi', index);
        element.appendChild(i);
        //Checking Part
        let checkX = probaWins.some((e, i) => JSON.stringify(e) == JSON.stringify(XPlayer[i]));
        let checkO = probaWins.some((e, i) => JSON.stringify(e) == JSON.stringify(OPlayer[i]));
        let checkXarr = probaWins.filter((e, i) => JSON.stringify(e) == JSON.stringify(XPlayer[i]));
        let checkOarr = probaWins.filter((e, i) => JSON.stringify(e) == JSON.stringify(OPlayer[i]));
        const checkingDraw = [...boxes].every(c => c.innerHTML !== '');
        if (checkX) {
            checkXarr[0].forEach((l, c) => {
                boxes[l].style.backgroundColor = "green";
            });
            alert('X Player Win');
        }
        else if (checkO) {
            checkOarr[0].forEach((l, c) => {
                boxes[l].style.backgroundColor = "green";
            });
            alert('O Player Win');
        }
        else if (checkingDraw) {
            alert("DRAW");
        }
    });
});
btn.addEventListener('click', function () {
    boxes.forEach(e => {
        e.innerHTML = '';
    });
    arroFx = [];
    arrofo = [];
    boxes.forEach(ele => {
        ele.style.backgroundColor = "white";
    });
});
export function setTurn(val) {
    turn = val;
}
