//Task#1
// function submit(){
//     var email = document.getElementById("email");
//     var pass = document.getElementById("pass");
//     document.write("email address: " + email.value + "<br>" + "Password is: " + pass.value)
// }

//Task#2
// function readMore(){
//     var expanded = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laboriosamm at perferendis excepturi expedita,ipsam eligendi saepe molestias facere dolore, blanditiis doloremque sapiente sed error vel eaque earum.";
//     document.getElementById("para").innerHTML = expanded;
// }


//Task#3
function delRow(r){
    var i = r.parentNode.parentNode.rowIndex;
    var a = document.getElementById("tabla");
    a.deleteRow(i);
}
function editRow(r){
    var i = r.parentNode.parentNode.rowIndex;
    var cn = window.prompt("Input the Column number(0,1,2)","0");
    content = window.prompt("Input the Cell content");  
    var x=document.getElementById('tabla').rows[i].cells;
    x[parseInt(cn,10)].innerHTML=content;
}

