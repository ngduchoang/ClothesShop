var name=document.getElementById('name');
var username=document.getElementById('username');
var password=document.getElementById('password');
var email=document.getElementById('email');
function addUser(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/users",
        "method": "POST",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "2fbb76ae-99be-47d7-b8e6-ade151d3c63d"
        },
        "data": {
            //"id": id1.value,
            "name": name.value,
            "username": username.value,
            "password": password.value,
            "email":email.value,
          }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        alert("Dang ky thanh cong");
      });
      
}
var btnadd=document.getElementById('btnadd');
btnadd.addEventListener('click',addUser);