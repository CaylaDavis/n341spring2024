/*
TITLE: Lab 3 Javascript Events
AUTHOR: Macayla C. Davis (MCD)
CREATE DATE: 28 February 2024
PURPOSE: To publish a web page that meets the requirements of the lab and has a designated theme Lab 3
Theme: Menu & order form for a sushi restaurant.  
LAST MODIFIED ON: 28 February 2024
LAST MODIFIED BY: Macayla C. Davis (MCD)
MODIFICATION HISTORY:
No modifications
*/
discountElement = document.getElementById("discountMessage")
discountElement.innerHTML = "In honor of Black History Month, all orders in February will receive a 10% discount.";
sentence = document.getElementById("sentenceConfirm")
ancestorEventDiv = document.getElementById("ancestorEvent")

function calculateTotal(applyDiscount) {
    return function() {
        var checkboxes = document.getElementsByName("sushi");
        var totalCost = 0;

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                totalCost += parseFloat(checkboxes[i].value);
            }
        }
        if (applyDiscount) {
            totalCost *= 0.9; 
        }

        var totalCostSpan = document.getElementById("totalCost");
        totalCostSpan.textContent = "$" + totalCost.toFixed(2);
    };
}
var totalButton = document.getElementById("total");
// Requirement 4. Use an event listener with parameters to produce visible results on the page when the user clicks a page element.
totalButton.addEventListener("click", calculateTotal(true));

//Requirement 3. Use an event listener with parameters to produce visible results on the page when the user clicks a page element.
function changeSentence() {
    sentence.textContent = "Congratulations on your yummy order! It will be ready in 15-20 minutes. Further details are sent to the email you provided.";
}

sentence.addEventListener("click", function() {
    changeSentence(); // No parameters passed here
});


//Requirement 5. Demonstrate Event Bubbling with nested HTML elements that have events bound to them.
document.addEventListener("DOMContentLoaded", function() {
    const parentDiv = document.getElementById("parentDiv");

    parentDiv.addEventListener("click", function(event) {
        if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
            const sushiValue = event.target.value;
            const checkboxLabel = event.target.nextElementSibling.textContent;
            const checkboxId = event.target.id;
            alert(`Checkbox clicked: ${checkboxLabel}\nSushi Roll Value: $${sushiValue}`);
        }

        // Display event bubbling 
        alert(`Event Bubbling: Clicked on ${event.target.tagName}`);
    });

    // Separate event listener from requirement 5 for displaying clicked element's ID
    const eventBubblingMessage = document.getElementById("eventBubblingMessage");
    parentDiv.addEventListener("click", function(event) {
        const clickedElementId = event.target.id;
        //Requirement 6: Use the Event Object to create an event that responds by displaying the ID or class attribute of the page element that was clicked.
        alert(`If the clicked element has an ID it will be shown here(best demonstrated on checkboxes) : ${clickedElementId}`);
        event.stopPropagation();
        
    });
    
    //Requirment 7. Use a method to stop the Event Bubbling
    // Event listener for an ancestor element of parentDiv - this is not triggered due to event.stopPropagation()
    document.addEventListener("click", function(event) {
        ancestorEventDiv.innerHTML = "Hi, you must have clicked outside the box below ";
    });
});



//Requirement 8. In JavaScript, create two focus/blur or focusin/focusout events that produce visible results on the page.
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");

fullNameInput.addEventListener("focus", function() {
    fullNameInput.classList.add("focused-element"); 
});

fullNameInput.addEventListener("blur", function() {
    fullNameInput.classList.add("blurred-element");
});

emailInput.addEventListener("focus", function() {
    emailInput.classList.add("focused-element"); 
});

emailInput.addEventListener("blur", function() {
    emailInput.classList.add("blurred-element"); 
});







//Requirement 10. In JavaScript, create at least three different mouse events that produce visible results on the page.
//Changes background color
document.addEventListener("keydown", function(event) {
    document.body.style.backgroundColor = "pink";
});

//Informs user of first key they pressed that would result in character on page
let firstKeyPressed = false;
document.addEventListener("keypress", function(event) {
    if (!firstKeyPressed) {
        const firstKeyElement = document.getElementById("firstKey");
        const pressedKey = event.key;
        firstKeyElement.textContent = `The first character key you pressed was: ${pressedKey}`;
        firstKeyPressed = true;
    }
});


// Requirement 10. In JavaScript, create at least three different mouse events that produce visible results on the page.
// 1. Changes background color of checkboxes on mouseover
document.addEventListener("mouseover", function(event) {
    if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        event.target.style.backgroundColor = "red";
    }
});

// 2. Resets background color of checkboxes on mouseout
document.addEventListener("mouseout", function(event) {
    if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        event.target.style.backgroundColor = ""; 
    }
});

//3. Discount Message about black history month turns red when you move the mouse around it 
document.addEventListener("DOMContentLoaded", function() {
    const discountMessage = document.getElementById("discountMessage");

    discountMessage.addEventListener("mousemove", function(event) {
        event.target.style.color = "red";
    });

    discountMessage.addEventListener("mouseout", function(event) {
        event.target.style.color = ""; 
    });
});


//11. In JavaScript, create two different form events that produce visible results on the page.
document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");

    // Input event for the email input field
    emailInput.addEventListener("input", function(event) {
        const email = emailInput.value;
        alert("Email changed to: " + email);
    });


    // Change event for the full name input
    fullNameInput.addEventListener("change", function(event) {
        alert("Full name changed to: " + fullNameInput.value);
    });
});

//12. Use a mutation 
document.addEventListener("DOMContentLoaded", function() {
    const discountMessage = document.getElementById("discountMessage");

    const observer = new MutationObserver(function(mutationsList, observer) {
        mutationsList.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.target === discountMessage) {
                discountMessage.textContent = "Thanks for shopping with us(mutation observed)";
            }
        });
    });

    // Start observing the target node (discountMessage) for mutations
    observer.observe(discountMessage, { childList: true, subtree: true });

    // Example function to change the content of discountMessage (for demonstration purposes)
    function changeDiscountMessageContent() {
        discountMessage.textContent = "Take Advantage of Such A Great Discount!";
    }

    setTimeout(changeDiscountMessageContent, 1000);
});

