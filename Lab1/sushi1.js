/*
TITLE: Lab 1 - Expressions,Functions, and Objects 
AUTHOR: Macayla C. Davis (MCD)
CREATE DATE: 30 January 2024
PURPOSE: To publish a web page that meets the requirements of the lab and has a designated theme 
Theme: Menu & order form for a sushi restaurant.  This assignment largely focuses on the menu's items/prices.
LAST MODIFIED ON: 30 January 2024
LAST MODIFIED BY: Macayla C. Davis (MCD)
MODIFICATION HISTORY:
No modifications 
*/

var titleElement = document.getElementById("pageTitle");
var welcomeElement = document.getElementById("welcome");
var explanationElement = document.getElementById("explanation");
var sushiElements = [
    document.getElementById("roll1"),
    document.getElementById("roll2"),
    document.getElementById("roll3"),
    document.getElementById("roll4"),
    document.getElementById("roll5"),
];
var menuElement = document.getElementById ("menuTitle");
var raffleElement = document.getElementById("sushiRaffle")
var dealTitle = document.getElementById("specialTitle")
var dealElement = 
    document.getElementById("special1")
    document.getElementById("special2")
    document.getElementById("special3")
    document.getElementById("special4")
    document.getElementById("special5")
var priceElement = document.getElementById("priceTitle")
var priceChange = document.getElementById("updatedPrices")
var updateMessage = document.getElementById("priceMessage")


//Requirement 4:Declare a string variable. Use the str prefix and initialize it to a string value.
strTitle = "Roll & Savor";
titleElement.innerHTML = strTitle; 


// Requirement 5: Declare an integer variable. Use the int prefix and initialize it to an integer value.
intRollNumber = 5;
welcomeElement.innerHTML = "Welcome to Roll & Savor - Home of " +intRollNumber + " delicious specialty rolls!";


//Requirement 6: Declare a Boolean variable. Use the bol prefix and initialize it to a Boolean value.
bolMouseOver = false;

//Event listener for  mouseover event
pageTitle.addEventListener("mouseover", function() {
    bolMouseOver = true;
    updateTitleColor();
});

pageTitle.addEventListener("mouseout", function() {
    bolMouseOver= false;
    updateTitleColor();
});

function updateTitleColor() {
    if (bolMouseOver) {
        pageTitle.style.color = "blue";
    } else {
        pageTitle.style.color = "black";
    }
}


// Requirement 7: Create a simple function that sends output to the page using textContent or innerHTML. 
function sendOutput(elementId, label, value) {
    var outputElement = document.getElementById(elementId);
    outputElement.innerHTML = label + ': ' + value;
}

// Example data for function 
var exampleName = "Jim Halpert";
var exampleAddress = "13831 Calvert Street";
var exampleNumber = "123-4567";

explanationElement.innerHTML= "Example of how customer information should be entered";
// Requirement 8: Call your function three separate times using different variables to three different page elements.
sendOutput("nameOutput", "Name", exampleName);
sendOutput("addressOutput", "Address", exampleAddress);
sendOutput("phoneOutput", "Phone Number", exampleNumber);



//Requirement 9: Create an array of strings. The array should have at least five elements.
sushiRolls = ["Dragon Roll", "Rainbow Roll","Playboy Roll", "Crunchy Roll", "Hoosier Roll" ];
//Requirement 10: Create an array of integers. The array should have at least five elements.
sushiNumbers = [1,2,3,4,5];
menuElement.innerHTML = "Weekday Menu";

for (var i = 0; i < sushiNumbers.length; i++) {
    var rollNumber = sushiNumbers[i];
    var sushiRoll = sushiRolls[i];
    var sushiElement = sushiElements[i];

    //Requirement 11: Use the function from step 7 to output the values of both arrays to different page elements.
    sendOutput(sushiElement.id, "Sushi Roll " + rollNumber , sushiRoll);
}




//Requirement 12: Use three different arithmetic operators to change each of the values in the array of integers.
for (var i = 0; i < sushiNumbers.length; i++) {
    if (i === 0 || i === 1) {
        sushiNumbers[i] += 1;  
    } else if (i === 2) {
        sushiNumbers[i] *=2;   
    } else if (i === 3 || i === 4) {
        sushiNumbers[i] += 30;   
    }
}

