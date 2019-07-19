function getCategory(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/categories",
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
btnget.addEventListener('click',getCategory);
function listCate(){    
  $(document).ready(function(){
    $.ajax({
        url: "http://localhost:3000/categories",
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
listCate();
var id=document.getElementById('idproduct');
var namecate=document.getElementById('nameproduct');
var img=document.getElementById('img');
function addCategory(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/categories",
        "method": "POST",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "d75e5a1b-c01f-4542-8d56-41b743657e56"
        },
        "data": {
          "id": id.value,
          "name": namecate.value,
          "img": img.value
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
var btnadd=document.getElementById('btnadd');
btnadd.addEventListener('click',addCategory);
//Update
function updateCategory(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/categories/"+id.value,
        "method": "PATCH",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "a8d69c41-caed-4c15-9fe4-5b61132c95f4"
        },
        "data": {
            "id": id.value,
            "name": namecate.value,
            "img": img.value
          }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
var btnupdate=document.getElementById('btnup');
btnupdate.addEventListener('click',updateCategory);
//DELETE
function deleteCategory(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/categories/"+id.value,
        "method": "DELETE",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "7ffb9243-8acf-4e66-8040-242a73664fea"
        },
        "data": {
           
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
var btndelete=document.getElementById('btndel');
btndelete.addEventListener('click',deleteCategory);



//////////




function getProduct(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/product",
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
var btnget1=document.getElementById('btnget1');
btnget1.addEventListener('click',getProduct);
function listProduct(){    
  $(document).ready(function(){
    $.ajax({
        url: "http://localhost:3000/product",
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
                event_data += '<td>'+'<img src="'+value.img+'" alt="" width="100px">'+'</td>';
                event_data += '<td>'+value.price+'</td>';
                event_data += '<td>'+value.event+'</td>';
                event_data += '<tr>';
            });
            $("#list_table_json1").append(event_data);
        },
        error: function(d){
            /*console.log("error");*/
            alert("404. Please wait until the File is Loaded.");
        }
    });
});
}
listProduct();
var id1=document.getElementById('idproduct1');
var nameproduct1=document.getElementById('nameproduct1');
var img1=document.getElementById('img1');
var price=document.getElementById('price');
var event=document.getElementById('event');
function addProduct(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/product",
        "method": "POST",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "d75e5a1b-c01f-4542-8d56-41b743657e56"
        },
        "data": {
          "id": id1.value,
          "name": nameproduct1.value,
          "img": img1.value,
          "price":price.value,
          "event":event.value
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
var btnadd1=document.getElementById('btnadd1');
btnadd1.addEventListener('click',addProduct);
//Update
function updateProduct(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/product/"+id1.value,
        "method": "PATCH",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "a8d69c41-caed-4c15-9fe4-5b61132c95f4"
        },
        "data": {
            "id": id1.value,
            "name": nameproduct1.value,
            "img": img1.value,
            "price":price.value,
            "event":event.value

          }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
var btnupdate1=document.getElementById('btnup1');
btnupdate1.addEventListener('click',updateProduct);
//DELETE
function deleteProduct(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/product/"+id1.value,
        "method": "DELETE",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "7ffb9243-8acf-4e66-8040-242a73664fea"
        },
        "data": {
           
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
var btndelete1=document.getElementById('btndel1');
btndelete1.addEventListener('click',deleteProduct);


////////


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
             
              event_data += '<td>'+'<img src="'+value.img+'" alt="" width="100px">'+'</td>';
            
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
