var weekNum = 1; 
var startDate = new Date(); //Default is system's date
var currDate = new Date(startDate);

function addRow() {
    var table = document.getElementById("main-table");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    currDate.setDate(startDate.getDate() + (7 * weekNum));
    currDate.setDate(currDate.getDate() - (currDate.getDay() - startDate.getDay()));  //the code to increment the date is weird
    currDate.setMonth(currDate.getMonth() - 1);

    cell1.innerHTML = "Week " + String(++weekNum);
    cell2.innerHTML = currDate.toDateString();
    cell3.innerHTML = "hello";
}