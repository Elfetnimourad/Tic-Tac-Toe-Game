/**
 * @jest-environment jsdom
 */
beforeAll(() => {
  document.body.innerHTML = `   <div class="board-style">
        <div class="divs"></div>
        <div class="divs"></div>
        <div class="divs"></div>
        <div class="divs"></div>
        <div class="divs"></div>
        <div class="divs"></div>
        <div class="divs"></div>
        <div class="divs"></div>
        <div class="divs"></div>
    </div>
            <button type="reset" title="reset">Reset</button>`;

  require("./index.ts");
});
describe("testing the tic tac toe game", () => {
  test("test button", () => {
    const probaWins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let XPlayer = [0,1,2];
const checkXresult = probaWins.some((e,i)=>JSON.stringify(e)===JSON.stringify(XPlayer));
    const board = document.querySelectorAll(".divs");

    const btn = document.querySelector("button");
    
    expect(btn).not.toBeNull();
    expect(probaWins.length).toBe(8);
    expect(checkXresult).toBeTruthy()
  });
  test("test board Game", () => {
    const board = document.querySelectorAll(".divs");
    expect(board).toHaveLength(9);
  });
   test("test reset button", () => {
    const board = document.querySelectorAll(".divs");
        const btn = document.querySelector("button");
btn?.addEventListener("click",()=>{
    board.forEach(e=>{
        e.innerHTML = ""
    })
})
expect(board[0].textContent).toBe('')
  });
});