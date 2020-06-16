$(document).ready(function () {

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

  function makeRows() {
    for (var i = 0; i < workHours.length; i++) {
      var rowEl = $('<div>').addClass('row');
      var timeBlockEl = $('<div>').addClass('time-block');
      var hourCol = $('<div>').addClass('col-2 hour');
      var descriptionEl = $('<textarea>').addClass('col-9 description');
      var buttonColEl = $('<button>').addClass('col-1 saveBtn');

      if (workHours[i] == nowHour){
        descriptionEl.addClass('present')
      }
      else if (parseInt(workHours[i]) < parseInt(nowHour)) {
        descriptionEl.addClass('past');
      }
      else {
        descriptionEl.addClass('future');
      };
      rowEl.append(hourCol.text(workHours[i]));
      rowEl.append(descriptionEl);
      rowEl.append(buttonColEl);
      timeBlockEl.append(rowEl);
      //container with all row elements added above 
      $('.container').append(timeBlockEl);

    
    };
  };

  makeRows();
  
});


//function saveNote
//when save button is clicked, save contents and hour to localstorage
// if there is already a note in local storage for that hour, update it or clear it before saving

//function colorize
//if hour = currenttime, description is red
//if past, description grey
//if future, description green
// //for loop or does if, else with Moment do enough?

// //EVENT LISTENERS
// $('saveBtn').on('click', function () {
//   // function to save text area to localstorage
// });
