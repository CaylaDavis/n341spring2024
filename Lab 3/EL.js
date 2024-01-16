function calculateTotal() {
var checkboxes = document.getElementsByName("sushi");
var totalCost = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            totalCost += parseFloat(checkboxes[i].value);
        }
    }

    var totalCostSpan = document.getElementById("totalCost");
    totalCostSpan.textContent = "$" + totalCost.toFixed(2);
}
// Requirement 3. Use an event listener without parameters to produce visible results on the page when the user clicks a page element.
var total =  document.getElementById("total")
total.addEventListener("click", calculateTotal);




var sentence = document.getElementById("sentenceConfirm");

function underlineSentence() {
    sentence.classList.add("underlined");
}
underlineSentence();

//Requirement 4. Use an event listener with parameters to produce visible results on the page when the user clicks a page element.
function changeSentence(element, newSentence) {
    element.textContent = newSentence;
}
sentence.addEventListener("click", function() {
    changeSentence(sentence, "Congratulations on your yummy order! It will be ready in 15-20 minutes. Further details are sent to the email you provided.");
})


//Requirement 5. Demonstrate Event Bubbling with nested HTML elements that have events bound to them.
function fieldsetClickHandler() {
    alert("Click a checkbox!");
}

function checkboxClickHandler(event) {
    const checkboxLabel = event.target.nextElementSibling;
    alert(`Checkbox clicked: ${checkboxLabel.textContent}`);
}

const fieldset = document.querySelector("fieldset");
const checkboxes = document.querySelectorAll("input[type='checkbox']");

//Requirement 7.Use a method to stop the Event Bubbling
function stopBubbling(event) {
event.stopBubbling();
}

fieldset.addEventListener("click", function(event) {
    stopBubbling(event);
    fieldsetClickHandler();
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", checkboxClickHandler);
});

//Requirement 6. Use the Event Object to create an event that responds by displaying the ID or class attribute of the page element that was clicked.
function displayID(event) {
    const id = event.target.id;
    alert(`Clicked element ID: ${id}`);
}
document.addEventListener("click", displayID);


//Requirement 8. In JavaScript, create two focus/blur or focusin/focusout events that produce visible results on the page.
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");

fullNameInput.addEventListener("focus", function() {
    fullNameInput.classList.add("focused-element"); 
});

fullNameInput.addEventListener("blur", function() {
    fullNameInput.classList.remove("focused-element");
});

emailInput.addEventListener("focus", function() {
    emailInput.classList.add("focused-element"); 
});

emailInput.addEventListener("blur", function() {
    emailInput.classList.remove("focused-element"); 
});
