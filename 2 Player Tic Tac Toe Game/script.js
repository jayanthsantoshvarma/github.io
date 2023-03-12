let subSection0Elmt = document.getElementById("sub-section-0");
let subSection1Elmt = document.getElementById("sub-section-1");
let subSection2Elmt = document.getElementById("sub-section-2");
let subSection3Elmt = document.getElementById("sub-section-3");
let subSection4Elmt = document.getElementById("sub-section-4");
let subSection5Elmt = document.getElementById("sub-section-5");
let subSection6Elmt = document.getElementById("sub-section-6");
let subSection7Elmt = document.getElementById("sub-section-7");
let subSection8Elmt = document.getElementById("sub-section-8");
let resultElmt = document.getElementById("result");
let restartBtnElmt = document.getElementById("restartBtn");
let headingElmt = document.getElementById("heading");

let boxes = [subSection0Elmt, subSection1Elmt, subSection2Elmt, subSection3Elmt, subSection4Elmt, subSection5Elmt, subSection6Elmt, subSection7Elmt, subSection8Elmt];
let sequenceCombination = Array(9).fill(null);

let xPlayer = "X";
let oPlayer = "O";

let currentPlayer = xPlayer;

const winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function playerWon() {
    for (let seq of winningSequences) {
        let [a, b, c] = seq;

        if (sequenceCombination[a] && (sequenceCombination[a] === sequenceCombination[b] && sequenceCombination[a] === sequenceCombination[c])) {
            return [a, b, c];
        }
    }
    return false;
}

restartBtnElmt.onclick = function() {
    sequenceCombination.fill(null);
    boxes.forEach(Elmt => {
        Elmt.textContent = "";
    });
    currentPlayer = xPlayer;
    resultElmt.textContent = "";
    headingElmt.textContent = 'Tic Tac Toe | JSV';
};

let changeplayer = (player) => {
    if (player === xPlayer) {
        return oPlayer;
    } else if (player === oPlayer) {
        return xPlayer;
    } else {
        {
            return;
        }
    }
};

let boxClicked = (event) => {
    let box = event.target;
    if (box.textContent === "") {
        box.textContent = currentPlayer;
        sequenceCombination[parseInt(box.id.charAt(box.id.length - 1))] = currentPlayer;
        if (playerWon() !== false) {
            const winner = currentPlayer;
            resultElmt.textContent = `${winner} WON!`;
            headingElmt.textContent = "GAME OVER";
            return;
        }
        if (resultElmt.textContent === "" && !(sequenceCombination.includes(null))){
            resultElmt.textContent = "TIED , Play Again :)"
            return;
        }

        currentPlayer = changeplayer(currentPlayer);
    }
};

boxes.forEach(Elmt => {
    Elmt.addEventListener("click", boxClicked);
});