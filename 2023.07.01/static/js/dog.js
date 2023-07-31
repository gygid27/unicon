//사진를 불러오는 링크가 길어서 let, var, const를 이용해서
// 사진불러오는 링크 넣어주기 (즉 간단하게 사용하기 위해서)

var path = "url(./static/image/";

const name =[
    "푸들.jpg","포메리안.jpg","퍼그.jpg",
    "퍼그.jpg","파피용.jpg","코커스파니엘.jpg","케언테리어.jpg",
    "치와와.jpg","챠우챠우.jpg","진돗개.jpg","저먼셔페드.jpg",
    "웰시코기.jpg","요크셔트리어.jpg","아프간하운드.jpg","시베리안허스키.jpg",
    "시바견.jpg","스탠다드푸들.jpg","샤페이.jpg","사모예드.jpg","비숑.jpg",
    "비글.jpg","불테리어.jpg","불독.jpg","보스턴테리어.jpg","보더콜리.jpg",
    "베들링턴테리어.jpg","미니어처슈나추어.jpg","말티즈.jpg","달마시안.jpg",
    "닥스훈트.jpg","뉴펀들랜드.jpg","골든리트리버.jpg"
]

//여기서 32강 16강 8강 4강의 배열을 열어준다.
const name2 = new Array(); // -> 16강 용도
const name3 = new Array(); // -> 8강 용도
const name4 = new Array(); // -> 4강 용도
const name5 = new Array(); // -> 준결승


// 사진을 랜덤으로 넣을 새로운 배열 함수 가져오기 이건 전역변수로 가져오기
var comp = new Array();

// 랜덤으로 된 숫자를 정돈해주기
var nums = new Array();


var is32=true;
var is16=false;
var is8=false;
var is4=false;
var is2=false;
var final=false;


window.onload=function(){
    var pic_left = document.getElementById("pic_left");
    //왼쪽에 보일 사진 불러오기
    var pic_right = document.getElementById("pic_right");
    // 오른쪽 보일 사진 불러오기

    
    while(comp.length < 32){
        var temp = Math.floor(Math.random()*32);
        if(!comp.includes(temp)){
            comp.push(temp)
        }
    }

    for(var i=0; i<32; i++){
        nums.push(name[comp[i]]);
    }

    pic_left.style.background=path+nums[0];
    pic_left.style.backgroundSize="contain";
    pic_left.style.backgroundRepeat="no-repeat";
    pic_left.style.backgroundPosition="center";

    pic_right.style.background=path+nums[1];
    pic_right.style.backgroundSize="contain";
    pic_right.style.backgroundRepeat="no-repeat";
    pic_right.style.backgroundPosition="center";

    

    pic_left.addEventListener("click", choice);
    pic_right.addEventListener("click", choice);


    document.getElementById("head").innerHTML="강아지 월드컵"
}


    a=0; // 왼쪽 사진이 나오는 순서
    b=1; // 오른쪽 사진이 나오는 순서
    //전역변수로 뺴줘야 다 적용이 되기때문에 사용하는 것

//onclick이벤트로 만든 choice에 대한 함수만들기
function choice(){
    var sh = this.style.background;

    if(name2.length<16 && is32){
        for(var i=0; i<=32; i++){
            if(sh.includes(nums[i])){
                name2.push(nums[i]);

                a=a+2;
                b=b+2;
            }
        }

        alert(name2)

        pic_left.style.background=path+nums[a];
        pic_left.style.backgroundSize="contain";
        pic_left.style.backgroundRepeat="no-repeat";
        pic_left.style.backgroundPosition="center";

        pic_right.style.background=path+nums[b];
        pic_right.style.backgroundSize="contain";
        pic_right.style.backgroundRepeat="no-repeat";
        pic_right.style.backgroundPosition="center";
    }

    

    //화면 구성해준 왼쪽오른쪽 배경스타일을 계속 반복하여
    //작성해야하기 때문에 간단하게
    //쓰기 위해서 this= url("./static/image/푸들.jpg")
    //변수 sh로 바꿔준다.
    

}