var message = "Any customer that orders all 5 rolls will automatically be entered in a raffle for a $40 gift card! Also, Customers ";
for (var j = 0; j < sushiNumbers.length; j++) {
    message += sushiNumbers[j];
    if (j < sushiNumbers.length - 1) {
        message += ", ";
    }
}
message += " all have a chance of winning a free roll (winnings sent to your email)!";
//Requirement 14: Use the function from step 7 to output the modified array of integers.
sendOutput("sushiRaffle", "Raffle for Today", message);



weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday"]

//Requirement 13: Use two different string methods to change each of the values in the array of strings.
dealTitle.innerHTML = "Rolls Below Are 30% Off on Their Designated Day"
for (var i = 0; i < sushiRolls.length; i++) {
    sushiRolls[i] = sushiRolls[i].toUpperCase();
    sushiRolls[i] += "!";
    
    
    var dealMessage = "The special for " + weekdays[i] + " is the " + sushiRolls[i];
    //Requirement 15: Use the function from step 7 to output the modified array of strings.
    sendOutput("special" + (i + 1), "Deal", dealMessage);
}








// Requirement 16: Object 
var SushiProgram = {
    //// Requirement 17: Initialize properties to visible values
    // At least two properties
    rolls: ['Dragon Roll', 'Rainbow Roll', 'Playboy Roll', 'Crunchy Roll', 'Hoosier Roll'],
    prices: [10, 13, 14, 12, 12],
    currentDate: new Date(),

    // Method that calculates total price using the keyword this
    //a method that returns a value that is calculated from the instantiated object's properties
    calculateTotalPrice: function() {
        var totalPrice = 0;
        for (var i = 0; i < this.prices.length; i++) {
            totalPrice += this.prices[i];
        }
        return totalPrice;
    },

    //Requirement 18: Use the object's output method to output the values of the properties to the page.
    outputSushiMenu: function() {
        var menuOutput = "";
        for (var i = 0; i < this.rolls.length; i++) {
            menuOutput += this.rolls[i] + ": $" + this.prices[i] + " ";
        }
        document.getElementById('sushiOutput').innerHTML = menuOutput;
    },
        // Requirement 21: Use dot notation inside a method to update at least one of the object's properties.
        updatePrice: function(index, newPrice) {
            this.prices[index] = newPrice;
            this.outputUpdatedPrices(); // Call a new method to output the updated prices
        },
        
        // // Requirement 22: After modifying the properties, use the object's output method to send the property values to a different page element.
        outputUpdatedPrices: function() {
            var updatedMenuOutput = "Today's Prices: ";
            for (var i = 0; i < this.rolls.length; i++) {
                updatedMenuOutput += this.rolls[i] + ": $" + this.prices[i] + " ";
            }
            document.getElementById('updatedPrices').innerHTML = updatedMenuOutput;
        },
    
    // Requirement 19: Call the object's method that uses the Math Object.
    useMathMethod: function() {
        var totalPrice = this.calculateTotalPrice();
        var tax = totalPrice * 0.07; 
        var totalWithTax = totalPrice + tax;
        var roundedTotal = Math.ceil(totalWithTax); // Rounding up to the nearest dollar
        
        document.getElementById('totalWithTax').innerHTML = 'Total of all 5 rolls with 7% tax: $' + totalWithTax.toFixed(2);

        document.getElementById('roundedTotal').innerHTML = 'Total rounded up to support breast cancer charity: $' + roundedTotal;
    },

    // Requirement 20: Call the object's method that uses the Date Object.
    useDateMethod: function() {
        document.getElementById('dateOutput').innerHTML = 'Today\'s Date: ' + this.currentDate.toDateString();
        document.getElementById("priceMessage").innerHTML = "Prices are altered today due to a national shortage of shrimp";
    }
    
}



SushiProgram.outputSushiMenu();
SushiProgram.updatePrice(0, 15);
SushiProgram.useMathMethod();
SushiProgram.useDateMethod();

