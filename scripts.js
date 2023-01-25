function countDownTimer() {
    // Get the current date and time
    var currentDate = new Date();
    
    // Set the target date and time to 2pm Pacific Time
    var targetDate = new Date();
    targetDate.setUTCHours(21); 
    targetDate.setUTCMinutes(0);
    targetDate.setUTCSeconds(0);
    
    // Calculate the remaining time
    var remainingTime = targetDate - currentDate;
    
    // Convert the remaining time to hours and seconds
    var hours = Math.floor(remainingTime / (1000 * 60 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60 * 60)) / 1000);
    
    // Display the remaining time in a div
    var timerDiv = document.getElementById("timer");
    timerDiv.innerHTML = "Time remaining: " + hours + " hours and " + seconds + " seconds";
  }