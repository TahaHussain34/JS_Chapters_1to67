//Task#1
//var city = prompt("Enter the city name")
//if(city === "Karachi"){
//alert("Welcome to the city of lights")
//}
//else{
//alert("Welcome")
//}

//Task#2
//var gender = prompt("Enter your gender")
//if (gender === "male"){
//alert("Good Morning, Sir!")
//}
//else if(gender === "female"){
//alert("Good Morning, Ma'am")
//}
//else{
//alert("Good Morning")
//}

//Task#3
//var color = prompt("Enter a color of traffic signal")
//if (color === "red"){
//alert("Must Stop")
//}
//else if (color === "yellow"){
//alert("Ready to move")
//}
//else if (color === "green"){
//alert("Move now")
//}

//Task#4
//var remainingFuel = prompt("Enter the amount of remaining fuel in litres");
//if (remainingFuel < 0.25){
//alert("Please refill the fuel in your car")
//}
//else{
//alert("You are good to go")
//}

//Task#5(a)
//var a = 4;
//if (++a === 5){ 
//alert("given condition for variable a is true"); }
//alert displayed

//Task#5(b)
//var b = 82; 
//if (b++ === 83){ 
//alert("given condition for variable b is true"); }
//alert not displayed

//Task#5(c)
//var c = 12; 
//if (c++ === 13){ 
//alert("condition 1 is true"); } 
//if (c === 13){ alert("condition 2 is true"); } 
//if (++c < 14){ alert("condition 3 is true"); } 
//if(c === 14){ alert("condition 4 is true"); }
//condition 2 and 4 are true

//Task#5(d)
//var materialCost = 20000;
//var laborCost = 2000; 
//var totalCost = materialCost + laborCost; 
//if (totalCost === laborCost + materialCost){ 
//alert("The cost equals"); }
//alert displayed

//Task#5(e)
//if (true){ alert("True"); } 
//if (false){ alert("False"); }
//alert true is displayed

//Task#5(f)
//if("car" < "cat"){ alert("car is smaller than cat"); }
//alert displayed

//Task#6
//var ob1 = parseInt(prompt("Enter subject 1 marks out of 100"));
//var ob2 = parseInt(prompt("Enter subject 2 marks out of 100"));
//var ob3 = parseInt(prompt("Enter subject 3 marks out of 100"));
//obtained = ob1 + ob2 + ob3;
//total = 300;
//per = obtained/total * 100;
//document.write("<h1>Marksheet</h1>" + "<br><br>Total Marks: " + total)
//document.write("<br>Marks obtained: " + obtained + "<br>Percentage : " + per + "%")
//if(per >= 80){document.write("<br>Grade : A-one" + "<br>Remarks: Excellent")}
//else if(per >= 70){document.write("<br>Grade : A" + "<br>Remarks: Good")}
//else if(per >= 60){document.write("<br>Grade : B" + "<br>Remarks: You need to improve")}
//else if(per < 60){document.write("<br>Grade : Fail" + "<br>Remarks: Sorry")}

//Task#7
//var num = 7;
//var guessNum = parseInt(prompt("Guess the number from 1 to 10"));
//if(guessNum === num){
//alert("Bingo! Correct answer")
//}
//else if(guessNum === num +1 || guessNum === num -1){
//alert("close enough to the number")
//}
//else{
//alert("Sorry you are far away from the number")
//}

//Task#8
//var num = parseInt(prompt("Enter a number"));
//if (num % 3 === 0){
//alert("The number is divisible by 3")
//}
//else{
//alert("The number is not divisible by 3")
//}

//Task#9
//var num = parseInt(prompt("Enter a number"));
//if (num % 2 === 0){
//alert("The number is even")
//}
//else{
//alert("The number is odd")
//}

//Task#10
//var temp = parseInt(prompt("Enter todays temperature"));
//if(temp > 40){
//alert("It is too hot outside")
//}
//else if(temp > 30){
//alert("The weather is normal")
//}
//else if(temp > 20){
//alert("Today's weather is cool")
//}
//else if(temp > 10){
//alert("OMG! Today's weather is so cool")
//}

//Task#11
//var firstNum = parseInt(prompt("Enter the first number"));
//var secondNum = parseInt(prompt("Enter the second number"));
//var operator = prompt("Enter the operator");
//if(operator === "+"){
//alert(firstNum + "+" + secondNum + "=" + (firstNum + secondNum))
//}
//else if(operator === "-"){
//alert(firstNum + "-" + secondNum + "=" + (firstNum - secondNum))
//}
//else if(operator === "*"){
//alert(firstNum + " X " + secondNum + " = " + (firstNum * secondNum))
//}
//else if(operator === "/"){
//alert(firstNum + " / " + secondNum + " = " + (firstNum / secondNum))
//}
//else if(operator === "%"){
//alert(firstNum + "%" + secondNum + "=" + (firstNum % secondNum))
//}
//else{
//alert("invalid operator")
//}
