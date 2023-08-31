var buttonEl = $('.saveBtn');
var textContainerEl = $('textarea');


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  // HINT: What does `this` reference in the click listener function? 
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
  // How might the id be useful when saving the description in local storage?
  buttonEl.click(function () { //assigns click function to all buttonEl
    textContainerEl.each(function () { //get all textarea elements, go through each one

      var value = $(this).val(); //get the value of this, textarea
      var name = $(this).parent().attr('id'); //this targets the parent of textContainerEl, which is the div id hour-x
      console.log(value) //console logs the value
      localStorage.setItem(name, value); //this stores the hour-x name and corresponding value

    }
    )
  })
  //yields each text from local storage
  textContainerEl.each(function () {
    var value = localStorage.getItem(name);
    var name = $(this).parent().attr('id');

    $(this).val(value)

  })




  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function currentColorDisplay() {
    for (var i = 0; i < textContainerEl.length; i++) {
      //set currentHour = div class for each textarea
      
      //if the current id < current hour (past)
      //then display the hour-x id as GRAY

      //if the hour-x id is === current hour (current)
      //then display the hour-x id as RED

      //if the current id is > current hour (future)
      //then display the hour-x id as GREEN

    }
  }


    




// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
const currentDate = dayjs();
$('#currentDay').text(currentDate.format('dddd, MMMM D YYYY'));
});