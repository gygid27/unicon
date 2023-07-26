
window.addEventListener("keypress", function(e){ //엔터 누르면 save함수 동작
  if(e.keyCode==13){
    save();
  }

});

const list = new Array(); //date list 객체를 저장할 배열 객체 생성

let update_tag='';
let del_tag='';

window.onload=function(){
    
};

function save(){
  var place=document.querySelector("#place");
  var money=document.getElementById("money");
  var period=document.querySelector("#period");
  var stf =document.querySelector("#satisfaction");
  //input 태그 객체로 가져오기
    if ( value_check([place, money, period])) return;
    //매개변수 입력해주기

    list.push(new date_list(place.value, money.value, period.value, stf.options[stf.selectedIndex].value));
    // alert(list[0].place);

    // 객체 속성 값 객체 속성 값 

    init([place,money,period,stf]);
    
    //화면출력
    screen_show();

    

}

function screen_show(){
  var ul =document.querySelector("#list");
  //for(var i=0; i<list.length; i++)
  var out="";
  for(var i in list){
    out += "<li class='Dlist' data-idx='"+i+"'>"+list[i].view()+"</li>";
  }
  ul.innerHTML=out;
  //inner html을 한 후에 update tag를 가져올 수 있는 것이다.

  update_tag = document.querySelectorAll(".update");
  del_tag =document.querySelectorAll(".del");
  save_tag =document.querySelectorAll(".save_again");


  for(var i=0; i<del_tag.length; i++)
    save_tag[i].addEventListener("click", resave_list); 
  for(var i=0; i<update_tag.length; i++){
    update_tag[i].addEventListener("click", update_list);
  }for(var i=0; i<del_tag.length; i++)
    del_tag[i].addEventListener("click", delete_list); 
}
function resave_list(){
    
}

function update_list(){
    var sibling = this.nextSibling; // 뒤에 있는 
    //뒤에 있는 형제태그
    this.classList.add("hide");
    sibling.classList.remove("hide");
    var idx =this.parentNode.dataset.idx; //현재 수정할 배열의 인덱스 찾기
    var pre_sibling =this.previousSibling;

    pre_sibling.innerHTML="<input type= 'text' id='re_place' value='"+list[idx].place+"'>"+
    "<input type= 'text' id='re_money' value='"+list[idx].money+"'>"+
    "<input type= 'text' id='re_period' value='"+list[idx].period+"'>"+
    "<select id='re_satisfaction'><option value='1'>1</option><option value='2'>2</option>"+
    "<option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select>";
    
    
     
}

function delete_list(){
    var del_idx = this.parentNode.dataset.idx;
    //list.splice(2,2); 2번인덱스 부터 2개 추출하기
    list.splice(del_idx,1);
    screen_show();
}

function value_check(input){ //input 값의 유효 확인
  const msg=["데이트 장소를 입력하세요", "데이트비용을 입력하세요",
"연애가 처음인가요?"];

  for(var i=0; i<input.length; i++){
      if(input[i].value==''){
        alert(msg[i]);
        input[i].focus();
        return true;
        //input에 뭐하나라도 입력하지 않았다.
      }
   }
   return false;
   //전부다 입력했다.

}

function init(input){ // input을 초기화
    for(var i=0; i<input.length-1; i++){
      input[i].value='';
    } //input 태그의 value 비우기

     input[3].options[4].selection=true; // 만족도 기본값 5 설정
     input[0].focus(); //데이트장소 input에 마우스커서 위치하기

}

function date_list(place, money, period, satisfaction){
  this.place=place;
  this.money=money;
  this.period=period;
  this.satisfaction=satisfaction;
}

date_list.prototype.view=function(){
  return "<div class='text'><span class='place_vw'>"+this.place+"</span>"+
  "<span class='money_vw'>"+this.money+"</span>"+
  "<span class='period_vw'>"+this.period+"</span>"+
  "<span class='stf_vw'>"+this.satisfaction+"</span></div>"+
  "<b class='update'><i class='bi bi-airplane-engines-fill'></i></b>"+
  "<b class='save_again hide'><i class='bi bi-emoji-heart-eyes-fill'></i></b>"+
  "<b class='del' onclick=''><i class='bi bi-cloud-hail'></i></b>";


}




