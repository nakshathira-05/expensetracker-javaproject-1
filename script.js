const BASE_URL = "http://localhost:8080";

function addExpense() {
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    fetch(BASE_URL + "/add-expense", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, category, description })
    })
    .then(res => res.json())
    .then(data => {
    alert(data.message);
    loadExpenses();
});
}

function getSummary() {
    fetch(BASE_URL + "/summary")
    .then(res => res.json())
    .then(data => {
        document.getElementById("summary").textContent =
            JSON.stringify(data, null, 2);
    });
}


function loadExpenses() {
    fetch("http://localhost:8080/expenses")
        .then(res => res.json())
        .then(data => {

            const tbody = document.querySelector("#expenseTable tbody");
            tbody.innerHTML = "";

            data.forEach(exp => {
                const row = `
                    <tr>
                        <td>${exp.amount}</td>
                        <td>${exp.category}</td>
                        <td>${exp.description}</td>
                    </tr>
                `;
                tbody.innerHTML += row;
            });
        });
}