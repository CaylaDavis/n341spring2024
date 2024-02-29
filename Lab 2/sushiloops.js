var titleElement = document.getElementById("pageTitle");
var welcomeElement = document.getElementById("welcome");
var specialElement = document.getElementById("special")

//Requirement 4:Declare a string variable. Use the str prefix and initialize it to a string value.
strTitle = "Roll & Savor";
titleElement.innerHTML = strTitle; 

welcomeElement.innerHTML = "Welcome to Roll & Savor - Home of + delicious specialty rolls!";



//Requirement 3: Demonstrate the use of an if/else construct.
var specials = {
    1: "Dragon Roll",
    2: "Rainbow Roll",
    3: "Playboy Roll",
    4: "Crunchy Roll",
    5: "Hoosier Roll",
};

var currentDay = new Date().getDay();

var specialElement = document.getElementById("special");

if (currentDay >= 0 && currentDay <= 6) {
    var specialOfTheDay = specials[currentDay];
    specialElement.innerHTML = "Today's special is: " + specialOfTheDay;
} else {
    specialElement.innerHTML = "Sorry, there is no special offered today.";
}





// Requirement 4: Demonstrate the use of at least two of the following comparison operators: < and ===
var sushiMenu = {
    "dragonRoll": 15.00,
    "rainbowRoll": 13.00,
    "playboyRoll": 14.00,
    "crunchyRoll": 12.00,
    "hoosierRoll": 12.00
};

function calculateTotal() {
    var budgetInput = document.getElementById("budget");
    var customerBudget = parseFloat(budgetInput.value);
    console.log("Customer budget:", customerBudget);

    var totalPrice = 0;

    // Requirement 5: Demonstrate the use of at least two of the following logical operators: &&
    var checkboxes = document.querySelectorAll("#sushiMenu input[type='checkbox']");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked && sushiMenu.hasOwnProperty(checkbox.id)) {
            totalPrice += sushiMenu[checkbox.id];
        }
    });
    console.log("Total price:", totalPrice);

    var resultElement = document.getElementById("result");
    if (totalPrice < customerBudget) {
        resultElement.innerHTML = "Your current total is less than your budget.";
    } else if (totalPrice === customerBudget) {
        resultElement.innerHTML = "Your current total is equal to your budget.";
    } else {
        resultElement.innerHTML = "Your current total is above your budget.";
    }
}

document.getElementById("calculateBtn").addEventListener("click", calculateTotal);




// Requirement 6: Demonstrate the use of the switch statement with at least three case values and a default code block.
function displaySushiInfo(rollId) {
    var infoElement = document.getElementById("special");

    switch (rollId) {
        case "dragonRoll":
            //info from  https://www.sushi-avenue.com/product/playboy-roll-on-fire/
            infoElement.innerHTML = "<strong>Dragon Roll:</strong> The Dragon Roll is a popular sushi roll made with Tempura shrimp, asparagus, spicy tuna and tempura chips topped with steamed shrimp, spicy mayo, eel sauce and goma oil.";
            break;
        case "crunchyRoll":
            //info from https://chefjar.com/crunchy-roll-sushi/
            infoElement.innerHTML = "<strong>Crunchy Roll:</strong> The Crunchy Roll features a delicious combination of shrimp tempura and creamy avocado topped with super crunchy toasted panko breadcrumbs.";
            break;
        case "hoosierRoll":
            //from https://www.kasaiindy.com/order/main-menu/menu/hoosier-roll
            infoElement.innerHTML = "<strong>Hoosier Roll:</strong> The Hoosier Roll is a unique sushi roll made with Shrimp tempura, mango, cream cheese, topped with spicy crab meat, eel sauce, spicy mayo sauce and deep-fried potato.";
            break;
        case "rainbowRoll":
            //from https://www.delish.com/cooking/recipe-ideas/a40446831/rainbow-roll-recipe/
            infoElement.innerHTML = "<strong>Rainbow Roll:</strong> The Rainbow Roll is filled with imitation crab, cucumber, and avocado, and topped with salmon, tuna, and yellowtail.";
            break;
        case "playboyRoll":
            //from https://fortwayne.waiterontheway.biz/on-the-table/naked-tchopstix-playboy-roll
            infoElement.innerHTML = "<strong>Playboy Roll:</strong> The Playboy Roll is a made up of shrimp tempura, asparagus, spicy tuna mix, tempura chips, cooked shrimp, and three specialty sauces. The roll is set on fire, giving it a wonderfully crisp texture and smokey flavor. ";
            break;
        default:
            infoElement.textContent = "Please select a sushi roll to see more information.";
    }
}

// Attach event listener to sushi checkboxes
var sushiCheckboxes = document.querySelectorAll("#sushiMenu input[type='checkbox']");
sushiCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            displaySushiInfo(checkbox.id);
        } else {
            document.getElementById("special").textContent = "";
        }
    });
});


let num1 = '2';
let num2= '3';

welcomeElement.innerHTML = "Welcome to Roll & Savor - Home of + delicious specialty rolls! Located on ;
let sumString = num1String + num2String;
console.log("Adding two digits stored as strings:");
console.log("Sum (string concatenation):", sumString); // Output: "57" because it concatenates strings

// Using parseInt() to add two digits stored as strings
let sumParsedString = parseInt(num1String) + parseInt(num2String);
console.log("Sum (using parseInt()):", sumParsedString); // Output: 12 because it converts strings to integers before addition


let sumInt = num1Int + num2Int;
console.log("Adding two digits stored as integers:");
console.log("Sum (integer addition):", sumInt); // Output: 12 because it performs arithmetic addition
