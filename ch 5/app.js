//Task#1
//var a = 2;
//var b = 3;
//var c = a + b;
//document.write(c)

//Task#2
//var a = 2;
//var b = 3;
//var c = a - b;
//var d = a*b;
//var e = a%b;
//document.write(c + "<br>" + d + "<br>" + e)

//Task#3
//var num;
//document.write("Value after variable declaration is: " + num)
//num = 5;
//document.write("<br>Initial Value is : " + num)
//num = ++num;
//document.write("<br>Value after increment is : " + num)
//num = num + 7;
//document.write("<br>Value after addition is : " + num)
//num = --num;
//document.write("<br>Value after decrement is : " + num)
//num = num % 3;
//document.write("<br>The remainder is : " + num)

//Task#4
//var price = 600;
//var ticket = prompt("Enter no. of tickets")
//var total = price*ticket;
//document.write("Total cost to buy " + ticket + " tickets to a movie is " + total + "PKR")

//Task#5
//var num = prompt("Enter a number")
//for(var a = 1; a <= 10; a++){
//document.write(num + "x" + a + "=" + num*a + "<br>")
//}

//Task#6
//var c = prompt("Enter temperature in celcius")
//var f = ((c * 9/5) + 32);
//document.write(c + "<sup>o</sup>C is " + f + "<sup>o</sup>F")
//f = prompt("Enter temperature in farenheit")
//c = (f - 32)*5/9;
//document.write("<br>" + f + "<sup>o</sup>F is " + c + "<sup>o</sup>C")

//Task#7
//var pr1 = 650;
//var pr2 = 100;
//var q1 = prompt("Enter quantity of item 1")
//var q2 = prompt("Enter quantity of item 2")
//var sh = 100;
//total = (pr1*q1 + pr2*q2) + sh;
//document.write("Price of item 1 is " + pr1 + "<br>Quantity of item 1 is " + q1)
//document.write("<br>Price of item 2 is " + pr2 + "<br>Quantity of item 2 is " + q2)
//document.write("<br>Shipping Charges " + sh)
//document.write("<br>Total cost of your order is " + total)

//Task#8
//var tMarks =prompt("Enter Total Marks");
//var oMarks = prompt("Enter Obtained Marks")
//var per = oMarks/tMarks * 100;
//document.write("Total Marks: " + tMarks + "<br>Marks obtained: " + oMarks + "<br>Percentage : " + per + "%")

//Task#9
//var usd = 10;
//var sr = 25;
//var pkr = usd*104.8 + sr*28;
//document.write("<h2>Currency in PKR</h2>" + "<br><br>Total Currency in PKR: " + pkr)

//Task#10
//var num = 3;
//var num = ((num + 5)*10)/2;
//document.write(num)

//Task#11
//var currentYear = 2020;
//var birthYear = prompt("Enter your birth year");
//var age = currentYear - birthYear;
//document.write("<h1>Age Calculator</h1>" + "<br><br>Current Year: " + currentYear + "<br>Birth Year: "+ birthYear)
//document.write("<br>Your age is: " + age)

//Task#12
//var r = prompt("Enter the radius of circle");
//var c = 2*Math.PI*r;
//var a = Math.PI * Math.pow(r, 2);
//document.write("<h1>The Geometrizer</h1>" + "<br><br>Radius of a circle: " + r + "<br>The Circumference is: " + c)
//document.write("<br>The area is: " + a)

//Task#13
var snack = prompt("Enter your favorite snack");
var age = prompt("Enter your age");
var maxAge = 65;
var amount = prompt("Enter amount of snack you eat a day");
var total = (maxAge - age) * 3;
document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br><br>Favourite Snack: " + snack)
document.write("<br>Current age: " + age + "<br>Estimated maximum age: " + maxAge)
document.write("<br>Amount of snacks per day: " + amount + "<br>You will need " + total + " " + snack + "s to last you until the ripe old age of " + maxAge)


