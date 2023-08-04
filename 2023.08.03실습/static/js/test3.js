$(".thumbnail").clilck(function(){
  var img = $(this).data("img");
  $.getJSON("http://jsonplaceholder.typicode.com/photos?id="+Id,function(data){
    $.each(data,function(i){
      var img = Math.floor(Math.random()*5000);
      $(".thumbnail").eq(i).attr("src", data[tem].thumbnailURl.split("via.").join(""));
      $(",thumbnail").eq(i).click(function(){
        
      })
    })

  })
})