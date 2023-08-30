let num = new Array(); // 화면에 표시되는 숫자의 저장배열
let board = new Array();  // 숫자가 표시될 위치의 저장배열

function init(){
    num.push(Math.floor(Math.random()*10)+1);
    for(var i=1; i<=3; i++ ){
        var temp = Math.floor(Math.random()*10)+1;
        if(num.indexOf(temp)== -1){
            num.push(temp);
        }else{
            i--;
        }
    }
    // 1~10까지의 숫자를 4번 뽑아야 한다.
    //배열은 0부터 시작하므로 4번이 3번까지로 표현되는 것

    board.push(Math.floor(Math.random()*8)+1);
    for(var i=1; i<=7; i++){
        var temp = Math.floor(Math.random()*8)+1;
        if(board.indexOf(temp)== -1){
            board.push(temp);
        }else{
            i--;
        }
    }
    // 숫자의 위치8개를 랜덤으로 저장해주기
    // 중복값이 없이 중복값이 없이 해주는 것은 indexof를 사용하는 것이다.

    
}