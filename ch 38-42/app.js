// Task#1
// function power(a,b){
//     document.write(Math.pow(a, b))
// }
// var a = prompt("Enter the base");
// var b = prompt("Enter the power to base");
// power(a,b)

// Task#2
// function leap(){
//     var a = prompt("Enter any year");
//     if(a % 4 === 0){
//         alert("It is a leap year")
//     }
//     else{
//         alert("It is not a leap year")
//     }
// }
// leap()

// Task#3
// var a = parseInt(prompt("Enter the length of one side of triangle"));
// var b = parseInt(prompt("Enter the length of second side of triangle"));
// var c = parseInt(prompt("Enter the length of three side of triangle"));
// function area(){
//     var s = (a+b+c)/2;
//     var ar = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     alert(ar)
// }
// area()

//Task#4
// function average(a, b, c){
//     var av = (a + b + c)/3;
//     alert("average marks of the student are: " + av)
// }
// function percentage(a, b, c){
//     var per = ((a + b + c)/250) * 100;
//     alert("The obtained percentage of student is: " + per)
// }
// function mainFunction(){
//     var a = parseInt(prompt("Enter the marks of subject 1"));
//     var b = parseInt(prompt("Enter the marks of subject 2"));
//     var c = parseInt(prompt("Enter the marks of subject 3"));
//     average(a, b, c);
//     percentage(a, b, c);
// }
// mainFunction();

//Task#5
// var text = prompt("enter a word")
// var arr = [];
// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "t") {
//         arr.push(i)
//     }
// }
// alert(arr)

//Task#6

// function removeVowels(str) {
//     return str.replace(/[aeiou]/gi, '');
// }
// var pla = prompt("Enter any sentence");
// pla = removeVowels(pla);
// alert(pla)







//Task#7?

// function findOccurrences() {
//     var str = prompt("Enter a sentence");
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
// }
  
  
// alert(findOccurrences());


//Task#8
// var distanceInKm = prompt("Enter the distance betwwen hyderabad and karachi in Km");
// function distanceInMeters(d){
//     var distanceInM = d * 1000;
//     document.write("distance between hyderabad and karachi in meters is: "+ distanceInM + " meters" + "<br>");
// }
// function distanceInFeet(d){
//     var distanceInF = d * 3280.84;
//     document.write("distance between hyderabad and karachi in feets is: "+ distanceInF + " feets" + "<br>");
// }
// function distanceInInches(d){
//     var distanceInI = d * 39370.08;
//     document.write("distance between hyderabad and karachi in inches is: "+ distanceInI + " inches" + "<br>");
// }
// function distanceInCentimeters(d){
//     var distanceInCm = d * 100000;
//     document.write("distance between hyderabad and karachi in centimeters is: "+ distanceInCm + " centimeters");
// }
// distanceInMeters(distanceInKm);
// distanceInFeet(distanceInKm);
// distanceInInches(distanceInKm);
// distanceInCentimeters(distanceInKm);

//Task#9
// var overTimePeriod = prompt("Enter your overtime hours");
// function overTimeCalculator(overTime){
//     var total =  overTime * 12;
//     document.write("Your total overtime amount is " + total + " rupees")
// }
// overTimeCalculator(overTimePeriod);

//Task#10
// var inp = prompt("Enter the value to withdraw in hundreds");
// function notes(withDraw){
//     if(withDraw.length === 3){
//         var hundreds = withDraw.charAt(withDraw.length - 3);
//         var tens = withDraw.charAt(withDraw.length - 2);
//         if(tens === 5){
//             alert(hundreds + " hundred notes," + " 1 fifty notes" + " and 0 ten notes")
//         }
//         else if (tens < 5){
//             alert(hundreds + " hundred notes," + " 0 fifty notes" + " and " + tens + " ten notes");
//         }
//         else{
//             remain = tens - 5;
//             alert(hundreds + " hundred notes," + " 1 fifty notes" + " and " + remain + " ten notes")
//         }
//     }
//     else{
//         alert("Please enter the value in 3 digited value as in hundreds")
//     }

// }
// notes(inp);
