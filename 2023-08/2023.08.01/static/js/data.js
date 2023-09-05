
$(function(){
  // input 태그에 키보드를 눌렀다가 떼는 경우에 동작 -keyup
  // input 태그에 키보드를 눌렀을때 동작 -keydown
  $("#search_word").on("keyup",function(){
    var word = $(this).val();
    // this는 #search_word의 input값을 의미하는 것이다. 
    $("#mydata tr").filter(function(){
      $(this).toggle( $(this).text().indexOf(word) > -1);
    })
  });
})

//콜백은 함수안에 함수를 넣고 내부에 조건을 넣어 그것을 실행시키는 함수. 