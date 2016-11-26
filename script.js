console.log("javascript is sourced");
//employee array
var employee = [];

//enter new employee data
var addEmployee = function (firstName, lastName, idNumber, jobTitle, annualSalary){
 var newEmp = {
   first: document.getElementById( 'firstName' ).value,
   last: document.getElementById( 'lastName' ).value,
   id: document.getElementById( 'idNumber' ).value,
   job: document.getElementById( 'jobTitle' ).value,
   salary: document.getElementById( 'annualSalary' ).value,
};
employee.push(newEmp);
};// end enter new employee data

//clearFields upon mouseup
var clearFields = function() {
     document.getElementById( 'firstName' ).value = "",
     document.getElementById( 'lastName' ).value = "",
     document.getElementById( 'idNumber' ).value = "",
     document.getElementById( 'jobTitle' ).value = "",
     document.getElementById( 'annualSalary' ).value = ""
};//end clearFields
