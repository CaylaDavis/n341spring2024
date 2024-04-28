/*
TITLE: Course Project - Final Submission 
AUTHOR: Macayla C. Davis (MCD)
CREATE DATE: 27 April 2024
PURPOSE: To publish a web page that meets the requirements of the final and showcases the skills I've gained in the course.The JavaScript selections and event registrations from the Midterm Submission should be converted to jQuery. 
Theme: Menu & order form for a sushi restaurant.  
LAST MODIFIED ON: 27 April 2024
LAST MODIFIED BY: Macayla C. Davis (MCD)
MODIFICATION HISTORY:
No modifications 
*/

$(document).ready(function() {

    //Requirement 17:Create and use an object that has properties and methods.
    var SushiProgram = {
        greetCustomer: function(name) {
            var formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
            //Requirement 16: Use a Date Object method.
            var currentDate = new Date().toDateString();
            var greetingMessage = "Welcome to our sushi restaurant, " + formattedName + "! Today is " + currentDate + ".";
            //Requirement 11: A jQuery method to change a page element's content.
            $('#greetingMessage').html(greetingMessage);
        },
        
        //Requirement 4: Create and use an array.
        rolls: ['Dragon Roll', 'Rainbow Roll', 'Playboy Roll', 'Crunchy Roll', 'Hoosier Roll'],
        prices: ['10', '13', '14', '12', '12'], 

    
        outputSushiMenu: function() {
            var menuOutput = "<ul>";
            //Requirement 18: Use the keyword this in at least one of your object's methods.
            for (var i = 0; i < this.rolls.length; i++) {

                menuOutput += "<li>" + this.rolls[i] + ": $" + (this.prices[i]) + "</li>";
            }
            menuOutput += "</ul>";
            $('#sushiOutput').html(menuOutput);
        },
        
        calculateTotal: function() {
            return function() {
                var totalCost = 0;
                $("input[name='sushi']:checked").each(function() {
                    //Requirement 8: Use parseInt() to convert a string to an integer.
                    totalCost += parseInt($(this).val()); 
                });
                //Requirement 15.Use a Math Object method.
                $('#totalCost').text("$" + totalCost.toFixed(2));
            };
        },
        
        updateLocationMessage: function() {
            var locationMessage = "We're located on 100 Finaldue Road!";
            $('#locationMessage').text(locationMessage).addClass('newClass');
        },
        
        //Requirement 5: Demonstrate the use of an if/else construct or a switch/case construct.
        //Requirement 6:Demonstrate the use of comparison operators.
        //Requirement 7: Demonstrate the use of logical operators.
        calculateDiscount: function(totalCost) { 
            var discount;
            var discountMessage;
            if(totalCost > 100 || totalCost < 20) { 
                discount = 0;
                discountMessage = "Sorry, you don't qualify for a discount at this time.";
            }
            else if (totalCost >= 75 && totalCost <= 100) {
                discount = 15;
                discountMessage = "Congratulations! You qualify for a 15% discount on your next purchase. Savings will be sent to your email!";
            } else if (totalCost >= 30) {
                discount = 10;
                discountMessage = "Congratulations! You qualify for a 10% discount on your next purchase. Savings will be sent to your email!";
            } else if (totalCost >= 20) {
                discount = 5;
                discountMessage = "Congratulations! You qualify for a 5% discount on your next purchase. Savings will be sent to your email!";
            } 
        
            //Requirement 13:Use a jQuery animation method
            $('#discountMessage')
            .text(discountMessage)
            .hide() 
            .fadeIn('slow') 
            .animate({
                fontSize: '+=10px' 
            }, 'slow'); 
            return { discount: discount, message: discountMessage };
        }
    };

    // Requirement 20: Use the Event Object in a jQuery method or an object method.
    $('input[name="sushi"]').on('change', function(event) {
        var clickedCheckbox = $(event.target);
        var connectedElement = clickedCheckbox.parent().find('label');
        connectedElement.toggleClass('red-text');
    });

    //Requirement 9: Use jQuery to remove or hide a page element.
    //Requirement 10:Use jQuery to add a class to an existing page element.
    $('#locationMessage').on('click', function() {
        $(this).remove();
    });
    
    $('#submitName').click(function() {
        var name = $('#nameInput').val();
        SushiProgram.greetCustomer(name);
    });
    
    SushiProgram.outputSushiMenu();
    SushiProgram.greetCustomer('Customer');
    
    //Requirement 12: Use a jQuery event to produce visible results on the page when the user triggers the event.
    $('#total').click(function() {
        SushiProgram.calculateTotal(false); 
    
        var totalCost = 0;
        //Requirement 19:Use the jQuery .each() method to process a jQuery selection that contains multiple page elements.
        $("input[name='sushi']:checked").each(function() {
            totalCost += parseInt($(this).val()); // Convert to integer
        });
        //Requirement 15: Use a Math Object method.
        $('#totalCost').text("$" + totalCost.toFixed(2));
    
        var discountInfo = SushiProgram.calculateDiscount(totalCost);
        $('#discountMessage').text(discountInfo.message);
    });
    
    //Requirement 14: Demonstrate jQuery chaining.
    $('h1')
    .text('Final Soy Mates')
    .css('color', 'hotpink')
    .addClass('highlight');

    $('#orderForm').submit(function(e) {
        e.preventDefault(); 
       
        var name = $('#name').val();
        var email = $('#email').val();
        var address = $('#address').val();
        var selectedCountry = $('#country').val(); 
        var phone = $('#phone').val();
        var payment = $('input[name="payment"]:checked').val();
        var specialRequest = $('#special-request').val();

        //Requirement 22: Create a labelled output area for form output. Form field values must display to the output area with labels on submit.
        var outputHtml = '<h2>Order Details:</h2>';
        outputHtml += '<strong>Name:</strong> ' + name + '<br>';
        outputHtml += '<strong>Email:</strong> ' + email + '<br>';
        outputHtml += '<strong>Address:</strong> ' + address + '<br>';
        outputHtml += '<strong>Country:</strong> ' + selectedCountry + '<br>'; 
        outputHtml += '<strong>Phone:</strong> ' + phone + '<br>';
        outputHtml += '<strong>Payment Method:</strong> ' + payment + '<br>';
        outputHtml += '<strong>Special Request:</strong> ' + specialRequest + '<br>';
        $('#outputArea').html(outputHtml);
    });

    //Requirment 21: Create a form that is enhanced using an API. The form should contain at least five different types of fields. 
    $.ajax({
        url: 'https://restcountries.com/v3.1/all',
        type: 'GET',
        success: function(data) {
            data.forEach(function(country) {
                $('#country').append('<option value="' + country.name.common + '">' + country.name.common + '</option>');
            });
        },
        error: function() {
            $('#country').append('<option value="">Error fetching data</option>');
        }
    });
    //Requirement 23:Use jQuery to validate at least one input field with a regular expression. Also use the placeholder attribute in the same field to show an example of valid input for the user.
    $(function() {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        $('#email').on('input', function() {
            var email = $(this).val();
            if (!emailRegex.test(email)) {
                $(this).css('border-color', 'orange');
                $(this).addClass('invalid-email');
                $(this).attr('placeholder', 'Invalid email format. Enter email like example@example.com');
            } else {
                $(this).css('border-color', '');
                $(this).attr('placeholder', 'Enter your email address');
            }
    });
        //Requirement 24: Use at least one form method listed in Chapter 13 of the text to add functionality to your form [.focus() .blur() .select() .click()].
        //Requirement 12: Use at least one form method listed in Chapter 13 of the text to add functionality to your form [.focus() .blur() .select() .click()].
    $(function() {
        $('#phone').focus(function() {
             $(this).css('background-color', 'pink');
        });
        
        $('#phone').blur(function() {
            $(this).css('background-color', ''); 
        });
    //Requirement 25: Use the jQuery .on() method with at least one form event listed in Chapter 13 of the text to add functionality to your form [ blur focus change input keydown keypress].
    $(function() {
        $('#name').on('focus', function() {
            $(this).css('background-color', 'pink');
        });
            
        $('#name').on('blur', function() {
            $(this).css('background-color', '');
        });
    });

    //Requirment 26: Submit button should be disabled until at least one form field is filled.
    $('#orderForm input[type="submit"]').prop('disabled', true);

    $('#orderForm input[type="text"], #orderForm input[type="email"], #orderForm input[type="tel"], #orderForm textarea').on('input', function() {
        var isAnyFieldFilled = $('#orderForm input[type="text"], #orderForm input[type="email"], #orderForm input[type="tel"], #orderForm textarea').filter(function() {
            return $.trim($(this).val()) !== '';
        }).length > 0;

        $('#orderForm input[type="submit"]').prop('disabled', !isAnyFieldFilled);
    });
    });
    
    SushiProgram.updateLocationMessage();
    });
});

