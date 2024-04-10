var dataArray = [];

async function getData() {
    const response = await fetch('./data1.json');
    const data = await response.json();

    console.log(data)
    dataArray = data;
    drawTable();
    return data
}

function drawTable() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    const headers = ["#", "Név", "Életkor", "Fajta", "Gazda neve"];
    headers.forEach(function(header) {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.classList.add('table');
    table.classList.add('table-light');
    table.classList.add('table-striped');
    tbody.classList.add('table-group-divider');
    table.appendChild(thead);

    dataArray.forEach(function(item) {
        const row = document.createElement('tr');
        for (var key in item) {
            const cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    document.body.appendChild(table);

    
}

getData();