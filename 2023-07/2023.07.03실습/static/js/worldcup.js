
//기본배열, 모든 이미지를 다 가지고 있는 기본

const image=["골든리트리버.jpg","뉴펀들랜드.jpg","닥스훈트.jpg","달마시안.jpg","말티즈.jpg","미니어처슈나추어.jpg",
"베들링턴테리어.jpg","보더콜리.jpg","보스턴테리어.jpg","불독.jpg","불마스티프.jpg","불테리어.jpg","비글.jpg","비숑.jpg","사모예드.jpg",
"샤페이.jpg","스탠다드푸들.jpg","시바견.jpg","시베리안허스키.jpg","아프간하운드.jpg","요크셔트리어.jpg","웰시코기.jpg","저먼셔페드.jpg", 
"진돗개.jpg","챠우챠우.jpg","치와와.jpg","케언테리어.jpg","코커스파니엘.jpg","파피용.jpg","퍼그.jpg","포메리안.jpg","푸들.jpg"

]

const kind = ["골든리트리버","뉴펀들랜드","닥스훈트","달마시안","말티즈","미니어처슈나추어",
"베들링턴테리어","보더콜리","보스턴테리어","불독","불마스티프","불테리어","비글","비숑","사모예드",
"샤페이","스탠다드푸들","시바견","시베리안허스키","아프간하운드","요크셔트리어","웰시코기","저먼셔페드",
"진돗개","챠우챠우","치와와","케언테리어","코커스파니엘","파피용","퍼그","포메리안","푸들"
]

let 토너먼트1=new Array(); //현재 토너먼트
let 토너먼트2=new Array(); //다음 토너먼트
let 순서= new Array();
let round = 32; //현재회차 (처음은 32강)
let count = 1; // 현재 순서 (처음은 1번)
//1/16 에서 1를 표현하는 아이


function 순서섞기(){
  for(var i=1; i<=round; i++){
    var tmp = Math.floor(Math.random()*round);
    if(순서.indexOf(tmp) == -1){
      순서.push(tmp);
    }else{
      --i;
    }
  }
}
function 태그선택(id){
      return document.getElementById(id);
}

window.onload=function(){
    var title = 태그선택("title")
    title.innerHTML=round+"강 "+count+"/"+(round/2);

    //토너먼트1= image; 이건 똑같은 복사가 아니라 참조 복사 같은 공간 이미지 배열의 값이 달라지지 않음
    토너먼트1 = Array(round).fill().map((arr,i) =>i);
    //0부터 31까지 숫자 토너먼트1 배열에 저장
    
    //참조복사와 얕은 복사의 차이점


    순서섞기();
    show();
    //이미지 클릭 이벤트 등록
    var left=태그선택("left");
    var right=태그선택("right");
    left.addEventListener("click",선택);
    right.addEventListener("click",선택);

    
    

}

function final(id, nid){
      var n = 태그선택(nid);
      n.style.display="none";
      var 최종 = 태그선택(id);
      최종.style.width="100%";
      최종.style.height="100vw";
}


function 선택(){
     if( this == 태그선택("left")){
      토너먼트2.push(토너먼트1[순서[count*2-2]]);
     
     }else{
      토너먼트2.push(토너먼트1[순서[count*2-1]]);
      }
      //결정이 된 순간만인 상태

      if(round==2) final("left","right");

     if(count==round/2){
       round= round/2;
      count=0;
      //끝났으니깐 다시 1로 시작해야 한다.
      순서=new Array();
      //초기화 해서 다시 16강으로 바꿔주기

      

      순서섞기();
      토너먼트1 = 토너먼트2.map((i) =>i);
      토너먼트2=new Array();

     }
     count++;
     //몇번째 클릭했는지를 알려주는 아이
     var title = 태그선택("title")
     title.innerHTML=round+"강 "+count+"/"+(round/2);
     show();

}
function show(){
    var left= 태그선택("leftimg");
    var right=태그선택("rightimg");
    var leftText=태그선택("leftText");
    var rightText=태그선택("rightText");

  

    left.src="./static/image/"+image[토너먼트1[순서[count*2-2]]];
    //순서[0] 덕분에 화면에 이미지가 나올 수 있는 것이다.
    right.src="./static/image/"+image[토너먼트1[순서[count*2-1]]];

    leftText.innerHTML=kind[토너먼트1[순서[count*2-2]]];
    rightText.innerHTML=kind[토너먼트1[순서[count*2-1]]];

}




