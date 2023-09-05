window.onload=function(){

  // var body = document.getElementsByTagName("body");
  // body[0].innerHTML="<div>오늘 비오냐?</div>";
  //Elements 이기 때문에 배열[0] 써주는 것이다.
  //.innertext 하면 "<div>오늘 비오냐</div>" 까지 다 나온다. 문자로 취급되기 때문에

  // var node = document.createElement("div");
  //  //node 태그를 의미하는것, 새로은 태그 만들기

  //  node.setAttribute("id","rain");
  //  //태그에 속성을 부여하는 방법

  //  node.addEventListener("click",function(){alert("나는 행복해");})

  // var text = document.createTextNode("오늘 비오긴 하냐?");
  // //태그 안에 글씨를 넣어주고 싶을 때

  // node.appendChild(text);
  // //글씨를 만들어 줬으면 넣어주기 

  // body[0].appendChild(node);
  //  //새로운 로드를 누구 밑에 넣어줄 것이냐
  //  //만든 태그를 누구 밑에 넣어줄것이냐


}
 
function exit(){
  window.close();
}

let child="";
function winopen(){
  child = window.open("./child.html","_blank","width=500,height=500");
  //window.open("주소","새창의 이름 또는 타켓","옵션");
  


  // open함수의 두번째 인자로
  // _blank 또는 아무것도 넣지않으면
  // 현재 브라우저에 새탭으로 열기하려면 옵션부분에 너비,높이 지정 안함.
  // 너비와 높이를 지정하면 새 브라우저로 열기가 된다.
  //옵션은 창의 크기 높이 스크롤 모드 타이틀 바를 넣어줄것인가 하여튼 뭐든 넣어라
  //데이터 주고받기 하기
}

function child_getName(){
  //자식창의 id가 name인 input값 가져오기
  var name = child.document.getElementById("name").value;
  //부모창의 div출력
  document.getElementById("name").innerHTML=name;
}


function child_close(){
  child.window.close();
}

function child_write(){
  child.document.getElementById("message").innerText="하하하하하하하하하핳"; 
}


