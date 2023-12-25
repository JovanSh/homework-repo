function generateTable() {
  const rows = document.getElementById("rows").value;
  const cols = document.getElementById("cols").value;
  let table = "<table>";
  for (let i = 0; i < rows; i++) {
    table += "<tr>";
    for (let j = 0; j < cols; j++) {
      table += `<td>Row ${i + 1}, Column ${j + 1}</td>`;
    }
    table += "</tr>";
  }
  table += "</table>";
  tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = table;
}

const clickMeBtnEl = document.querySelector("#clickMeBtn");
clickMeBtnEl.addEventListener("click", generateTable);
