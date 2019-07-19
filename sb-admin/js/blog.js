function getBlog(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/blog",
        "method": "GET",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "5a82167f-12c5-42b7-b775-f67b68b32396"
        },
        "data": {
         
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
var btnget=document.getElementById('btnget');
btnget.addEventListener('click',getBlog);
function listBlog(){    
  $(document).ready(function(){
    $.ajax({
        url: "http://localhost:3000/blog",
        dataType: 'json',
        type: 'get',
        cache:false,
        success: function(data){
            /*console.log(data);*/
            var event_data = '';
            $.each(data, function(index, value){
                /*console.log(value);*/
                event_data += '<tr>';
                event_data += '<td>'+value.id+'</td>';
                event_data += '<td>'+value.name+'</td>';
                event_data += '<td>'+value.date+'</td>';
                event_data += '<td>'+value.title+'</td>';
                event_data += '<td>'+'<img src="'+value.img+'" alt="" width="100px">'+'</td>';
                event_data += '<tr>';
            });
            $("#list_table_json").append(event_data);
        },
        error: function(d){
            /*console.log("error");*/
            alert("404. Please wait until the File is Loaded.");
        }
    });
});
}
listBlog();