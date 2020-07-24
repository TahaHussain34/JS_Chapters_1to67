//Task#1
//var a = 10;
//document.write("Result:" + "<br>The Value of a is : " + a + "<br>..........................")
//a = ++a;
//document.write("<br>The value of ++a is: " + a + "<br>Now the value of a is: " + a);
//document.write("<br><br>The value of a++ is: " + a);
//document.write("<br>Now the value of a is: " + ++a);
//a = --a;
//document.write("<br><br>The value of --a is: " + a);
//document.write("<br>Now the value of a is: " + a);
//document.write("<br><br>The value of a-- is: " + a);
//document.write("<br>Now the value of a is: " + --a);

//Task#2
//var a = 2;
//var b = 1;
//var result = --a - --b + ++b + b--;
//document.write("a is " + a + "<br>b is " + b + "<br>result is " + result)
//--a is pre-decrement here a = 1; --a - --b here b is also pre-decrement means b =0 so far it is 1-0 =1
//--a - --b + ++b here b is pre-incremented means b=1 so far it is 1- 0 + 1 =2
//--a - --b + ++b + b-- here b is post-decremented means b will be 0 afterwards but 1 will added in result so far it is 1- 0 + 1 + 1 =3;

//Task#3
//var name = prompt("Enter your name");
//alert("Hello " + name);

//Task#4
//var num = prompt("Enter the number")
//for(var a = 1; a <= 10; a++){
//document.write(num + "x" + a + "=" + num*a + "<br>")
//}

//Task#5
var sub1 = prompt("Enter the first subject");
var ob1 = prompt("Enter the first subject obtained marks");
var sub2 = prompt("Enter the second subject");
var ob2 = prompt("Enter the second subject obtained marks");
var sub3 = prompt("Enter the third subject");
var ob3 = prompt("Enter the third subject obtained marks");
var tMarks = 100;
var total = tMarks*3;
var obtained = ob1 + ob2 + ob3;
var per = obtained/total *100;
document.write("<table table align="right">")
document.write("<tr>")
document.write("<th scope="col">Subject</th>")
document.write("<th scope="col">Total Marks</th>")
document.write("<th scope="col">Obtained Marks</th>")
document.write("<th scope="col">Percentage</th>")
document.write("</tr>")
document.write("<tr>")
document.write("<td>sub1</td>" + "<td>tMarks</td>+ "<td>ob1</td>" + "<td></td>")
document.write("</tr>")
document.write("<tr>")
document.write("<td>sub2</td>" + "<td>tMarks</td>+ "<td>ob2</td>" + "<td></td>")
document.write("</tr>")
document.write("<tr>")
document.write("<td>sub3</td>" + "<td>tMarks</td>+ "<td>ob3</td>" + "<td></td>")
document.write("</tr>")
document.write("<tr>")
document.write("<td></td>" + "<td>total</td>" + "<td>obtained</td>" + "<td>per</td>")
document.write("</tr>")

document.write("</table>")
