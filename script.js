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
  
    //$('.saveBtn').click(function() { //assigns a click event function to all elements with .saveBtn class
    buttonEl.click(function() {
    //$('textarea').each(function() { //get all textarea elements, go through each one
    textContainerEl.each(function() {
    var value = $(this).val(); //this means, the textarea in the function. We are getting the value of it and storing it into the value variable.
    var name = $(this).attr('hour-9'); //In the example, name should be the key that is stored in localStorage. You'll need to figure what key values you'll use to get and set the textarea values. You will need to update the right side of the = to get what you want. .attr('') targets an attribute on the element (in this case textarea) and grabs the value of that attribute you put in there.
    
    console.log(value) //console logs the value
    localStorage[name] = value; //this stores the key and value into local storage
    //let savedText = document.createElement('input');
    //document.textContainerEl.appendChild(savedText);   
    
})})


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  const currentDate = dayjs();
  $('#currentDay').text(currentDate.format('dddd, MMMM D YYYY'));
});