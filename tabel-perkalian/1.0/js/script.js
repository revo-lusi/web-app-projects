const inputRangeForm = document.getElementById("input-range-form");
const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");
const table = document.getElementById("tabel-matematika");
const restartBtn = document.querySelector(".restart");
const printBtn = document.querySelector(".print-btn");

inputRangeForm.addEventListener("submit", function (e) {
  table.classList.add("activated");
  restartBtn.style.display = "block";
  printBtn.style.display = "block";

  e.preventDefault();
  const firstNum = parseInt(document.getElementById("firstNum").value);
  const lastNum = parseInt(document.getElementById("lastNum").value);
  createTable(firstNum, lastNum);
  inputRangeForm.remove();
});

function createTable(firstNum, lastNum) {
  const th = document.createElement("th");
  th.textContent = "×";
  thead.appendChild(th);

  let inc = firstNum > lastNum ? false : true;

  for (
    let i = firstNum;
    firstNum <= lastNum ? i <= lastNum : i >= lastNum;
    inc ? i++ : i--
  ) {
    const th = document.createElement("th");
    th.textContent = i;
    thead.appendChild(th);

    const tr = document.createElement("tr");
    const thBody = document.createElement("th");
    thBody.textContent = i;
    tr.appendChild(thBody);

    for (
      let j = firstNum;
      firstNum <= lastNum ? j <= lastNum : j >= lastNum;
      inc ? j++ : j--
    ) {
      const td = document.createElement("td");
      td.textContent = i * j;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

printBtn.addEventListener("click", function () {
  table.classList.add("print-mode");
  document.getElementById("title").remove();
  restartBtn.remove();
  printBtn.remove();
  print();
});
