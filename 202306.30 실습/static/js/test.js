// var X = 5;
// var Y = 10;

// document.write( "x" + x + "y:"+ "<br>" + X+ parseInt(X+Y))


// function 오빠야(){
//    var res = document.getElementById("res")
//    res.innerHTML="알려줘서 고마워";
    
// }

// var word="나 이대나온 여자야";

// window.onload=function(){
//   out();
  
// }

window.onload=function(){
   out();
}

function out(){
  var out = '';
  for(var i=1; i<15; i++){
    out+=i+" ";
    //그냥 변수로 주기때문에 [i]로 주는 거 아니다.
    //[i]는 new Array줄때만 주기~! 
  }
  document.getElementById("res").innerHTML=out;
}

// var word="상식,수도,오락시,빠찡코";

// window.onload=function(){
//   out();
  
// }



