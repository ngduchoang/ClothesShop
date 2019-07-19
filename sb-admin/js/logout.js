function logout(){
  sessionStorage.removeItem("role");
  document.location="../index.html";
};
var btnLogout=document.getElementById('logout');
btnLogout.addEventListener('click',logout);
