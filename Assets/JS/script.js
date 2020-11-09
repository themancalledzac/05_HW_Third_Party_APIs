//-----------------------------------------GLOBAL VARIABLES--------------------------------------//
// Curent date for Jumbotron header

// Get the current hour of the day using moment.js
var currentMoment = moment();
// var currentDay = moment().format('dddd, MMMM Do'); $("#currentDay").text(currentDay);
// ------------------ below code is cleaner------------------------------------------------------//
$("#currentDay").text(currentMoment.format('dddd, MMMM Do'));
var currentHour = parseInt(currentMoment.format("H"));
console.log( currentHour );

// // Option 2: var currentHourTwo = currentMoment.hour();---------------------------------------//


// FOR Loop over the hours of the day from (9am to 5pm) i = 9 to i <= 17 ------------------------//
for (let i = 9; i <= 17; i++) {
    //---------------DIV ID = '#hour-" + 1;"-----------------------------------------------------//
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
    console.log(elementId);
};


    // event listener on button PARENT ELEMENT '.Container'--------------------------------------//
var btnContainerEl = $('.container');
    btnContainerEl.on('click', '.saveBtn', saveToStorage);
    
    // function to save click to local storage --------------------------------------------------//
function saveToStorage(event) {

    event.preventDefault();

        // pull out value of the SIBLING textarea jquery .val

        // setItem to local storage to the data-key from that div, with text as value

        // when page is LOADED (loop) pull data from the data-keys?
        
        // THEN I need to save the associated text for the associated hour.description
        //  GET the current hour from the 'event.target' (The clicked button)
        
    let theClickedHour = $(this).parent('div').children('span').children('textarea').data('time');
        // console.log(theClickedHour);
        
        //  > var value = $(event.target).prev().val()
    let value = $(this).parent('div').children('span').children('textarea').val();
        
        //  > localStorage.setItem( "hour-"+ theClickedHour, value );
    localStorage.setItem('hour' + theClickedHour, value);
    console.log(localStorage);
};


// local storage retreval? -----------probably need a for loop-----------------------------------//

for (let ii = 9; ii <= 17; ii++) {
    let savedData = localStorage.getItem('hour' + ii);

    //textarea

    $(`#hour${ii}`).text(savedData)

    if ($(`#hour${ii}`).text() === null) {
        $(`#hour${ii}`).text().empty();
    }
    
    // textarea data-time(ii).text(localStorage.getItem('hour' + ii))
};

console.log(localStorage);