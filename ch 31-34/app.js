//Task#1
//var dat = new Date();
//document.write(dat)

//Task#2
//var dat = new Date();
//var arr = ["January", "Febuary", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"];
//var month = dat.getMonth();
//document.write("Current Month: " + arr[month])

//Task#3
//var dat = new Date();
//var arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//var day = dat.getDay();
//document.write("Today is " + arr[day])

//Task#4
//var dat = new Date();
//var day = dat.getDay();
//if (day === 0 || day === 6) {
//alert("It's a Fun day")
//}

//Task#5
//var dat = new Date();
//var day = dat.getDate();
//if (day < 16) {
//alert("First Fifteen days of the month")
//}
//else{
//alert("Last days of the month")
//}

//Task#6
//var dat = new Date();
//var tim = dat.getTime();
//var minu = tim / (1000 * 60 * 60);
//document.write("Current Date: " + dat)
//document.write("<br>Elapsed milliseconds since January 1, 1970: " + tim)
//document.write("<br>Elapsed minutes since January 1, 1970: " + minu)

//Task#7
//var dat = new Date();
//var hour = dat.getHours();
//if (hour >= 0 && hour <= 12) {
//alert("It's AM")
//}
//else {
//alert("It's PM")
//}

//Task#8
//var laterDate = new Date("May 31, 2020");
//document.write(laterDate)

//Task#9
//var dat = new Date();
//var laterDate = new Date("April 25, 2020");
//var msdat = dat.getTime();
//var mslater = laterDate.getTime();
//var msdiff = msdat - mslater;
//var ddiff = msdiff / (1000 * 60 * 60 *24);
//alert(ddiff + " days have passed since 1st Ramadan, 2020")

//Task#10
//var dat = new Date();
//var beg = new Date("January 1, 2020");
//var msdat = dat.getTime();
//var msbeg = beg.getTime();
//var msdiff = msdat - msbeg;
//var sdiff = msdiff / (1000 * 60);
//document.write("From present time " + dat + "<br>")
//document.write(sdiff + " seconds had passed since beginning of 2020")

//Task#11
//var dat = new Date();
//document.write("Current Date : " + dat)
//var hour = dat.getHours() - 1;
//dat.setHours(hour);
//document.write("<br>1 hour ago, it was " + dat) 

//Task#12
//var dat = new Date();
//document.write("Current Date : " + dat)
//var year = dat.getFullYear() - 100;
//dat.setFullYear(year);
//document.write("<br>100 years back, it was " + dat) 

//Task#13
//var dat = new Date();
//var age = prompt("Enter your age");
//var year = dat.getFullYear() - age;
//document.write("Your age is " + age + "<br> Your birth year is " + year) 

//Task#14
//var name = prompt("Enter your Name");
//var dat = new Date();
//var arr = ["January", "Febuary", "March", "April", "May", "June",
//"July", "August", "September", "October", "November", "December"];
//var month = dat.getMonth();
//var units = 410;
//var charges = 16;
//var tBeforeDue = units * charges;
//var tAfterDue = tBeforeDue + 350;
//document.write("<h1>K-Electric Bill</h1><br><br>")
//document.write("<br>Customer Name: " + name + "<br>Month: " + arr[month])
//document.write("<br>Number of units: " + units + "<br>Charges per unit: " + charges)
//document.write("<br><br>Net Amount Payable (within Due Date): " + tBeforeDue + "<br>Late payment surcharge: 350")
//document.write("<br>Gross Amount Payable (After Due Date): " + tAfterDue)