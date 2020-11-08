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


// local storage
// for (let notesIndex = 9; notesIndex <=17; notesIndex++) {
//     let schedule = localStorage.getItem('hour-' + notesIndex);
//     $('#hour${notesIndex}').text(schedule);
//     if ($('#hours{notesIndex}').text() === null) {
//         $('#hour${notesIndex}').text().empty();
//     }
// };

// event listener on button PARENT ELEMENT '.Container'
var btnContainerEl = $('.container');
    btnContainerEl.on('click', '.saveBtn', saveToStorage);
    
    
function saveToStorage(event) {

    event.preventDefault();

        // pull out value of the SIBLING textarea jquery .val

        // setItem to local storage to the data-key from that div, with text as value

        // when page is LOADED (loop) pull data from the data-keys?
        
        // THEN I need to save the associated text for the associated hour.description
        //  GET the current hour from the 'event.target' (The clicked button)
        
    let theClickedHour = $(this).parent('div').children('textarea').data('hour');
        console.log(theClickedHour);
        
        //  > var value = $(event.target).prev().val()
    let value = $(this).parent('div').children('textarea').val();
        
        //  > localStorage.setItem( "hour-"+ theClickedHour, value );
    localStorage.setItem('hour: ' + theClickedHour, value);
    console.log(localStorage);
};

