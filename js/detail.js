$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}
var id = $.urlParam('id');

function getData() {
    $.ajax({
        url: "http://localhost:3000/product/" + id,
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function (data) {
            /*console.log(data);*/
            console.log(data);
            
            // $.each(data, function (index, value) {
            //     /*console.log(value);*/
                
            // });
            if(data){
                document.getElementById("product-price").innerHTML = data.price+"$";
                document.getElementById("product-image").src = data.img;
                document.getElementById("product-name").innerHTML = data.name;
                
            }
        },
        error: function (d) {
            /*console.log("error");*/
            alert("404. Please wait until the File is Loaded.");
        }
    });
}
getData();