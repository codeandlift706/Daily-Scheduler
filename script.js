var buttonEl = $('.saveBtn');
var textContainerEl = $('textarea');
var allTextBox = $('.time-block');

$(function () {
  buttonEl.click(function () { //assigns click function to all buttonEl
    console.log("Hello");
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
    var name = $(this).parent().attr('id');
    var value = localStorage.getItem(name);

    $(this).val(value);
  })

  //connect past, present, future
  allTextBox.each(function () { //takes each of the divs
    var timeValue = $(this).attr('id').split("-")[1]; //locate each id and split

    console.log(timeValue);
    console.log(typeof timeValue);
    currentHour = (dayjs().format("HH"));
    console.log(currentHour);
    console.log(typeof currentHour);

      if (timeValue == currentHour) {
        $(this).addClass("present");
      }
      else if (timeValue < currentHour) {
        $(this).addClass("past");
      }
      else if (timeValue > currentHour) {
        $(this).addClass("future");
      }
  })
})

var currentDate = dayjs();
$('#currentDay').text(currentDate.format('dddd, MMMM D YYYY'));
