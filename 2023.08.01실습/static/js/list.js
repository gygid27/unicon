$(function(){
    $("#keyword").on("keyup", function(){
      var img = $(this).val();
      $(".data img").filter(function(){
        var isSearch=$(this).attr("alt").indexOf(img) > -1;
        $(this).parent().toggle(isSearch);

      })
    });
})