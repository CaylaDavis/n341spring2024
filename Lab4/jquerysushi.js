/*
TITLE: jQuery
AUTHOR: Macayla C. Davis (MCD)
CREATE DATE: 31 March 2024
PURPOSE: To publish website displaying skills in jQuery 
Theme: Menu & order form for a sushi restaurant.  This assignment largely focuses on the menu's items/prices.
LAST MODIFIED ON: 31 March 2024
LAST MODIFIED BY: Macayla C. Davis (MCD)
MODIFICATION HISTORY:
No modifications 
*/
//Requirement 3: Encapsulate your code using a function to ensure that the DOM has loaded before your code runs.  
$(function() {
    
    var menuItems = $('.menu-item');
    //Requirement 5: Demonstrate a jQuery selection of multiple page elements by tag name or class name with a single jQuery selection
    //Requirement 8: Change formatting (color)
    menuItems.css('background-color', 'lightpink');

    var discountMessage = $('#discount-message');
    //Requirement 6: Demonstrate a jQuery selection of a single page element by ID. Consider converting a previous JavaScript getElementById() with jQuery.
    //Requirment 8: Changed content and formatting (altered font and content of message)
    discountMessage.html("<p><strong>New special offer:</strong> Buy one, get one free!</p>");
    
    var evenItems = $('.menu-item:even');
    // Requirment 7: Demonstrate a filtered jQuery selection by tag name or class name
    //Requirement 8: Altered formatting (Background color)
    evenItems.css('background-color', 'lightblue');

    //Requirement 9: Use the .each() method to loop through a jQuery selection of multiple page elements.  
    //Requirement 10: Use $(this) inside the .each() loop with a jQuery method to create visible results on the page.
    //Requirement 14: Add at least one element to the page using .before() .prepend() .append() or .after().
    $('.menu-item').each(function(index, element) {
        $(this).find('.menu-item-price').prepend("Price: ");
    });
    //Requirement 11: Use jQuery chaining to perform at least three methods on a single jQuery selection.
    //Requirment 13: Use the .text() method either change or retrieve page content.
    $('h1')
    .text('Soy Mates Sushi 2.0')
    .css('color', 'purple')
    .addClass('highlight');

    //Requirement 12: Use the .html() method either change or retrieve page content.
    //Requirement 16: Use the .css() method to either change or retrieve the color of a page element.
    $('#thanks-message')
    .html('<p>Thank you for visiting our site!</p>')
    .css('color', 'blue');


    //Requirement 15: Use two jQuery methods [ .attr() .removeAttr() .addClass() .removeClass() ] to change the attribute values of at least two different page elements.
    $('.menu-item:first .menu-item-title').attr('data-special', 'new-special');
    $('.menu-item:eq(0)').addClass('special-item').css('background-color', 'lightgreen');


    // Requirement 17: Use the .on() method to register at least three events using jQuery.
    $('#calculate-total').on('click', function() {
        // Alert message when the button is clicked
        alert('Total calculated!');
    });

    $(document).on('mouseover', '.discount-message', function() {
        // Change color and content of the discount message to red when mouse hovers over it 
        $(this).css('color', 'red').text('Mouse is over discount message!');
    });
    
    // Event 3: Double click event on the total cost span
    $('#total-cost').on('dblclick', function() {
        // Change text content when the total cost message(not the button) is double-clicked
        $(this).text('Double-clicked to change content');
    }); 

    //Requirement 18: Use the Event Object with a jQuery event registration to create an event that responds differently depending on which page element was clicked.
    $('.menu-item').on('click', function(event) {
        event.preventDefault();
        
        
        var menuItemTitle = $(this).find('.menu-item-title').text();
        if (menuItemTitle === 'California Roll') {
            alert('You clicked on California Roll!');
        } else if (menuItemTitle === 'Salmon Nigiri') {
            alert('You clicked on Salmon Nigiri!');
        } else {
            alert('You clicked on a menu item!');
        }
    });
    
    //Requirment 19: Use at least three jQuery Effects methods to enhance your page with transitions and movement.
    $('#open-message')
    .text('Coming To Doordash Soon!')
    .fadeIn(1000) 
    .delay(1000)  
    .slideUp(1000) 
    .delay(500)   
    .slideDown(1000) 
    .fadeOut(1000); 

    //Requirement 20: Use at least two jQuery methods to traverse the DOM to access a parent or sibling node of a previous selection. [ .find() .closest() .parent() .children() .next() .prev() ] Use jQuery methods to make changes to the selections.
    $('.menu-item-title').parent().css('border', '2px solid red');
    // Using .next() to traverse to the next sibling node of the menu item description
    $('.menu-item-description').next().css('font-weight', 'bold');

    //Requiurement 21: Create at least two jQuery selections that use form element selectors. [:button :checkbox :checked :disabled :focus :image :radio :selected :submit :text ] Use the selections to either make changes to the page elements or send their values to an output area on the page. Note: Your page must have a form to use form element selector
    function updateTotalCost() {
        var total = 0;
        // Use :checked selector to select checked checkboxes
        $('.menu-item-checkbox:checked').each(function() {
          total += parseFloat($(this).data('price'));
        });
        $('#total-cost').text('$' + total.toFixed(2));
      }


    var locationMessage = "Located at 101 West Street 46284 Indianapolis Indiana";
    $('#locationMessage').text(locationMessage);

    //Requirement 22: Use a jQuery method to remove an element from the page.
    $('#locationMessage').on('click', function() {
        $(this).remove();
    });
    //Requirement 23:Use a jQuery plugin to add functionality to your page. be sure to use something that creates a noticeable change to your page.
    $('.menu-item').click(function() {
        $(this).toggle('fold', 1000, function() {
            $(this).toggle('fold', 1000);
        });
    });
});