'use strict';
function Employee(employeeID, fullName, department, level, image) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.Image = image;
    this.salary = this.calculate();
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


Employee.prototype.render = function () {
    document.write(`<h1>${this.fullName}  Salary is :${this.salary} </h1><br>`);
}

const GhaziSamer = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "assets/images.jpg");
const LanaAli = new Employee('1001','Lana Ali','Finance','Senior',"assets/images.jpg");
const TamaraAyoub = new Employee('1002','Tamara Ayoub','Marketing','Senior',"assets/images.jpg");
const SafiWalid = new Employee('1003','Safi Walid','Administraion','Mid-Senior',"assets/images.jpg");
const OmarZaid = new Employee('1004','Omar Zaid','Development','Senior',"assets/images.jpg");
const RanaSaleh = new Employee('1005','Rana Saleh','Development','Junior',"assets/images.jpg");
const HadiAhmad = new Employee('1006','Hadi Ahmad','Finance','Mid-Senior',"assets/images.jpg");


// GhaziSamer.render();
// LanaAli.render();
// TamaraAyoub.render();
// SafiWalid.render();
// OmarZaid.render();
// RanaSaleh.render();
// HadiAhmad.render();