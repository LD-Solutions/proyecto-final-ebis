interface Stock {
    stockSymbol: string,
    name: string,    
    stocks: number,
    value: number
}


// Get the data from the local JSON
fetch("../assets/data/my-portfolio.json")
    .then(response => response.json())
    .then(data => renderPortfolio(data))
    .catch(error => console.error('Error fetching el JSON:', error));

function renderPortfolio(data: Stock[]) {
    const dashboard = document.getElementById("dashboard");
    const valores = document.getElementById("valores");

    for (const [_, stock] of Object.entries(data)) {
        valores?.appendChild(renderTableRow(stock));
    }
}

function renderTableRow(stock: Stock): Node {
    const row = document.createElement("tr");
    
    for (const [key, element] of Object.entries(stock)) {
        const cell = document.createElement("td");

        if (key == "value") {
            // Calcular valor total del stock
            cell.textContent = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR"}).format(stock.stocks * element).toString();
        } else {
            cell.textContent = element;
        }

        row.appendChild(cell);
    }

    return row;
}