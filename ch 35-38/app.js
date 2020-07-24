//Task#1
//function today() {
//var dat = new Date();
//document.write(dat)
//}
//today();

//Task#2
//function fullName() {
//var firstName = prompt("Enter Your First Name");
//var lastName = prompt("Enter Your last name");
//var joined = firstName.concat(" ", lastName);
//alert("Welcome, " + joined)
//}
//fullName();

//Task#3
//function add() {
//var num1 = Number(prompt("Enter first number"));
//var num2 = Number(prompt("Enter second number"));
//var res = num1 + num2;
//alert(res)
//}
//add();

//Task#4
//function calculator(){
//var firstNum = Number(prompt("Enter the first number"));
//var secondNum = Number(prompt("Enter the second number"));
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
//}
//calculator();

//Task#5
//function square(a){
//var a = a*a;
//alert(a)
//}
//square(4);

//Task#6
//function factorial(n) {
//return (n != 1) ? n * factorial(n - 1) : 1;
//}
//alert( factorial(5) ); 

//Task#7
//function count(){
//var a = prompt("Enter starting number");
//var b = prompt("Enter ending number");
//for (var i = a; i <= b; i++){
//document.write(i + "<br>")
//}
//}
//count();

//Task#8
//function calculateHypotenuse(){

//var base = parseInt(prompt("Enter base"));
//var perp = parseInt(prompt("Enter perpendicular"));

//function calculateSquare(a){
//var a = Math.pow(a, 2);
//return a;
//}

//var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perp))
//alert(hypotenuse)

//}
//calculateHypotenuse();

//Task#9(i)
//function area(w, h){
//var a = w * h;
//alert(a);
//}
//area(3, 4);

//Task#9(ii)
//function area(w, h){
//var a = w * h;
//alert(a);
//}
//var wid = 4;
//var he = 5;
//area(wid, he);

//Task#10
//function palindrome(){
//var word = prompt("Enter your word");
//var check = "";
//for(var i = word.length - 1; i >= 0 ; i--){
//check += word[i]
//}
//if(check === word){
//alert(word + " is Palindrome word")
//}
//else{
//alert(word + " is not a Palindrome word")
//}
//}
//palindrome();

//Task#11
//function sent(){
//var str = prompt("Enter a sentence");
//str = str.toLowerCase().split(" ");
//for(var i = 0; i< str.length; i++){
//str[i] = str[i][0].toUpperCase() + str[i].slice(1);
//}
//document.write(str.join(" "))
//}
//sent();

//Task#12
//function findLongest() {
//var str = prompt("Enter a sentence");
//var array1 = str.match(/\w[a-z]{0,}/gi);
//var result = array1[0];
//for(var i = 1 ; i < array1.length ; i++) {
//if(result.length < array1[i].length) {
//result = array1[i];
//} 
//}
//alert(result);
//}
//findLongest();

//Task#13
//function occu(str, a){
//var newStr = str.toLowerCase();
//var occ = newStr.split(a).length - 1;
//document.write("Text: " + str + "<br> There are " + occ + " occurrence(s) of word " + "'" + a + "'")
//}
//occu("The quick brown fox jumps over the lazy dog", "o");

//Task#14
//function calcCircumference(r){
//var cir = 2 * Math.PI * r;
//document.write("The Circumference is " + cir)
//}
//function calcArea(r){
//var area = Math.PI * Math.pow(r, 2);
//document.write("The Area is " + area)
//}
//calcCircumference(4);
//calcArea(4);