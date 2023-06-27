
window.onload=function(){

  //여기에 input에 키보드로 입력이벤트를 등록 시키기
  // 키보드 이벤트는 press가 일반적이기한데
  // 모든 input에 이벤트 등록해야함!!
  var num645 = document.getElementsByClassName("num_645");
  for(var i=0; i<num645.length; i++){
    num645[i].addEventListener("keyup", function(e){
     
        
        /*isNaN =숫자가 아닌 경우가 = true, 숫자만 경우 false인 함수*/
      var n = parseInt(this.value);
      if( !(1<=n && n<=45) ){
        alert("1~45 숫자만 입력하세요");
        this.value='';
        this.focus();
      }
      if( e.keyCode<48 || (e.keyCode >57 && e.keyCode<96) || e.keyCode >105){
        return;
      }// 숫자키와 키패드 숫자를 제외한 모든 키를 무시하기 위한 if문
      
     
    });
  }

  var drwNo = document.querySelector("#drwNo");
  var btnDefault = document.querySelector("#btnDefault");
  var btnSearch = document.querySelector("#btnSearch");

  btnDefault.addEventListener("click", data_default);
  btnSearch.addEventListener("click", data_search);

  var file = document.querySelector("#lotto");
        // var file = document.getElementById("lotto");
            file.addEventListener("input", function(e){
            let target = e.target; //선택된 파일 참조\
            let files = target.files; //선택된 파일은 배열의 형식으로 저장됨
            // 첫번째 파일 참조를 해야 내가 선택한 파일을 읽을 수 있다.
            let reader = new FileReader();
            reader.addEventListener("load", function(){
                var str = reader.result;
                var temp = str.split("\n");


                for( var i in temp){
                    lotto.push(temp[i].split("\t"));
                }
                // 배열에서만 사용가능하다.
                //배열은 몇번까지다가 정해져 있어서
                //배열에서 주로 사용가능하다.  i 에서는 0~1072까지 
                //alert(lotto[0][3]);

            });
            reader.readAsText(files[0]);
        
        });

        var opt="";
        for(var i=1073; i>=1; i--)
            opt += "<option>"+i+"</option>";
          drwNo.innerHTML=opt;
          drwNo.addEventListener("change", select_count);  
         

}

let sel_count=0; //발표 회차 선택

function select_count(){ //select 태그의 값을 변경하면 실행되는 함수
  sel_count= this.selectedIndex;
      
}

function data_default(){

}

function data_search(){

    if(lotto.length==0){
      alert("로또 파일을 먼저 열어주세요 ");
      return;
    }

    let win_num=new Array();
    for(var i=2; i<=7; i++){// 내가 선택한 회차 당첨번호 win_num
      win_num.push(parseInt(lotto[sel_count][i]));
    }

    for(var line=1; line<=5; line++){
      var input = document.getElementsByClassName("input"+line);
      var num_arr = new Array();
      var bonus_str="<span>"+lotto[sel_count][8]+"</span>";//보너스에 관한 내용 변수
      var isBonus=false;
      var win_cnt=0;// 일치여부 갯수 저장 변수
      var rank=0; //등수를 표현하는 것
  
  //조건을 여기 위치에 준다. 입력한 곳만 주기
    
    for( var i=0; i<input.length; i++){// 내가 입력한 만큼 반복해주는 for문
      if( input[i].value!= ''){
        var val = input[i].value;
        if(win_num.indexOf(parseInt(val))== -1){// 내가 입력한 번호가 당첨번호가 없다.
          num_arr.push( "<span>" + input[i].value+"</span>");
        }else{
          //내가 입력한 번호가 당첨번호가 있다.
          num_arr.push("<strong class='red'>"+val+"</strong>");
          win_cnt++;// 여기에서 당첨번호몇개인지 구하기 (변수가 필요)
        }
        if(val == parseInt(lotto[sel_count][8])){
          isBonus=true;
        }
      }
    }
switch(win_cnt){
    case 6: rank=1; break;// 당첨번호일치가 6개
    case 5: if(isBonus) rank=2; // 당첨번호일치가 5개에 보너스
            else rank=3; break; // 당첨번호일치가 5개만
    case 4: rank=4; break;// 당첨번호일치가 4개
    case 3: rank=5; break;// 당첨번호일치가 3개 5등
    default:
      rank="X"; // 당첨번호가 2개가 이하면 X        
}    
    if(isBonus){
      bonus_str= ("<strong class='red'>"+lotto[sel_count][8]+"</strong>");
      win_cnt = win_cnt!=6 ? win_cnt+"Bonus" : win_cnt;
    }
    if(num_arr.length==6){
        var resN = document.getElementsByClassName("resultNumber");
        resN[line-1].innerHTML=num_arr;
        //여기에서 보너스번호 출력코드 작성
        //resultBonus
        var bonus = document.getElementsByClassName("resultBonus");
        bonus[line-1].innerHTML=bonus_str;
        //여기에 일치 갯수 출력코드 작성 resultNumberSu
        var NumberSu= document.getElementsByClassName("resultNumberSu");
        NumberSu[line-1].innerText=win_cnt;

      var grade = document.getElementsByClassName("resultNumberGrade");
      grade[line-1].innerHTML=rank;

    }
  }   
  // 결과확인 버튼을 클릭하면 input 태그에 입력한 숫자를 모두 선택번호 td에
  //출력하기
}



