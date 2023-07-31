
//append - 선택한 한 태그의 마지막에 추가
//prepend - 선택한 태그의 처음에 추가
//before - 선택한 태그의 앞쪽에 추가
//after - 태그의 뒤쪽에 추가






$(function(){
  $("#setImage").click(function(){
    var data = $("#imageName").val();
    // alert(data);

    $("#gallery").append("<div class = 'img_box'><img src= '"+data+"'></div>");
  });

  $("#3n").click(function(){
    $("#gallery").removeClass("grid-4n");
    $("#gallery").addClass("grid-3n");
    // $("#gallery").css("grid-template")
  });

  $("#4n").click(function(){
    $("gallery").removeClass("grid-3n");
    $("gallery").addClass("grid-4n");
    
  });

  $("#slide").click(function(){
    $("gallery").removeClass("grid-3n");
    $("gallery").addClass("grid-4n");
    
  });

});

