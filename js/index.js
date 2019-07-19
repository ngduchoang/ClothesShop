
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
                event_data+=`   
                <div class="category-card">
                        <div class="pic-category">
                      <div class="des-category"><a href="">${value.name}</a></div>
                      <img src="${value.img}" alt="" />
                      </div>
                </div>
                
               `
              });
              $("#inner-category-content").append(event_data);
          },
          error: function(d){
              /*console.log("error");*/
              alert("404. Please wait until the File is Loaded.");
          }
      });
  });
  }
  listCate();
  //newArival
  function listCate1(){    
    $(document).ready(function(){
      $.ajax({
          url: "http://localhost:3000/product/?event=newarrival",
          dataType: 'json',
          type: 'get',
          cache:false,
          success: function(data){
              /*console.log(data);*/
              var event_data = '';
              $.each(data, function(index, value){
                event_data+=`   
                <div class="block-product">
                <div class="pic-product">
                  <div class="des-pic-product">
                    <a href="detail.html?id=${value.id}"><i class="fas fa-search" aria-hidden="true"></i></a> 
                  </div>
                  <img src="${value.img}" alt="" />
                </div>
                <div class="des-block-product">
                  <div class="title-product">
                    <h4>${value.name}</h4>
                  </div>
                  <div class="price-product"><p>$${value.price}</p></div>
                  <div class="buy-product">
                    <a href=""
                      ><i
                        class="fa fa-chevron-circle-down"
                        aria-hidden="true"
                      ></i>
                      Add To Cart</a
                    >
                  </div>
                </div>
              </div>
                
               `
              });
              $("#list1").append(event_data);
          },
          error: function(d){
              /*console.log("error");*/
              alert("404. Please wait until the File is Loaded.");
          }
      });
  });
  }
  listCate1();
//trending
  function listCate2(){    
    $(document).ready(function(){
      $.ajax({
          url: "http://localhost:3000/product/?event=trending",
          dataType: 'json',
          type: 'get',
          cache:false,
          success: function(data){
              /*console.log(data);*/
              var event_data = '';
              $.each(data, function(index, value){
                event_data+=`   
                <div class="block-collection">
                <div class="des-block-collection">
                  <h4 class="price">$${value.price}</h4>
                  <h4 class="name">${value.name}</h4>
                </div>
                <div class="pic-collection">
              
                <a href="detail.html?id=${value.id}">  <img src="${value.img}" alt="" /></a> 
                </div>
              </div>
               `
              });
              $("#list2").append(event_data);
          },
          error: function(d){
              /*console.log("error");*/
              alert("404. Please wait until the File is Loaded.");
          }
      });
  });
  }
  listCate2();
//bestsell
  function listCate3(){    
    $(document).ready(function(){
      $.ajax({
          url: "http://localhost:3000/product/?event=bestsell",
          dataType: 'json',
          type: 'get',
          cache:false,
          success: function(data){
              /*console.log(data);*/
              var event_data = '';
              $.each(data, function(index, value){
                event_data+=`   
                <div class="block-product">
                <div class="pic-product">
                  <div class="new-product">NEW</div>
                  <div class="des-pic-product">
                  <a href="detail.html?id=${value.id}"><i class="fas fa-search" aria-hidden="true"></i></a> 
                  </div>
                  <img src="${value.img}" alt="" />
                </div>
                <div class="des-block-product">
                  <div class="title-product">
                    <h4>${value.name}</h4>
                  </div>
                  <div class="price-product"><p>$${value.price}</p></div>
                  <div class="buy-product">
                    <a href=""
                      ><i
                        class="fa fa-chevron-circle-down"
                        aria-hidden="true"
                      ></i>
                      Add To Cart</a
                    >
                  </div>
                </div>
              </div>
               `
              });
              $("#list3").append(event_data);
          },
          error: function(d){
              /*console.log("error");*/
              alert("404. Please wait until the File is Loaded.");
          }
      });
  });
  }
  listCate3();
// slider
// function listCate4(){    
//   $(document).ready(function(){
//     $.ajax({
//         url: "http://localhost:3000/slider",
//         dataType: 'json',
//         type: 'get',
//         cache:false,
//         success: function(data){
//             /*console.log(data);*/
//             var event_data = '';
//             $.each(data, function(index, value){
//               event_data+=`   
//               <div><img src="${value.img}"></div>
//              `
//             });
//             $("#list4").append(event_data);
//         },
//         error: function(d){
//             /*console.log("error");*/
//             alert("404. Please wait until the File is Loaded.");
//         }
//     });
// });
// }
// listCate4();


//blog
function listCate5(){    
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
              event_data+=`   
              <div class="blog-card">
              <div class="des-blog">
                <h5>
                  Posted By:<span id="blue">${value.name}</span>${value.date}
                </h5>
                <h4>${value.title}</h4>
              </div>
              <div class="pic-blog">
                <img src="${value.img}" alt="" />
              </div>
            </div>
             `
            });
            $("#list-blog").append(event_data);
        },
        error: function(d){
            /*console.log("error");*/
            alert("404. Please wait until the File is Loaded.");
        }
    });
});
}
listCate5();



