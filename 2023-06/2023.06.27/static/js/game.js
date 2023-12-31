
const fruit=[
  '수박','사과','귤','참외','토마토',
  '키위','감','배','포도','무화과',
  '석류','대추','망고','유자','자두',
  '딸기','복숭아','바나나','멜론','라임',
  '구아바','홍옥','용과','페피노','체리',
  '레몬','자몽','살구','파파야','코코넛',
  '홍시','복분자','머루','잣','밤',
  '낑깡','한라봉','두꾸','산딸기','뱀딸기',
  '앵두','레드향','신고','람부탄','두리안',
  '으름', '거봉', '여주', '만다린', '모과'];


const Brow=5;
const Bcol=5;

let game_state =false; // 시작여부확인
let bingo=new Array(); //빙고 숫자 배열


window.onload=function(){
    var board=document.querySelector("#board");
    var out="";
    for(var i=1; i<=Brow; i++){ //줄
      out +="<tr>";
      for(var k=1; k<=Bcol; k++){ //칸
        out += "<td class='Gnum'></td>";
      }
        out += "</tr>";
    }
      board.innerHTML=out;

      var state = document.querySelector("#state_board");
      var out="";
      for(var i=0; i<=1; i++){
        out += "<tr>";
        for(var k=1; k<=25; k++){
          out+="<td class='stnum'>"+(fruit[i*25+k-1])+"</td>";
        }
        out += "</tr>";
      }
      state.innerHTML=out;
}

function init(){
  //25개 숫자 중복없이 랜덤없이 생성
    for(var i=0; i<25; i++){
      var tmp = Math.floor(Math.random()*50)+1;
      if(bingo.indexOf(tmp) == -1)
        bingo.push(tmp);
        else
          i--;
    }
    //td 클릭 이벤트 등록과 25개 숫자  td에 출력

    var td = document.querySelectorAll(".Gnum");
      for( var i=0; i<td.length; i++){
        td[i].addEventListener("click" , bingo_check);
        td[i].innerText=fruit[bingo[i]-1];
    }

    var stat= document.querySelectorAll(".stnum");
    for( var i=0; i<stat.length; i++){
      stat[i].addEventListener("click", state_check);
    }
}

function start(){
    if(game_state){
      alert("게임이 진행중 입니다.");
      return;
    }
    init();
    game_state=true;
}

function bingo_check(){
      var end=0;
      var row=0,col=0;
      var click_num=0;
      //클릭한 곳의 칸 체크 표시하기
      var td= document.querySelectorAll(".Gnum");
      for(var i=0; i<td.length; i++){
        if( td[i] == this){
          td[i].classList.add("Gnum_check");//클릭한곳 클래스 추가
          click_num=bingo[i];
          bingo[i] = 0;
          //빙고 i인덱스를 0으로 바꿔라
          //0 5개를 모여야지 빙고가 완성되기 때문에
          break; // 클릭에 대한 동작이 끝났으므로 반복문 종료
        }
      }

      // start_board의 과일에 클릭한 과일배경색 바꾸고 
      //직접 클릭해서 배경색 변경을 할 수 있게
      var stat = document.querySelectorAll(".stnum");
      stat[click_num-1].classList.add("st_check");

      // 5빙고 찾기
      var cross=[0,0]; //대각선 방향을 체크하기 위한 배열
      for(var i=0; i<Brow; i++){// 줄을 의미함
          for(var k=0; k<Bcol; k++){ //칸을 의미한다.
              if(bingo[i*5+k] ==0 )// 가로방향으로 한줄씩 0이 몇개인가 확인
              row++; // 한칸에 0이 있을때마다 1씩증가
              if(bingo[k*5+i] ==0)// 세로방향으로 한줄씩 0이 몇개인가 확인
              col++;
          }
          if(bingo[i*6] == 0) cross[0]++; // 대각선방향(좌상-우하)
          if(bingo[i*4+4] == 0) cross[1]++;// 대각선방향(우상-좌하)
          if(cross[0]==5) end++;
          if(cross[1]==5) end++;
          if(row==5) end++;  // 한줄에 0이 5개라면 1줄 빙고 
          if(col==5) end++; // 세로방향 한줄에 0이 5개라면 1줄 빙고
          row=0;
          col=0;
      }
      if(end==5){
        alert("빙고!!!! 당신이 이겼음.");
        game_state=false;
        bingo=new Array();
        var td = document.querySelectorAll(".Gnum");
        for( var i=0; i<td.length; i++){
        td[i].removeEventListener("click" , bingo_check);
        
    }

    var stat= document.querySelectorAll(".stnum");
    for( var i=0; i<stat.length; i++){
      stat[i].removeEventListener("click", state_check);
    }

        return;
      }

   
}
function state_check(){
  if(this.classList.contains("st_check")) //st_check클래스가 있냐?
      this.classList.toggle("st_check"); // 있다면 클래스 삭제
  else    
      this.classList.add("st_check"); // 없다면 클래스 추가
}