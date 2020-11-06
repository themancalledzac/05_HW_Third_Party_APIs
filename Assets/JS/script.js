var currentDay = moment().format('dddd, MMMM Do'); 
$("#currentDay").text(currentDay);

console.log(currentDay);

// Get the current hour of the day using moment.js
var currentMoment = moment();
var data = currentMoment.format( 'kk' );

// Option 1
var currentHourOne = parseInt(currentMoment.format("H"));

// Option 2
var currentHourTwo = currentMoment.hour();

console.log( currentHourOne, currentHourTwo );

// FOR Loop over the hours of the day from (9am to 5pm) i = 9 to i <= 17

//      var i=9;
//      Element ID = "#hour-" + i;
//      Currently checking 9am < current hour
//      9am is in the past

//      Option A - Select matching element - $( Element ID ).css( "backgr")

//      Option B - Select matching element - $( Element ID ).css( "backgr")

// Add a click event ON A PARENT ELEMENT that can listen
// to my save button clicks


// WHEN the user clicks a save button
// THEN I need to save the associated text for the associated hour.description
//  GET the current hour from the 'event.target' (The clicked button)

//  > var theClickedHour = $(event.target).data("hour");

//  > var value = $(event.target).prev().val()

//  > localStorage.setItem( "hour-"+ theClickedHour, value );

moment();