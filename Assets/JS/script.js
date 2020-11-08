//-----------------------------------------GLOBAL VARIABLES--------------------------------------//
// Curent date for Jumbotron header

// Get the current hour of the day using moment.js
var currentMoment = moment();
// var currentDay = moment().format('dddd, MMMM Do'); $("#currentDay").text(currentDay);
    // ------------------ below code is cleaner--------------------------------------------------//
$("#currentDay").text(currentMoment.format('dddd, MMMM Do'));
var currentHour = parseInt(currentMoment.format("H"));
console.log( currentHour );

// // Option 2: var currentHourTwo = currentMoment.hour();---------------------------------------//


// FOR Loop over the hours of the day from (9am to 5pm) i = 9 to i <= 17 ------------------------//
for (let i = 9; i <= 17; i++) {
        //---------------DIV ID = '#hour-" + 1;"-------------------------------------------------//
    
    var elementId = $("#hour-" + i);
    $(elementId).attr('data-key', i);
        //---------------DIV ID 
    if (i < currentHour) {
        $(elementId).addClass("past");

    } if (i > currentHour) {
        $(elementId).addClass("future");
    } 
    if (i === currentHour) {
        $(elementId).addClass("present");
    }
        //      Option A - Select matching element - $( ElementID ).css( "background-color")
        //      Option B - Select matching element - $( ElementID ).addClass( "is-past")
        console.log(elementId);
    };


// event listener on button
// pull out value of the SIBLING textarea jquery .val
// setItem to loccal storage to the data-key from that div, with text as value

// when page is LOADED (loop) pull data from the 





// Add a click event ON A PARENT ELEMENT that can listen
// to my save button clicks


// WHEN the user clicks a save button
// THEN I need to save the associated text for the associated hour.description
//  GET the current hour from the 'event.target' (The clicked button)

//  > var theClickedHour = $(event.target).data("hour");

//  > var value = $(event.target).prev().val()

//  > localStorage.setItem( "hour-"+ theClickedHour, value );
