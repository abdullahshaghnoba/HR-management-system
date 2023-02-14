'use srict';

function Employee(fullName, department, level, imagePath) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imagePath = imagePath;
    this.employeeId = 0;
    this.salary = this.calculate();
}

Employee.prototype.calcEmployeeId = function () {
    this.employeeId = getRandomArrOfInts(9000, 1000, 10000);
}

function getRandomArrOfInts(count, min, max) {
    const arrOfRandomInts = [];
    for (let i = 0; arrOfRandomInts.length < count; i++) {
        let randomInt = Math.floor(Math.random() * (max - min) + min);
        if (arrOfRandomInts.indexOf(randomInt) === -1) {
            arrOfRandomInts.push(randomInt)
        }
    }
    for (let x = 0; x < arrOfRandomInts.length; x++) {

        let myRandomInt = arrOfRandomInts[x];
        return myRandomInt;
    }
}

Employee.prototype.render = function () {

    const container = document.getElementById("mainSec");


    const divEl = document.createElement('div');
    container.appendChild(divEl);
    divEl.classList.add("divElclass");

    const employeeImgEl = document.createElement("img");
    divEl.appendChild(employeeImgEl);
    employeeImgEl.setAttribute("src", this.imagePath);
    employeeImgEl.classList.add("employeeImgElclass");

    const fullNameEl = document.createElement('h4');
    divEl.appendChild(fullNameEl);
    fullNameEl.textContent = `Name: ${this.fullName} -ID: ${this.employeeId} `;
    fullNameEl.classList.add("fullNameElclass");

    // const IdEl = document.createElement('h4');
    // divEl.appendChild(IdEl);
    // IdEl.textContent = `ID: ${this.employeeId}`;
    // IdEl.classList.add("IdElclass");

    const optionsOfDepartmentEl = document.createElement('h4');
    divEl.appendChild(optionsOfDepartmentEl);
    optionsOfDepartmentEl.textContent = `Department: ${this.department} -Level: ${this.level}`;
    optionsOfDepartmentEl.classList.add("optionsOfDepartmentElclass");

    // const optionsOfLevelEl = document.createElement('h4');
    // divEl.appendChild(optionsOfLevelEl);
    // optionsOfLevelEl.textContent = `Level: ${this.level}`;
    // optionsOfLevelEl.classList.add("optionsOfLevelElclass");
    
    const salaryEl =document.createElement("h4");
    divEl.appendChild(salaryEl);
    salaryEl.textContent = `${this.salary}`;

}

Employee.prototype.calculate = function () {
    let newSalary = 0;
   let netSalary = 0;
    switch (this.level) {
        case "Junior":
            newSalary = Math.floor((Math.random() * (1000-500)) + 500);
            netSalary = newSalary - newSalary * 0.075;
            return netSalary;
           
        case "Mid-Senior":
            newSalary = Math.floor((Math.random() * (1500-1000)) + 1000);
            netSalary = newSalary - newSalary * 0.075;
            return netSalary;
           
        case "Senior":
            newSalary = Math.floor((Math.random() * (2000-1500)) + 1500);
            netSalary = newSalary - newSalary * 0.075;
            return netSalary;
            

    }
}

let employeeForm = document.getElementById("formId");
employeeForm.addEventListener("submit", addNewEmployee);

function addNewEmployee(event) {
    event.preventDefault();
    let employeeimage = event.target.imgUrl.value;
    let employeeName = event.target.name.value;
    let department = event.target.Departments.value;
    let level = event.target.Level.value;



    let employee = new Employee(employeeName, department, level, employeeimage);
    employee.calcEmployeeId();
    employee.render();
}





