$(function(){
    $("#keyword").on("keyup",function(){
        var word = $(this).val();
        $(".data img").filter(function(){
            var issearch=$(this).attr("alt").indexOf(word) > -1;
            $(this).parent().toggle(issearch);
        });
    })
})