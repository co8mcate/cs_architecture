var employees = [];

function init() {
  "use strict";
  document.getElementById("out-browserinfo").innerHTML = navigator.userAgent;
  document.getElementById("button-submit").onclick = send;
}

function FetchData() {
  "use strict";
  let employeeId = Math.floor(Math.random() * 99999999 + 10000000);
  let employee = {
    employeeId: employeeId
  };
  let employeeJson = JSON.stringify(employee);
  let firstN = document.getElementById("firstname").value;
  let lastN = document.getElementById("lastname").value;
  let department = document.getElementById("department").value;
  let valid = true;

  while (valid) {
    if (employees.length === 0) {
      employees[employees.length] = {
        firstName: firstN,
        lastName: lastN,
        department: department,
        Id: employeeId
      };
      valid = false;
    } else if (employees.indexOf(employeeId) == -1) {
      employees.push({
        firstName: firstN,
        lastName: lastN,
        department: department,
        Id: employeeId
      });
      valid = false;
    } else {
      employeeId = Math.floor(Math.random() * 99999999 + 10000000);
      valid = true;
    }
  }
}
var month_name = function(dt) {
  "use strict";
  var mylist = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return mylist[dt.getMonth()];
};

function send() {
  "use strict";
  var date = new Date();
  var month = month_name(date);
  FetchData();
  document.getElementById("out-header").innerHTML = "<h1>Employee added</>";
  document.getElementById("out-name").innerHTML =
    "Name: " +
    employees[employees.length - 1].firstName +
    ", " +
    employees[employees.length - 1].lastName;
  document.getElementById("out-department").innerHTML =
    "Department: " + employees[employees.length - 1].department;
  document.getElementById("out-employeeid").innerHTML =
    "Employee ID: " + employees[employees.length - 1].Id;
  document.getElementById("out-hiredate").innerHTML =
    "Hire Date: " + month + " " + date.getDate() + " " + date.getFullYear();
  document.getElementById("out-totalemployees").innerHTML =
    "Total Employees: " + employees.length;
  //console.log(navigator.userAgent);
}
//document.addEventListener('DOMContentLoaded', init);
window.onload = init;
// END  make the json file from user's input

let requestURL = "http://localhost:8000";
let request = new XMLHttpRequest();
request.open("GET", requestURL);

// convert employee.json into javascript
var text =
  '{ "employees" : [' +
  '{ "firstName":"" , "lastName":"" },' +
  '{ "firstName":"" , "lastName":"" },' +
  '{ "firstName":"" , "lastName":"" } ]}';

var object = {
  table: []
};
