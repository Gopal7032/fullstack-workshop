console.log("console lo print chai ");
let count = 0;
document.getElementById("counter").innerHTML = count;

function increasebtn(){
    count += 1;

    document.getElementById("counter").innerHTML = count;
    document.getElementById("counter").style.color = "green";
}
function decreasebtn(){
    if(count>0){
    count -= 1;
    document.getElementById("counter").innerHTML = count;
    document.getElementById("counter").style.color = "red";
    if(count==0){
        document.getElementById("counter").style.color = "black";
    }

}
}
function resetbtn(){
    count = 0;
    document.getElementById("counter").innerHTML = count;
    document.getElementById("counter").style.color = "black";

}
function Adding1(){
    count += 1;
    document.getElementById("counter").innerHTML = count;
}
function Adding5(){
    count += 5;
    document.getElementById("counter").innerHTML = count;
}   
function Adding10(){
    count += 10;
    document.getElementById("counter").innerHTML = count;
}   