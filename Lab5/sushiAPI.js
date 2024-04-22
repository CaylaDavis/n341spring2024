/*
TITLE: APIs and Form Enhancement
AUTHOR: Macayla C. Davis (MCD)
CREATE DATE: 14 April 2024
PURPOSE: Explore APIs and Form Enhancement to create professional interactive web pages
Theme: Menu & order form for a sushi restaurant. 
LAST MODIFIED ON: 14 April 2024
LAST MODIFIED BY: Macayla C. Davis (MCD)
MODIFICATION HISTORY:
No modifications 
*/
//Requirement 4: Use either an Accordion WidgetLinks to an external site. or a Tabs WidgetLinks to an external site. as a larger navigation scheme. It can be used for factual information or for form elements.
//Information within widget can be seen on HTML page 
$(function() {
    $("#accordion").accordion({
        collapsible: true, 
        active: false 
    });

    var sushiItems = [
        "California Roll",
        "Crab Rangoon Roll",
        "OMG Roll",
        "Spicy Tuna Roll",
        "Dragon Roll",
        "Rainbow Roll",
        "Philadelphia Roll",
        "Tempura Roll"
    ];

    //Requirement 5: Use at least one of the following jQuery UI Widgets(*Used autocomplete widget)
    $("#sushiSearch").autocomplete({
        source: sushiItems
    });

    //Requirement 9: When the user submits the form, all form data should echo to the output area with labels.This area should be blank until the user submits the form.
    //Requirement 10:Data can be extracted from the form using JavaScript value, checked or selected properties as appropriate or jQuery .val() method, :checked filter or :selected filter.
    $('#orderForm').submit(function(e) {
        e.preventDefault(); 
       
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var payment = $('input[name="payment"]:checked').val();
        var specialRequest = $('#special-request').val();
        
        var outputHtml = '<h2>Order Details:</h2>';
        outputHtml += '<strong>Name:</strong> ' + name + '<br>';
        outputHtml += '<strong>Email:</strong> ' + email + '<br>';
        outputHtml += '<strong>Phone:</strong> ' + phone + '<br>';
        outputHtml += '<strong>Payment Method:</strong> ' + payment + '<br>';
        outputHtml += '<strong>Special Request:</strong> ' + specialRequest + '<br>';
        
        $('#outputArea').html(outputHtml);
    });
    //Requirement 11: Use jQuery to validate at least one input field with a regular expression. Also use the placeholder attribute in the same field to show an example of valid input for the user.
    $(function() {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        $('#email').on('input', function() {
            var email = $(this).val();
            if (!emailRegex.test(email)) {
                $(this).css('border-color', 'red');
                $(this).addClass('invalid-email');
                $(this).attr('placeholder', 'Invalid email format. Enter email like example@example.com');
            } else {
                $(this).css('border-color', '');
                $(this).attr('placeholder', 'Enter your email address');
            }
        });
        //Requirement 12: Use at least one form method listed in Chapter 13 of the text to add functionality to your form [.focus() .blur() .select() .click()].
        $(function() {
            $('#name').focus(function() {
                $(this).css('background-color', 'orange');
            });
        
            $('#name').blur(function() {
                $(this).css('background-color', ''); 
            });
        //Requirement 13: Use the jQuery .on() method with at least one form event listed in Chapter 13 of the text to add functionality to your form [ blur focus change input keydown keypress].
        $(function() {

            $('#phone').on('focus', function() {
                $(this).css('background-color', 'orange');
            });
            
            $('#phone').on('blur', function() {
                $(this).css('background-color', '');
            });
        });
            
            
    });
        
        });
        
    });

    



