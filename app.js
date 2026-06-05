const tbody = document.getElementById("tbody");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const salary = document.getElementById("salary").value;

    if(name === "" || surname === "" || salary === ""){
        alert("Butun xanalari doldurun!");
        return;
    }

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td></td>
        <td>${name}</td>
        <td>${surname}</td>
        <td>${salary}</td>
        <td>
            <button class="delete">Sil</button>
            <button class="edit">Düzəliş et</button>
        </td>
    `;

    tbody.appendChild(tr);

    updateNumbers();

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("salary").value = "";
});

tbody.addEventListener("click", (e) => {

    if(e.target.classList.contains("delete")){
        e.target.closest("tr").remove();
        updateNumbers();
    }

    if(e.target.classList.contains("edit")){

        const row = e.target.closest("tr");

        const name = row.children[1];
        const surname = row.children[2];
        const salary = row.children[3];

        name.innerHTML = `<input value="${name.textContent}">`;
        surname.innerHTML = `<input value="${surname.textContent}">`;
        salary.innerHTML = `<input value="${salary.textContent}">`;

        e.target.textContent = "Yadda saxla";
        e.target.classList.remove("edit");
        e.target.classList.add("save");
    }

    else if(e.target.classList.contains("save")){

        const row = e.target.closest("tr");

        row.children[1].textContent =
            row.children[1].querySelector("input").value;

        row.children[2].textContent =
            row.children[2].querySelector("input").value;

        row.children[3].textContent =
            row.children[3].querySelector("input").value;

        e.target.textContent = "Düzəliş et";
        e.target.classList.remove("save");
        e.target.classList.add("edit");
    }
});

function updateNumbers(){

    const rows = tbody.querySelectorAll("tr");

    rows.forEach((row,index)=>{
        row.children[0].textContent = index + 1;
    });
}
