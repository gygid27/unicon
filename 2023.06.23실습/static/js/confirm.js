
window.onload=function(){
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

function select_count(){
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
    for(var i=2; i<=7; i++){
      win_num.push(parseInt(lotto[sel_count][i]));
    }

    for(var line=1; line<=5; line++){
      var input = document.getElementsByClassName("input"+line);
      var num_arr = new Array();
  
  //조건을 여기 위치에 준다. 입력한 곳만 주기
    
    for( var i=0; i<input.length; i++){
      if( input[i].value!= ''){
        var val = input[i].value;
        if(win_num.indexOf(parseInt(val))== -1){
          num_arr.push( "<span>" + input[i].value+"</span>");
        }else{
          //내가 입력한 번호가 당첨번호가 0
          num_arr.push("<strong class='red'>"+val+"</strong>");
        }
        
      
    }
    }
    if(num_arr.length==6){
        var resN = document.getElementsByClassName("resultNumber");
        resN[line-1].innerHTML=num_arr;
    }
  }   
  // 결과확인 버튼을 클릭하면 input 태그에 입력한 숫자를 모두 선택번호 td에
  //출력하기
}