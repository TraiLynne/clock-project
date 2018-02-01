//---- Variables

//- Basic Variables
var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

//- text variables
var messageText;
var timeEvent = document.getElementById('timeEvent');

//- picture variables
var imageSource;
var lolcat = document.getElementById('lolcat')

//- clock variables
var oneSecond = 1000;

//- Party Time Variables
var partyTimeButton = document.getElementById('partyTimeButton');
var isPartyTime = false;

//- Time Selector Variables
var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');

var lunchTimeSelector = document.getElementById('lunchTimeSelector');

var napTimeSelector = document.getElementById('napTimeSelector');




//---- Begin Functions


//- Update Clock Fucntion
var updateClock = function(){
  // IF/ELSE statement controls photo and message displayed
  if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
    imageSource = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg'
  } else if (time == napTime) {
    messageText = "IZ NAP TIME...";
    imageSource = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg'
  } else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
    imageSource = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg'
  } else if (time == wakeupTime) {
    messageText = "IZ TIME TO GETTUP.";
    imageSource = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg'
  } else if (time < noon) {
    messageText = "Good morning!";
    imageSource = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg'
  } else if (time > evening) {
    messageText = "Good Evening!";
    imageSource = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg'
  } else {
    messageText = "Good afternoon!";
    imageSource = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg';
  }

  // Displays Time Event Message
  timeEvent.innerText = messageText;

  // Displays Time Event Picture
  lolcat.src = imageSource;

  // Displays the Current Time on the Web Page
  var showCurrentTime = function(){
    // display the string on the webpage
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon){
      meridian = "PM";
    } if (hours > noon) {
      hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10){
      minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10){
      seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
  };

  showCurrentTime();
}

//- updates clock every second
setInterval( updateClock, oneSecond );

//- Changes Button upon Pressing
var partyEvent = function() {
  if (isPartyTime === false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "Party Over";
    partyTimeButton.style.backgroundColor = "#0A8DAB";
  } else {
    isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "PARTY TIME!";
    partyTimeButton.style.backgroundColor = "#222";
   }
};


//- Time Change Event Functions
var wakeUpEvent = function(){
  wakeupTime = wakeUpTimeSelector.value;
}

var lunchEvent = function(){
  lunchTime = lunchTimeSelector.value;
}

var napEvent = function(){
  napTime = napTimeSelector.value;
}




//----Begin Event Listeners

//- controls button click function
partyTimeButton.addEventListener('click', partyEvent);

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

lunchTimeSelector.addEventListener('change', lunchEvent);

napTimeSelector.addEventListener('change', napEvent);
