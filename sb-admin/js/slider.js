function getSlider(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/slider",
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
  var btnget2=document.getElementById('btnget2');
  btnget2.addEventListener('click',getSlider);
  function listSlider(){    
  $(document).ready(function(){
    $.ajax({
        url: "http://localhost:3000/slider",
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
               
                event_data += '<td>'+'<img src="'+value.img+'" alt="" width="500px">'+'</td>';
              
                event_data += '<tr>';
            });
            $("#list_table_json2").append(event_data);
        },
        error: function(d){
            /*console.log("error");*/
            alert("404. Please wait until the File is Loaded.");
        }
    });
  });
  }
  listSlider();
  var id2=document.getElementById('idslider');
  var img2=document.getElementById('img2');
  function addSlider(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/slider",
        "method": "POST",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "9f253d9c-b257-4cca-9ecd-2a1e90e482fa"
        },
        "data": {
          "id": id2.value,
          "img": img2.value
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
  }
  var btnadd2=document.getElementById('btnadd2');
  btnadd2.addEventListener('click',addSlider);
  //Update
  function updateSlider(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/slider/"+id2.value,
        "method": "PATCH",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "be0383b7-66a7-41fd-9604-5f14075636ef"
        },
        "data": {
            "id": id2.value,
            "img": img2.value,
  
          }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
  }
  var btnupdate2=document.getElementById('btnup2');
  btnupdate2.addEventListener('click',updateSlider);
  //DELETE
  function deleteSlider(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/slider/"+id2.value,
        "method": "DELETE",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "18f7cf11-36a8-4c46-81a9-f9cbb93d4697"
        },
        "data": {
           
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
  }
  var btndelete2=document.getElementById('btndel2');
  btndelete2.addEventListener('click',deleteSlider);