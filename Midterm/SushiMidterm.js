/*
TITLE: Midterm - Course Project 
AUTHOR: Macayla C. Davis (MCD)
CREATE DATE: 9 March 2024
PURPOSE: To publish a web page that meets the requirements of the midterm and showcases the skills I've gained so far in the course. 
Theme: Menu & order form for a sushi restaurant.  
LAST MODIFIED ON: 9 March 2024
LAST MODIFIED BY: Macayla C. Davis (MCD)
MODIFICATION HISTORY:
No modifications 
*/

var SushiProgram = {
    // Requirement 3: Create and use a function that has parameters and either returns a value or sends output to a page element.
    greetCustomer: function(name) {
        // Requirement 6: Use at least one string method.
        var formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        var currentDate = new Date().toDateString();
        var greetingMessage = "Welcome to our sushi restaurant, " + formattedName + "! Today is " + currentDate + ".";
        document.getElementById('greetingMessage').innerHTML = greetingMessage;
    },

    // Requirement 4: Create and use an array 
    rolls: ['Dragon Roll', 'Rainbow Roll', 'Playboy Roll', 'Crunchy Roll', 'Hoosier Roll'],
    prices: [10, 13, 14, 12, 12],
    currentDate: new Date(),

    // Requirement 5: Use at least two arithmetic operators.
    // Requirement 8: Use a Math Object method.
    // Requirement 10: Use the keyword this.
    updatePrices: function(discountPercentage) {
        for (var i = 0; i < this.prices.length; i++) {
            var discountedPrice = this.prices[i] * (1 - (discountPercentage / 100));
            this.prices[i] = Number(discountedPrice.toFixed(2));
        }
        this.outputSushiMenu(); // Update the menu after prices change
    },

    outputSushiMenu: function() {
        var menuOutput = "<ul>";
        for (var i = 0; i < this.rolls.length; i++) {
            menuOutput += "<li>" + this.rolls[i] + ": $" + this.prices[i] + "</li>";
        }
        menuOutput += "</ul>";
        document.getElementById('sushiOutput').innerHTML = menuOutput;
    },

    // Requirement 7: Create and use an object that has properties and methods.
    calculateTotal: function(applyDiscount) {
        return function() {
            var checkboxes = document.getElementsByName("sushi");
            var totalCost = 0;

            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    totalCost += parseFloat(checkboxes[i].value);
                }
            }

            if (applyDiscount) {
                totalCost *= 0.9; // Apply a 10% discount
            }

            var totalCostSpan = document.getElementById("totalCost");
            totalCostSpan.textContent = "$" + totalCost.toFixed(2);
        };
    }
};

// Add event listener to greet the customer and display the message
document.getElementById('submitName').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    SushiProgram.greetCustomer(name);
});

//Requirement 11: Initialize your object with values, call each of the methods, and output the modified values.
SushiProgram.outputSushiMenu();
SushiProgram.greetCustomer('Customer');

// Add event listener to calculate total
var totalButton = document.getElementById("total");
totalButton.addEventListener("click", function() {
    SushiProgram.calculateTotal(false); // Change 'false' to 'true' if you want to apply the discount

    // Calculate total cost
    var checkboxes = document.getElementsByName("sushi");
    var totalCost = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            totalCost += parseFloat(checkboxes[i].value);
        }
    }

    // Display total cost
    var totalCostSpan = document.getElementById("totalCost");
    totalCostSpan.textContent = "$" + totalCost.toFixed(2);

    // Calculate and display discount message
    var discountInfo = calculateDiscount(totalCost);
    var discountMessageDiv = document.getElementById("discountMessage");
    discountMessageDiv.textContent = discountInfo.message;
});

// Requirement 12: Demonstrate the use of an if/else construct or switch statement with at least three case values and a default code block. 
//Requirement 13: Demonstrate the use of at least two comparison operators
//Requiremtn 14: Demonstrate the use of a logical operator 
// Requirement 12: Demonstrate the use of an if/else construct or switch statement with at least three case values and a default code block. 
//Requirement 13: Demonstrate the use of at least two comparison operators
//Requiremtn 14: Demonstrate the use of a logical operator 
function calculateDiscount(totalCost) {
    var discount;
    var discountMessage;

    if (totalCost >= 10 && totalCost <= 100) {
        discount = 15;
        discountMessage = "Congratulations! You qualify for a 15% discount.";
    } else if (totalCost >= 30) {
        discount = 10;
        discountMessage = "Congratulations! You qualify for a 10% discount.";
    } else if (totalCost >= 20) {
        discount = 5;
        discountMessage = "Congratulations! You qualify for a 5% discount.";
    } else {
        discount = 0;
        discountMessage = "Sorry, you don't qualify for any discount this time.";
    }

    return { discount: discount, message: discountMessage };
}