//setting the minutes on  the timer and how fast the countdown will be
function clock() {
    var myTimer = setInterval(myClock, 1000);
    var count = 60;
// created countdown for timer with a times up message when timer hits 0
    function myClock() {
      document.getElementById("countdown").innerHTML = --count;
      if (count == 0) {
        clearInterval(myTimer);
        alert("Times Up!");
      }
    }
  }