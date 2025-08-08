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
    const btn = document.querySelector("button");
    expect(btn).not.toBeNull();
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