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
};  //end clearFields

//calculate monthlySalaryTotal
var monthlySalaryTotal = function(){
  var globalSalary = 0;
  for(i=0; i<employee.length; i++){
  globalSalary += Number(employee[i][4]);
}
  return globalSalary/12;
};  //end calculate monthlySalaryTotal

var deleteEmployee = function(){
  var idNumber = document.getElementById('idNumberDelete').value;
  console.log(idNumber);
  for (i=0; i<employee.length; i++){
    console.log(employee[i][2]);
  if(employee[i][2]===idNumber){
  employee.splice(i,1);
  console.log(employee);
}
}
  document.getElementById( 'listOfEmployees' ).innerHTML=("<tr><th>First Name</th><th>Last Name</th><th>ID Number</th><th>Job Title</th><th>Annual Salary</th></tr>");
  for(i=0; i<employee.length; i++){
    document.getElementById('listOfEmployees').innerHTML+=("<tr><td>"+ employee[i][0] +"</td><td>" + employee[i][1] + "</td><td>"+ employee[i][2] + "</td><td>" + employee[i][3] + "</td><td>" +
    employee[i][4] +"</tr></td>");
  }
};
