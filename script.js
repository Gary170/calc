function calculate() {
  var income = document.getElementById("income").value;
  var expenses = document.getElementById("expenses").value;
  var balance = income - expenses;
  document.getElementById("balance").innerHTML = balance;
}
