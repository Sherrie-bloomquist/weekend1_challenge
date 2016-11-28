console.log("javascript is sourced");
//employee array
var employee = [];

//enter new employee data
var addEmployee = function (firstName, lastName, idNumber, jobTitle, annualSalary){
   var firstN = document.getElementById( 'firstName' ).value;
   var lastN = document.getElementById( 'lastName' ).value;
   var idNum = document.getElementById( 'idNumber' ).value;
   var job = document.getElementById( 'jobTitle' ).value;
   var annSalary = document.getElementById( 'annualSalary' ).value;
   document.getElementById("monthlySalaryTotal").innerHTML=monthlySalaryTotal();


var newEmp = [firstN, lastN, idNum, job, annSalary];
employee.push(newEmp);
console.log(newEmp);

//add employee info to DOM
document.getElementById('listOfEmployees').innerHTML+=("<tr><td>"+ firstN +"</td><td>" + lastN + "</td><td>"+ idNum + "</td><td>" + job + "</td><td>" +
annSalary +"</tr></td>");
globalSalary =+ newEmp.annualSalary;
};// end enter new employee data

//clearFields upon mouseup
var clearFields = function() {
     document.getElementById( 'firstName' ).value = "",
     document.getElementById( 'lastName' ).value = "",
     document.getElementById( 'idNumber' ).value = "",
     document.getElementById( 'jobTitle' ).value = "",
     document.getElementById( 'annualSalary' ).value = ""
};//end clearFields

//calculate monthlySalaryTotal
var monthlySalaryTotal = function(){
  var globalSalary = 0;
  for(i=0; i<employee.length; i++){
  globalSalary += Number(employee[i][4]);
}
  return globalSalary/12;
};
