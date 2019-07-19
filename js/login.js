var user = document.getElementById('user');
var password = document.getElementById('password');
var error=true;
var role ;
function login(){
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/users",
        dataType: "json",
        type: "get",
        success: function(data){
        
            $.each(data, function(key, value){
               if(user.value==value.username && password.value==value.password)
               {
                   error=false;
                   sessionStorage.setItem("role",value.role);
                   sessionStorage.setItem("un",value.username);
                   sessionStorage.setItem("name",value.name);
                   sessionStorage.setItem("email",value.email);
                   sessionStorage.setItem("img",value.img);
                   sessionStorage.setItem("id",value.id);
               }
               
            });
            if(error == false && sessionStorage.getItem("role")=="user")
            {
                document.location="profile.html"
                
            }
            else if(error == false &&  sessionStorage.getItem("role")=="admin")
            {
                document.location="/sb-admin/blank-page.html";
               
            }
            else 
            {
                alert("Ban da nhap sai")
            }
          
        }
    });
};
var btnLogin=document.getElementById('login');
btnLogin.addEventListener('click',login);
