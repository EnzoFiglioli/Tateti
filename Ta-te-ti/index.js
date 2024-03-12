const table = document.getElementById("frame-container");

let currentPlayer = "X";

for (let i = 0; i < 9; i++) {
    if (i % 3 === 0) {
        const tr = document.createElement("tr");
        table.appendChild(tr);
    }

    const trs = table.getElementsByTagName("tr");
    const th = document.createElement("th");

    trs[trs.length - 1].appendChild(th);

    th.addEventListener("click", () => {
        if (!th.innerText) {
            th.innerText = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
}
