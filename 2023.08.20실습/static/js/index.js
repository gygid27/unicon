$(function(){
     // input 태그에 키보드를 눌렀다가 떼는 경우에 동작 - keyup
    // input 태그에 키보드를 눌렀을때 동작 - keydown
    $("#keyword").on("keyup",function(){
        var word = $(this).val();
        $(".data img").filter(function(){
            var isSearch=$(this).attr("alt").indexOf(word) > -1;
            $(this).parent().toggle(isSearch);
        });
    })
})