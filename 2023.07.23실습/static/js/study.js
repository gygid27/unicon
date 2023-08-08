window.onload=function(){

    var plus = 0;
    //리셋되지 않는다. 계속 누적해서 쓸 수 있따.

var left  = document.getElementById("left");
var right = document.getElementById("right");
var add   = document.getElementById("add");

//변수는 계속 값이 변하니깐 영어로 쓰고 
//저장해주는 아이
//var left, var right,  var add


document.getElementById("wrap");

// left.addEventListener("click", love("사","랑"));

right.addEventListener("click",love("선","물"));

add.addEventListener("click",function(){
    plus=plus+1;
})

//매개변수는 여러함수로 돌려돌려 쓰고 싶을 때

// love();
//밖에서 만들어온 함수를 안으로 불러 주고 싶을 때 사용한다.


}

function love(a, b){
    document.getElementById("wrap").innerHTML=a+b;
}