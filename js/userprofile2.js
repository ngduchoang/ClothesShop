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
                  
                 event_data=
                  `     <div class="card" style="width: 18rem;"id="listi">
                
                  <br>
                  <img class="card-img-top" src="${value.img}" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">${value.username}</h5>
                    <p class="card-text">Name: ${value.name}</p>
                    <p class="card-text">Email: ${value.email}</p>
                    <br>
                  </div>
                  </div>

                `
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