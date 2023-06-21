
// 문자열에서 특정 문자열의 위치를 찾는 방법   : indexof
// indexOF는 해당 문자열의 위치(인덱스)를 알려준다.
// 배열에서도 사용가능 문자열에 있던 것도 
// 배열에서도 indexOF를 사용하여 값을 찾을 수 있다.
// indexOF함수로 일치하는 데이터를 찾았다면 인덱스를 반환
//인덱스는 0부터시작
//-1은 일치하지 않는 데이터가 없다는 것이다.
//-1로 반환시켜주는 것이다.


const name=["이순신","최무선","강감찬","김유신","김춘추","이사부",
"을지문덕","정도전", "정약용","장영실","한석봉","박팽년","안중근",
"김선향","김승겸","김철환","김태형","박수호","송은선","신상수",
"안지영","안태균","이상준","이영주","이우주","이충현","임민지",
"정길원","정예림","하지원"];

window.onload=function(){
    let srh_bt = document.getElementById("search_bt");
    srh_bt.addEventListener("click", search_name);
    let input = document.getElementById("search");
    input.addEventListener("keypress",function(e){
            if(e.keyCode == 13)
            search_name();
    });
    //search name이라고 적으면 안돼는 이유는
    //input에 keypress라고 입력해줬기 때문에
};
//addEventListener('이벤트명', 동작할 함수)

function search_name(){
        var input = document.getElementById("search");
        let word = input.value;

        let res = document.getElementById("search_result");
        var out="";
    

        for(var i=0; i<name.length; i++){
        if( name[i].indexOf(word) != -1){
            out+="<p>"+name[i]+"</p>";
        }
        }
        res.innerHTML=out;
        input.value=""; //input태그의 내용 비우기
        input.focus(); // 검색 input태그에 커서 놓기 다음검색을 위해
        //배열안에 있는 문자열에서 찾는 것
        //!=-1, >=0 둘다가능하다.
        //indexOf 내가 찾고싶은 문자열을 찾을 수 있다.
        //일치않는 값 indexOf 찾아주는 값이다.
     //}
}