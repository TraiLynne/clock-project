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
var timeEvent = document.getElementById("timeEvent");

//- picture variables
var imageSource;
var lolcat = document.getElementById("lolcat");

//- clock variables
var oneSecond = 1000;

//- Party Time Variables
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

//- Time Selector Variables
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var napTimeSelector = document.getElementById("napTimeSelector");

//---- Begin Functions

//- Update Clock Fucntion
var updateClock = function() {
    // IF/ELSE statement controls photo and message displayed
    if (time == partyTime) {
        messageText = "Let's Get this Party Started!";
        imageSource =
            "https://picjumbo.com/wp-content/uploads/huge-colorful-fireworks-pyrotechnics-against-black-night-sky_free_stock_photos_picjumbo_DSC08531-2210x1473.jpg";
    } else if (time == napTime) {
        messageText = "Let's get some sleep";
        imageSource =
            "https://images.unsplash.com/photo-1511732351157-1865efcb7b7b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3da59e3581daae239cc8ff12841d3150&auto=format&fit=crop&w=500&q=60";
    } else if (time == lunchTime) {
        messageText = "It's Lunch Time!!";
        imageSource =
            "https://images.unsplash.com/photo-1484344597163-9347ad5cb26d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16e282d7ec3c7fe04d041c2dde051ee2&auto=format&fit=crop&w=700&q=60";
    } else if (time == wakeupTime) {
        messageText = "Wake up and make it happen.";
        imageSource =
            "https://images.unsplash.com/photo-1514163161321-f4f7c2a90296?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a347f5e61f725aacf5bcfdfe0dfb4a18&auto=format&fit=crop&w=700&q=60";
    } else if (time < noon) {
        messageText = "Good Morning!";
        imageSource =
            "https://images.unsplash.com/photo-1415750465391-51ed29b1e610?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8260e2e6561f8ca328cb09635e6882c7&auto=format&fit=crop&w=700&q=60";
    } else if (time > evening) {
        messageText = "Good Evening!";
        imageSource =
            "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed56528096e22d264d70094f16c17f8a&auto=format&fit=crop&w=700&q=60";
    } else {
        messageText = "Good Day!";
        imageSource =
            "https://images.unsplash.com/photo-1472313420546-a46e561861d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b9938db0c15d765583fe0d27458a988&auto=format&fit=crop&w=700&q=60";
    }

    // Displays Time Event Message
    timeEvent.innerText = messageText;

    // Displays Time Event Picture
    lolcat.src = imageSource;

    // Displays the Current Time on the Web Page
    var showCurrentTime = function() {
        // display the string on the webpage
        var clock = document.getElementById("clock");
        var currentTime = new Date();

        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";

        // Set hours
        if (hours >= noon) {
            meridian = "PM";
        }
        if (hours > noon) {
            hours = hours - 12;
        }

        // Set Minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // Set Seconds
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // put together the string that displays the time
        var clockTime =
            hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

        clock.innerText = clockTime;
    };

    showCurrentTime();
};

//- updates clock every second
setInterval(updateClock, oneSecond);

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
var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};

//----Begin Event Listeners

//- controls button click function
partyTimeButton.addEventListener("click", partyEvent);

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

lunchTimeSelector.addEventListener("change", lunchEvent);

napTimeSelector.addEventListener("change", napEvent);