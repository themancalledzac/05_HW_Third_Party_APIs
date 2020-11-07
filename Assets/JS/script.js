// Curent date for Jumbotron header
var currentDay = moment().format('dddd, MMMM Do'); $("#currentDay").text(currentDay);
// Get the current hour of the day using moment.js
var currentMoment = moment();
var currentHour = parseInt(currentMoment.format("H"));

// // Option 2
// var currentHourTwo = currentMoment.hour();

console.log( currentHour );

// FOR Loop over the hours of the day from (9am to 5pm) i = 9 to i <= 17
for (let i = 9; i <= 17; i++) {
        //      var i=9;
        // var i = 9;
        //      ElementID = "#hour-" + i;
        //---------------DIV ID = '#hour-" + 1;"--------------------------------------------//
        //---------------DIV ID 
        //      Currently checking 9am < current hour

        //      9am is in the past
        //      Option A - Select matching element - $( ElementID ).css( "background-color")

            // make css selectors like, .is-past, .is-present, .is-future

        //      Option B - Select matching element - $( ElementID ).addClass( "is-past")
};


// Add a click event ON A PARENT ELEMENT that can listen
// to my save button clicks


// WHEN the user clicks a save button
// THEN I need to save the associated text for the associated hour.description
//  GET the current hour from the 'event.target' (The clicked button)

//  > var theClickedHour = $(event.target).data("hour");

//  > var value = $(event.target).prev().val()

//  > localStorage.setItem( "hour-"+ theClickedHour, value );



// for (let i = 9; i <= 17; i++) {
    // var time      
    
    // who knows that this means
    // let row = $(`
    //     <div id='time-slow-${i}' class='time-block row'>
    //     <span class='hour time-column col-1'>
    //         <span class='hour-display'>${currentMoment.format('hA')}</span>
    //     </span>
    //     </div>`)