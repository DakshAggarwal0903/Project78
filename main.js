 var abc = [];
function submit(){
var a1 = document.getElementById("S1").value;
var a2 = document.getElementById("S2").value;
var a3 = document.getElementById("S3").value;
var a4 = document.getElementById("S4").value;
abc.push(a1);
abc.push(a2);
abc.push(a3);
abc.push(a4);
console.log(abc);
document.getElementById("answer").innerHTML = abc;
document.getElementById("submit").style.display = "none";
document.getElementById("sort").style.display = "inline-block";
}
function sort(){
    abc.sort();
    console.log(abc);
document.getElementById("answer").innerHTML = abc;
}
