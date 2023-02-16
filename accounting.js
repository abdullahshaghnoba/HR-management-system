'use strict'


let employeesArr = [];
let jsonArr = localStorage.getItem("allEmployees");
if (employeesArr !== null) {
    employeesArr = JSON.parse(jsonArr);
}


let AdministrationArr = employeesArr.filter(employeesArr => employeesArr.department === "Administration");
let MarketingArr = employeesArr.filter(employeesArr => employeesArr.department === "Marketing");
let DevelopmentArr = employeesArr.filter(employeesArr => employeesArr.department === "Development");
let FinanceArr = employeesArr.filter(employeesArr => employeesArr.department === "Finance");





let arrOfAverages =[];
arrOfAverages.push(AverageSalary(AdministrationArr))
arrOfAverages.push(AverageSalary(MarketingArr))
arrOfAverages.push(AverageSalary(DevelopmentArr))
arrOfAverages.push(AverageSalary(FinanceArr))

function render() {

    const container = document.getElementById("renderSec");
    const table = document.createElement('table');
    container.appendChild(table);
    table.classList.add("table");

    ///////////////////////////////////////////first row///////////////////////////////////////
    const firstRow = document.createElement('tr');
    table.appendChild(firstRow);

    const firstTH = document.createElement('th');
    firstRow.appendChild(firstTH);
    firstTH.textContent = 'Department'

    const secondTH = document.createElement('th');
    firstRow.appendChild(secondTH);
    secondTH.textContent = 'Number Of Employees'

    const thirdTH = document.createElement('th');
    firstRow.appendChild(thirdTH);
    thirdTH.textContent = 'Average salary'

    const forthTH = document.createElement('th');
    firstRow.appendChild(forthTH);
    forthTH.textContent = 'Total Salary'

    ////////////////////////////////////// second row /////////////////////////////////////////
    const secondRow = document.createElement('tr');
    table.appendChild(secondRow);

    const firstTD2 = document.createElement('td');
    secondRow.appendChild(firstTD2);
    firstTD2.textContent = 'Administration'

    const secondTD2 = document.createElement('td');
    secondRow.appendChild(secondTD2);
    secondTD2.textContent = `${AdministrationArr.length}`

    const thirdTD2 = document.createElement('td');
    secondRow.appendChild(thirdTD2);
    thirdTD2.textContent = `${AverageSalary(AdministrationArr)}`

    const forthTD2 = document.createElement('td');
    secondRow.appendChild(forthTD2);
    forthTD2.textContent = `${totalSalary(AdministrationArr)}`

    /////////////////////////////////////////////////////////////third row //////////////////////////////////
    const thirdRow = document.createElement('tr');
    table.appendChild(thirdRow);

    const firstTD3 = document.createElement('td');
    thirdRow.appendChild(firstTD3);
    firstTD3.textContent = `Marketing`;

    const secondTD3 = document.createElement('td');
    thirdRow.appendChild(secondTD3);
    secondTD3.textContent = `${MarketingArr.length}`

    const thirdTD3 = document.createElement('td');
    thirdRow.appendChild(thirdTD3);
    thirdTD3.textContent = `${AverageSalary(MarketingArr)}`

    const forthTD3 = document.createElement('td');
    thirdRow.appendChild(forthTD3);
    forthTD3.textContent = `${totalSalary(MarketingArr)}`
    ////////////////////////////////////////////////////////////// forth row ////////////////////////////////////////////////////

    const forthRow = document.createElement('tr');
    table.appendChild(forthRow);

    const firstTD4 = document.createElement('td');
    forthRow.appendChild(firstTD4);
    firstTD4.textContent = `Development`;

    const secondTD4 = document.createElement('td');
    forthRow.appendChild(secondTD4);
    secondTD4.textContent = `${DevelopmentArr.length}`

    const thirdTD4 = document.createElement('td');
    forthRow.appendChild(thirdTD4);
    thirdTD4.textContent = `${AverageSalary(DevelopmentArr)}`

    const forthTD4 = document.createElement('td');
    forthRow.appendChild(forthTD4);
    forthTD4.textContent = `${totalSalary(DevelopmentArr)}`
    ///////////////////////////////////////////////////////////////// fifth row //////////////////////////////////////
    const fifthRow = document.createElement('tr');
    table.appendChild(fifthRow);

    const firstTD5 = document.createElement('td');
    fifthRow.appendChild(firstTD5);
    firstTD5.textContent = `Finance`;

    const secondTD5 = document.createElement('td');
    fifthRow.appendChild(secondTD5);
    secondTD5.textContent = `${FinanceArr.length}`

    const thirdTD5 = document.createElement('td');
    fifthRow.appendChild(thirdTD5);
    thirdTD5.textContent = `${AverageSalary(FinanceArr)}`

    const forthTD5 = document.createElement('td');
    fifthRow.appendChild(forthTD5);
    forthTD5.textContent = `${totalSalary(FinanceArr)}`
/////////////////////////////////////////////////////////////////sixth row /////////////////////////////////////
const sixthRow = document.createElement('tr');
    table.appendChild(sixthRow);

    const firstTD6 = document.createElement('td');
    sixthRow.appendChild(firstTD6);
    firstTD6.textContent = `Total`;

    const secondTD6 = document.createElement('td');
    sixthRow.appendChild(secondTD6);
    secondTD6.textContent = `${employeesArr.length}`

    const thirdTD6 = document.createElement('td');
    sixthRow.appendChild(thirdTD6);
    thirdTD6.textContent = `${averageOfAverageSalaries(arrOfAverages)}`

    const forthTD6 = document.createElement('td');
    sixthRow.appendChild(forthTD6);
    forthTD6.textContent = `${sumOfTotalSalaries(employeesArr)}`

}

render();



function AverageSalary(arr) {
    if (arr == null) {
        arr = [];
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].salary

    }
    return sum / arr.length
}



function totalSalary(arr) {
    if (arr == null) {
        arr = [];
    }
    let totalSalary = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSalary += arr[i].salary
    }
    return totalSalary
}




function sumOfTotalSalaries(arr) {
    if (arr == null) {
        arr = [];
    }
    let sumOfTotalSalaries = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfTotalSalaries += arr[i].salary
    }
    return sumOfTotalSalaries
}


function averageOfAverageSalaries(arr){
    if (arr == null) {
        arr = [];
    }
    let sum1 = 0;
    for (let j = 0; j < arr.length; j++) {
        sum1 += arr[j]
        
    }
    return sum1 / arr.length
}

