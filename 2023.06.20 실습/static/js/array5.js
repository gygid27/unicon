
let show=false; //start 버튼 클릭 유무
let cmp_num=new Array(); //두개의 숫자를 비교하기 위한 배열
let choice = new Array(); //클릭한 두개의 span태그 인덱스 저장 배열
let end=0; // 4개가 되면 게임 끝
let step=0; // 클릭횟수 제한을 위하 변수

let num = new Array(); // 화면에 표시되는 배열
let board=new Array();

function init(){ //초기화  넣을 숫자를 만드는 곳
    //중복없이 랜덤값 넣기
    //indexOf를 이용해서 -1이 나오면 일치하는게 없다ㅏ.
    //  즉 중복되는 숫자가 없다는 뜻이니까  배열에저장
    num.push(Math.floor(Math.random()*10)+1 );
    //num배열에 대한 10개의 랜덤값을 저장한다.
    for(var i=1; i<=3; i++)
        // 3개를 저장하는 것
        { 
        var temp = Math.floor(Math.random()*10)+1;
        if ( num.indexOf(temp) == -1){
            num.push(temp);
            // num.push값이 1개 더 추가가 되었기 때문에 4개가 저장되는 것이다.
        }else{
            i--;
        }
    }

    board.push(Math.floor(Math.random()*8) ); // 숫자를 잡아주는 위치
    for(var i=1; i<=7; i++){
        var temp = Math.floor(Math.random()*8);
        if ( board.indexOf(temp) == -1){
            board.push(temp);
        }else{
            i--;
        }
    }
    var count = document.getElementById("count");
    count.innerText=0;
    
}
    


window.onload=function(){
    init(); //초기화 함수 실행
    let start = document.getElementById("start");
    start.addEventListener("click",play);
    // html에 onclick를 사용하지 않고 자바스크립트에
    // 사용하기 위해 쓴 함수
    // addEventListener 를 써야  this 객체를 사용할 수 있음.

    let pic = document.getElementsByClassName("picture");
    for( var i=0; i<pic.length; i++){
        pic[i].addEventListener("click",same_search);
        //this객체를 사용하도록 연결 same_search 해줌
    }

}
function play(){ 
        let pic = document.getElementsByClassName("back");
        for( var i=0; i<pic.length; i++){
            pic[board[i]].innerHTML = num[i%4]  ;
            }


    setTimeout(function(){
        let pic =document.getElementsByClassName("back")
        for(var i=0; i<pic.length; i++){
            pic[i].style.display="none";
        }
        show=true;
    },2000);
} // 지정한 시간 이후에 실행되는 얘
function  same_search(){// td을 클릭했을 때 동작
    if(!show){ // show변수가 false라면 not연산에 의해 true가 적용
                // show변수 true라면 not연산에 의해 false가 적용된다.
            alert("start 버튼을 클릭하세요");
            return; // start 버튼을 클릭하지 않았으면 same_search함수를 
            //실행시키지 않는다.
    }

    // 클릭한 횟수 증가시키기
    if(step == 20){ //20번 클릭하면 더이상 진행되지 않게
        //show는 false로 바꾸고 함수로 종료됨
        alert("다음기회에 도전하세요");
        show=false;
        return;
    }
    var count = document.getElementById("count");
    count.innerText = ++step;
    
    
    // this.style.background="red";
    var child = this.childNodes[0]; // child변수는  td태그의 자식인 span이다.
    child.style.display="inline";

    let span =document.getElementsByClassName("back")
    for(var i=0; i<span.length; i++){
        if(span[i] === child)
            choice.push(i); // 클릭한 td의 span태그의 인덱스를 배열에 저장
    }
    cmp_num.push(parseInt(child.innerText)); //클릭한 td>span의 숫자를 배열에 저장
    if( cmp_num.length == 2){ // 배열에 숫자 2개가 저장되어있다면 비교
        if(cmp_num[0] == cmp_num[1]){
                cmp_num=new Array();
                choice=new Array();
                end++; // 같은 숫자를 찾으면 end변수 1씩 증가
            }else{
                setTimeout(function(){
                    cmp_num = new Array();
                    let pic =document.getElementsByClassName("back")
                    for(var i=0; i<choice.length; i++){
                        pic[choice[i]].style.display="none";
                        //내가 선택한 녀석 외에는 안보이게 하는 방법
                    }
                    choice= new Array();        
                    
                }, 500);

                
            }
        }
            if(end == 4){
                alert("게임 끝");
                show=false;
            }   
    //숫자에 해당하는 함수는 Child이다.

    // this td태그 밑에 있는 자식들을 배열도 들어있음
    //몇번째 자식인지를 알수 있음 배열 함수는 0번부터가 첫번째여서
    //0을 넣어 첫번째 자식을 찾을 수 있다.
    //children - 모든 자식태그를 htmlcollextion 배열로 가져온다.
    // childNode - 모든 자식태그를 nodeList의 배열로 가져온다. 
    // firstChild - 첫번째 자식 태그
    // lastChild - 마지막 자식 태그
    
}

//getElementById() 또는 getElementByClassName() 등을 사용하면
//태그의 객체라는 것이 반환된다. 태그의 객체를 변수에 담아서 사용해왔다.
// 자바스크립트에서는 html 태그를 element, 요소 또는 객체라고한다.
// 객체는? 하나의 모양이나 행동 상황을 담고있는 것 하나의 값이다.
// 객체를 표현하는 방법중에 자기 자신을 의마하는 this가 있다.
// same_search함수를 실행 시킨건 td태그이다.
// 즉  td라는 객체에 의해 same_search함수가 실행된 것이다.
// same_search함수안에서 this라고 사용하면 same_search함수를 실행시킨
//td 태그를 의미한다. 
//this 나를 실행시킨 객체를 표현하게 되는 것