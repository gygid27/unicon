
function ById(name){
    return document.getElementById(name);
}

let out="";//여기서 전역변수를 만드는 것이다. 전역변수: 어디에도 속하지 않은 변수
          // var타입은 재선언이 가능하지만 let타입은 재선언이 불가능하다.
          
     /*
     var a=10;
     var a=40; a=10이라는 변수는 사라지고 a=40 이라는 변수만 남게되는 것이다.
     let b=20;
     let b=30; 오류값이 생김
     var 타입은 변수를 재생성 할 수 있지만 let는 재생성이 안되는 타입이다.※단독사용

     */     
function order(){
    var drink = ById("drink");
    var tmp = ById("ice_hot");
    var size = ById("size");

    var total = drink_menu(drink.value);
    //음료에 대한 금액 구하기 - drink_menu라는 함수를 통해 금액을 구한다.
    if(total==0){//판매하지 않는 음료 입력시
        alert("판매하지않는 메뉴입니다.");
        drink.value='';
        drink.focus();
        return;

    }

    //아이스냐 핫이냐
    // 알파벳을 소문자로 변환 - toLowercase()
    // 알파벳을 소문자로 변환 - toUppercase()
    // if(tmp.value==="ice" || tmp.value==="ICE" || tmp.value==="hot" || tmp.value==="HOT") 밑에 있는걸 간략하게
    if( !(tmp.value.toLowerCase()==="ice" || tmp.value.toLowercase()==="hot")){
        alert("ice 또는 hot 이라고 입력하세요"); // 잘못입력했을 때 알림창이 뜨고 기본값을 아이스로 넣어주기
        tmp.value='ice';
        tmp.focus();
        return;
    }

    //사이즈 M이냐 L이냐 아니면 잘못입력했냐?
    if(!( size.value.toLowerCase()==="m" || size.value.toLowerCase()==="1")){
        alert("M 또는 L 사이즈를 입력하세요");
        size.value="M";
        size.focus();
        return;
    }
    total = total + (size.value.toLowerCase()==='m' ? 0: 1000 );
    // 사이즈가 m이라면 0원, 1이라면 1000원

    out += drink.value + "/" +tmp.value + "/" +size.value+" : " +total+"원<br>";

    ById("list").innerHTML=out;

    //함수안에 생성된 변수는 함수가 종료 되면 제거 된다.
    // 즉 함수안에서 생성한 모든 변수는 다시 재사용 안되고 함수 실행될때 마다
    // 초기화 되서 사용된다.
    // 함수의 밖에 변수를 생성하면 함수의 생명주기(실행,종료) 와 상관없이
    // 이런 변수를 전역변수라고 한다.
    //블록안 {} 만들어진 모든 변수는 지역변수이다.
    // 그 나머지는 전역변수라고 한다. 어디서나 사용 가능하다.


function drink_menu(drink){
    switch(drink){
        case "아메리카노" : return 2000;
        case "카페라떼"  : return 3000;
        case "돌체라떼"  : return 4500;
        case "모카라떼"  : return 3000;
        case "수박주스"  : return 4500;
        case "바나나주스" : return 4500;
        default: return 0;
     }

    }
}