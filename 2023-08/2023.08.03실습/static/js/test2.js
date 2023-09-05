$(function(){
  $.getJSON("http://jsonplaceholder.typicode.com/users", function(data){
    $.each(data,function(i,item){
      $(".name").eq(i).data('id',item.id);
      $(".name").eq(i).text(item.name);
      // $("#person_wrap").append("<div class='name' data-id='"+item.id+"'>"+item.name+"</div>");
    })

  });

$(".name").click(function(){
  var id = $(this).data("id");
  $.getJSON("http://jsonplaceholder.typicode.com/users?id="+id,function(data){
    data = data[0];
  //객체는 키로 쓴다.
    $("#info_name").text(data.name);
    $("#info_username").text(data.username);
    $("#info_email").text(data.email);
    $("#info_street").text(data.address.street);
    $("#info_suite").text(data.address.suite);
    $("#info_city").text(data.address.city);
    $("#info_zipcode").text(data.address.zipcode);
    $("#info_geo").text(data.address.geo.lat+","+data.address.geo.lng);
    $("#info_phone").text(data.phone);
    $("#info_website").text(data.website);
    $("#info_companyName").text(data.company.name);
    $("#info_companyName").text(data.company.bs)  


    $("#modal").show();

   });
});

  $("#modal_close").click(function(){
    $("#modal").hide();
  })  
  

})