//Task#1
//var firstName = "Taha Hussain";
//var lastName = "Baloch";
//var fullName = firstName + " " + lastName;
//alert("Welcome dear " + fullName);

//Task#2
//var phoneModel = prompt("Enter you favourtie phone model");
//document.write("My favourite phone is: " + phoneModel)
//document.write("<br>Length of string: " + phoneModel.length)

//Task#3
//var str = "Pakistani";
//document.write("String: " + str + "<br>Index of 'n': " + str.indexOf("n"))

//Task#4
//var str = "Hello World";
//document.write("String: " + str + "<br>Last Index of 'l': " + str.lastIndexOf("l"))

//Task#5
//var str = "Pakistani";
//document.write("String: " + str + "<br>Character at index 3: " + str.charAt(3))

//Task#6
//var firstName = "Taha Hussain";
//var lastName = "Baloch";
//var fullName = firstName.concat(" ", lastName);
//alert("Welcome dear " + fullName);

//Task#7
//var city = "Hyderabad";
//newCity = city.replace("Hyder", "Islam");
//document.write("City: " + city + "<br>After replacement: " + newCity)

//Task#8
//var message = "Ali and Sami are best friends. They play cricket and football together.";
//newMessage = message.replace(/and/g, "&");
//document.write("Original: " + message + "<br>After replacement: " + newMessage)

//Task#9
//var str = "472";
//var num = parseInt(str);
//document.write("Value: " + str + "<br>Type: " + typeof str)
//document.write("<br>Value: " + num + "<br>Type: " + typeof num)

//Task#10
//var str = prompt("Enter a word");
//document.write("User input: " + str + "<br>Upper case: " + str.toUpperCase())

//Task#11
//var str = prompt("Enter a Word");
//str = str.toLowerCase().split(" ");
//for(var i = 0; i< str.length; i++){
//str[i] = str[i][0].toUpperCase() + str[i].slice(1);
//}
//document.write(str.join(" "))

//Task#12
//var num = 35.36;
//var str = num.toString();
//str = str.replace(".", "")
//var newNum = Number(str);
//sdocument.write("Number: " + num + "<br>Result: " + newNum)

//Task#13
//var userName = prompt("Enter your User Name");
//var arr = ["@", ".", "!", ","];
//for (var i = 0; i < userName.length; i++) {
//for (var j = 0; j < arr.length; j++){
//if (userName.charAt(i) === arr[j]) {
//alert("Please Enter a valid username");
//break;
//}
//}
//}

//Task#14
//var a = ["cake", "apple pie", "cookie", "chips", "patties"];
//var order = prompt("Welcome to ABC Bakery. What do you want to order Sir/ma'am?");
//order = order.toLowerCase();
//var matchFound = false;
//for (var i = 0; i < a.length; i++){
//if (order === a[i]){
//alert(order + " is available at index " + i + " in our bakery.");
//matchFound = true;
//break;
//}
//}
//if (matchFound === false) {
//alert("We are sorry. " + order + " is not available in our bakery");
//}

//Task#15
//var pass = prompt("Enter your password");
//var matchFound = false;
//var arr = ["@", ",", ".", "!"];
//var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//for (var i = 0; i < pass.length; i++){
//for (var j = 0; j < arr.length; j++) { 
//for (var k = 0; k < num.length; k++) { 
//if (pass.length < 6 || pass[i] === arr[i] || pass[0] === num[i]) {
//alert("Entered password: " + pass + " Password can not begin with a number. Please enter a valid password");
//matchFound = true;
//break;
//}
//}
//}
//}
//if (matchFound === false) {
//alert("Good to go")
//}

//Task#16
//var university = "University of karachi";
//university = university.split("");
//for (var i = 0; i < university.length; i++){
//document.write(university[i] + "<br>")
//}

//Task#17
//var str = prompt("Enter a word");
//var last = str.length - 1;
//var lastChar = str.charAt(last);
//document.write("User Input: " + str + "<br>Last Character: " + lastChar)

//Task#18
var str = "The quick brown fox jumps over the lazy dog";
var newStr = str.toLowerCase();
var occ = newStr.split("the").length - 1;
document.write("Text: " + str + "<br> There are " + occ + " occurrence(s) of word 'the' " )

