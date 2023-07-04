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

// window.onload=function(){
//    out();
// }

// function out(){
//   var out = '';
//   for(var i=1; i<15; i++){
//     out+=i+" ";
//     //그냥 변수로 주기때문에 [i]로 주는 거 아니다.
//     //[i]는 new Array줄때만 주기~! 
//   }
//   document.getElementById("res").innerHTML=out;
// }

// // var word="상식,수도,오락시,빠찡코";

// // window.onload=function(){
// //   out();
  
// }

// window.onload=function(){
//       var avg = document.getElementById("avg");
//       avg.addEventListener("click",score);


// }





// function score(){
//    var kor = document.getElementById("kor").value;
//   var eng = document.getElementById("eng").value;
//   var mat =  document.getElementById("mat").value;
//   var sci = document.getElementById("sci").value;
//   // 과목들의 점수들 

//   var sum = Number(kor) + Number(eng) + Number(mat) + Number(sci);

//   var avg1 = sum/4;

//   var right = document.getElementsByClassName("right");
//   right[0].innerHTML=avg1;

// }

window.onload=function(){
 var cal = document.getElementById("cal");
 cal.addEventListener("click", score);
}

function score(){
var kor = document.getElementById("kor").value;
var eng = document.getElementById("eng").value;
var mat = document.getElementById("mat").value;
var sci = document.getElementById("sci").value;
var gym = document.getElementById("gym").value;
var mis = document.getElementById("mis").value;
var his = document.getElementById("his").value;

var sum = Number(kor) + Number(eng) + Number(mat) + Number(sci) + Number(gym) + Number(mis) + Number(his) ;

var result_box = document.getElementsByClassName("result_box");
 avg1 = sum/7;

result_box[0].innerHTML=parseInt(avg1);

var total_box = document.getElementsByClassName("total_box");

total_box[0].innerHTML=parseInt(sum);






}












