function loadhomepage(){
username=localStorage.getItem('username');
document.getElementById("username").innerHTML=username;
}
function additem(){
    window.location="./newItem.html";
}