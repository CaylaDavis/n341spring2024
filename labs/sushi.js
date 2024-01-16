let specialsDiv = document.getElementById("specials")
let orderDiv = document.getElementById("order")

      
specialsDiv.innerHTML = "If you spend more than $25, you get $5 off"

function customerTotal() {
    var input = document.getElementsByName("sushi");
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            total += parseFloat(input[i].value);
        }
    }
        document.getElementById("total").value = "$" + total.toFixed(2);
            if (total.toFixed(2) == 0.00) {
                specialsDiv.innerHTML = "We have plenty of great roles to choose from! Take a pick!"
            }
            else if (total.toFixed(2) > 25.00) {
                specialsDiv.innerHTML = "Congratulations, you recieved $5 off! Your new total is" + " " + "$" + (total.toFixed(2) - 5);
            }
            else {
                specialsDiv.innerHTML = "Good Selections!"
            }
}

var day;
var level = 0;
switch (new Date().getDay()) {
case 0:
    day = "Sunday is a great day for sushi! Thanks for placing an order";
     break;
case 1:
    day = "Monday is a great day for sushi! Thanks for placing an order";
    break;
case 2:
    day = "Tuesday is a great day for sushi! Thanks for placing an order";
    break;
case 3:
    day = "Wednesday is a great day for sushi! Thanks for placing an order";
    break;
case 4:
    day = "Thursday is a great day for sushi! Thanks for placing an order";
    break;
case 5:
    day = "Friday is a great day for sushi! Thanks for placing an order";
     break;
case 6:
    day = "Saturday is a great day for sushi! Thanks for placing an order";
     break;
default: 
    day = "Thank you for ordering today";
     break;
 }
let dateDiv = document.getElementById("day");
dateDiv.innerHTML =  day; 







function customerPackages() {
let questionDiv = document.getElementById("question")
let wasabiDiv =  document.getElementById("wasabi")
let packDiv = document.getElementById("package")


questionDiv.innerHTML = "How many packages of complementary wasabi would you like. Each package contains 10 pieces of fresh wasabi" 
var strDigit =  wasabiDiv.value 
var intDigit = 0;

function 
wasabiDiv.innerHTML = "There will be" + strDigit + 0 + "pieces of wasabi in your order";

intDigit = parseInt(strDigit);
packDiv.innerHTML = "Thanks for ordering" + intDigit + 0 + "packages";

}

customerPackages();