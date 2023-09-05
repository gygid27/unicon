/*
 객체란 무엇인가?

 객체는 무엇인든지 객체일 수 있다.

 선향이라는 이름이라는 속성의 

 div 객체 class:a , color:blue
 div 객체 class:a , color:blue

 이걸 하나로 보지않고 2개로 본다 쌍둥이 처럼
 이걸 배열로 설정한다.

*/

let 선향 = new Object(); //객체생성

//속성: attribute, value 값
// 선향.나이=33;
// 선향 -> 객체
// 나이 -> 속성
// 33 -> 값


let pen = new Object();
pen.name="삼색볼펜";
pen.color="black, red, blue";
pen.made="korea";
pen.company="향수";

//저장하는 방법은
document.write(Object,attribute)

document.write(pen.name)


// 객체의 2번째 방법
function person(name, age, addr){ //생성자 함수:함수생성방법을 이용하여 객체를 만드는 방법
  this.name=name;
  this.age=age;
  this.addr=addr;
  //프로토타입: 메모리의 효율성을 높아져야 속도가 빨라진다.
  //프로토타입을 사용한 output의 결과는 1개만 나온다. 어떠한 객체를 가질 수 있다.




  //함수 -->메서드,메소드
  // 함수 --> 독립적으로 실행되는 코드의 집합체
  // 메서드 --> 객체에 귀속되어 객체에 의해 실행되는 코드의 집합체
  //익명함수이다. 
  //객체가 100개라면 메서드도 100개가 된다.
  //문제점. 모든객체의 속성의 값은 다르지만 메소드의 내용은 동일 하다.
            //동일한 내용의 메서드를 다수 생성하여 사용하는 방법은 비효율적이다.
            //컴퓨터의 메모리 공간만 쓸데없이 차지한다.
            //해결책 . 메서드를 하나만 생성이 되도록 만든다.
            //객체를 1000개 생성만해도 메서드는 1개만 존재하게 만든다.
            // 그래서 자바스크립를 다른 말로 프로토타입 기반언어라고 한다.


//   //this를 쓰지 않으면 그냥 변수로 저장됨
//   //이런 식으로 만들꺼라는 설계도만 만든상태이다.
//   //존재하지 않은 상태
}

const baby = { 
  firstName : "신",
  lastName : "향수",
  age : 2
}



// let p1 = new person("신상숭",27,"동구")
// //이렇게 해야지 진짜 객체가 만들어지는 것이다.
// let p2 = new person("김사냥",23,"서구");
// let p3 = new person("송응성",31,"서구");

//객체만드는 2-1방법

const p =new Array();

p.push( new person());

window.onload=function(){
  document.write(p1.name);
  document.write(p2.name);
  document.write(p3.name);
}


