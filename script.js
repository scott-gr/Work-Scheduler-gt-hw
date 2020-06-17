$(document).ready(function () {
  //hours to fill left column
  var workHours = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '13:00 PM',
    '14:00 PM',
    '15:00 PM',
    '16:00 PM',
    '17:00 PM',
  ];

  //moment testing
  console.log(moment.duration(8, 'hours').hours());
  var nowHour = moment().format('HH[:00] A');
  console.log(nowHour);
  ///FUNCTIONS

  //generates rows for each work hour
  function makeRows() {
    for (var i = 0; i < workHours.length; i++) {
      var rowEl = $('<div>').addClass('row');
      var timeBlockEl = $('<div>').addClass('time-block');
      //hour column
      var hourCol = $('<div>').addClass('col-2 hour');
      //text area
      var descriptionEl = $('<textarea>').addClass('col-9 description');
      //save button
      var buttonColEl = $('<button>').addClass('col-1 saveBtn');
      var buttonIcon = $('<span>').addClass('glyphicon glyphicon-floppy-disk');

      // checks hour with current time using moment, colors row accordingly
      if (workHours[i] == nowHour) {
        descriptionEl.addClass('present');
      } else if (parseInt(workHours[i]) < parseInt(nowHour)) {
        descriptionEl.addClass('past');
      } else {
        descriptionEl.addClass('future');
      }
      //appends every html element into container
      rowEl.append(hourCol.text(workHours[i]));
      rowEl.append(descriptionEl);
      rowEl.append(buttonColEl);
      buttonColEl.append(buttonIcon);
      timeBlockEl.append(rowEl);
      //container with all row elements added above
      $('.container').append(timeBlockEl);

    }
  }
  //save button saves data to local storage
  $('saveBtn').on('click', function () {
    var saveText = '.description'.text;
  // set localstorage
    localStorage.setItem(saveText, text);

  // test if it works
    alert(localStorage.getItem(savetext));
  });
// call functions
  makeRows();
  storeNotes();
});

