function initClock() {
    var date = new Date();
    var dayName = getDayName(date.getDay());
    var monthName = getMonthName(date.getMonth());
    var dayNum = date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minutes = addLeadingZero(date.getMinutes());
    var seconds = addLeadingZero(date.getSeconds());
    var period = (hour >= 12) ? "PM" : "AM";
  
    document.getElementById("dayname").innerHTML = dayName;
    document.getElementById("month").innerHTML = monthName;
    document.getElementById("daynum").innerHTML = dayNum;
    document.getElementById("year").innerHTML = year;
    document.getElementById("hour").innerHTML = convertHour(hour);
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("period").innerHTML = period;
  
    setTimeout(initClock, 1000);
  }
  
  function getDayName(dayIndex) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
  }
  
  function getMonthName(monthIndex) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
  }
  
  function addLeadingZero(number) {
    return (number < 10) ? "0" + number : number;
  }
  
  function convertHour(hour) {
    return (hour > 12) ? hour - 12 : hour;
  }
  