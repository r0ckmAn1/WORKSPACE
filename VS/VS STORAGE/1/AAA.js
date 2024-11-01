let userName = prompt("Enter Name")
console.log("Hi "+userName+"!")
//date
let today = new Date()
let year = today.getFullYear()
let month = today.getMonth()
let date = today.getDate()
let weekDay = today.getDay()
    //calculate week dayname
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//print current info
console.log("It is "+dayNames[weekDay]+', '+date+'-'+(month+1)+'-'+year+" Today")
//time
let time = today.getTime()
let hours = today.getHours()
let minutes = today.getMinutes()
let seconds = today.getSeconds()
console.log("Time "+hours+'-'+minutes+'-'+seconds)
//time left today
let xHours = (23-hours)
let xminutes = (59-minutes)
let Xseconds = (60-seconds)
console.log("Time left today "+xHours+'-'+xminutes+'-'+Xseconds)
//days till weekend(dTW)
switch (weekDay) {
    case 6:
      console.log("It's Saturday! Enjoy your weekend!");
      break;
    case 0:
      console.log("Sunday - Have a relaxing day!");
      break;
     case 1:
      console.log("Days till weekend 4");
      break;
      case 2:
      console.log("Days till weekend 3");
      break;
      case 3:
      console.log("Days till weekend 2");
      break;
      case 4:
      console.log("Days till weekend 1");
      break;
      case 5:
      console.log("Days till weekend 0");
      break;
  }
//greeting
if (hours < 12) {
    console.log("Good Morning");
    console.log('Have a great day')
} else if (hours < 17) {
    console.log("Good Afternoon");
    console.log('Have a great day')
} else {
    console.log("Good Evening");
}
updateTime()
setInterval(updateTime, 1000)