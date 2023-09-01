var buttonEl = $('.saveBtn');
var textContainerEl = $('textarea');
var allTextBox = $('.time-block');


$(function () {
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


  allTextBox.each(function () { //takes each of the divs
    var timeValue = parseItn($(this).attr('id').split("-",[])); //locate each id and split
    
    console.log(timeValue);
    currentHour = (dayjs().format("HH"));

    for (var i = 0; i < timeValue.length; i++) {
      if (timeValue[0] === currentHour) {
        allTextBox.addClass("present");
      }
      if (timeValue[0] < currentHour) {
        allTextBox.addClass("past");
      }
      if (timeValue[0] > currentHour) {
        allTextBox.addClass("future");
      }

    }
  })
})


var currentDate = dayjs();
$('#currentDay').text(currentDate.format('dddd, MMMM D YYYY'));
