let re =0;

$(function(){
    $.getJSON("http://krdrive.ipdisk.co.kr:8000/test/data.php",function(data){
      chat_show(data);
    });

    re = setTimeout(function(){
      location.reload();
    },10000);
});

$(document).on("keyup",function(){
    if(re!=0);
      clearTimeout(re);
})

function send(){
    var send_data = {writer:$("#writer").val(), content:$("#content").val()};
    send_data = JSON.stringify(send_data);

    var xmlHttp = new XMLHttpRequest(); 
    //서버와 주고받고 할 때 사용되는 객체, 새로고침없이 데이터를 받아올 수 있다.
    //클라이어트 와 서버 동시에 사용 가능 모든 데이터를 주고 받을 때 사용하는 객체 XML

    xmlHttp.open("POST", "http://krdrive.ipdisk.co.kr:8000/test/data.php");

    //xmlHttp.open(); --> 전송방식
    //데이터를 감춰서 보내는 것 post
    //데이터를 보여주면서 보내는 것 get

    xmlHttp.onload=function(){ //서버로부터 결과를 반환 받는 곳
      var data = this.response;
      if(data==='fail')
        alert("다시 입력하세요");
      else chat_show(JSON.parse(data));     

    };
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.send("x="+send_data);
    // send()-서버에 데이터 보내는 곳
    //보내는 데이터는 무조건 JSON형식으로 

    re = setTimeout(function(){
      location.reload();
    },10000);

}

function chat_show(data){
 

  var out="";
  $.each(data,function(i,item){
    out += "<li class=chat><div class='write_info'><b class='name'>"+item.writer+"</b><span class='date'>"+item.date+"</span></div><div class='content'>"+item.content+"</div></li>";
  });

  $("#chat_list").html(out);
  $("#content").val('');
  $("#content").focus();


}

