function listI(){    
    $(document).ready(function(){
      $.ajax({
          url: "http://localhost:3000/users?id="+sessionStorage.getItem('id'),
          dataType: 'json',
          type: 'get',
          cache:false,
          success: function(data){
              /*console.log(data);*/
              var event_data = '';
              $.each(data, function(index, value){
                  /*console.log(value);*/
                  event_data += '<tr>';
                  event_data += '<td>'+value.email+'</td>';
                  event_data += '<td>',
                  event_data += '</td>',
                  event_data += '<td>'+'<img src="'+value.img+'" alt="" width="100px">'+'</td>';
                  event_data += '</tr>';
                  event_data += '<tr>';
                  event_data += '<td>'+value.name+'</td>';
                  event_data += '</tr>';
                
              });
              $("#listi").append(event_data);
          },
          error: function(d){
              /*console.log("error");*/
              alert("404. Please wait until the File is Loaded.");
          }
      });
  });
  }
  listI();