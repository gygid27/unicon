function score(){
    var kor=document.getElementById("kor").value;
    var mth=document.getElementById("mat").value;
    var eng=document.getElementById("Eng").value;

    var res=document.getElementById("result3");

    if (kor==='' || !(kor>=0&& kor<=100)){
        alert("국어점수 입력해라..")    
        kor.focus();
        return;
    }else if (mth==='' || !(mth>=0 && mth<=100)){
       alert("수학점수를 입력해라..")
       mth.focus();
       return;
    }
    else if (eng===""||!(eng>=0&&eng<=100)){
        alert("영어점수를 입력해라..")
        eng.focus();
        return;
    }

    var tot = total(Number(kor),(mth),(eng) );
    var avg_val = tot/3; // ->평균값

var 출력할내용여기에넣어줘="";
    if (kor>=90){
        출력할내용여기에넣어줘 += "국어 : A";
    }
    else if ( kor<90 && 80<=kor){
        출력할내용여기에넣어줘 +=  "국어 : B"; 
    }
    else if (kor<80 && 70<kor){
        출력할내용여기에넣어줘 +=  "국어 : C";
    }
    else{
        출력할내용여기에넣어줘 +=  "국어 : F";
    } 

    if (mth>=90){
        출력할내용여기에넣어줘 += "수학 : A";
    }
    else if ( mth<90 && 80<=mth){
        출력할내용여기에넣어줘 +=  "수학 : B"; 
    }
    else if (mth<80 && 70<mth){
        출력할내용여기에넣어줘 +=  "수학 : C";
    }
    else{
        출력할내용여기에넣어줘 +=  "수학 :F";
    } 

    if (eng>=90){
        출력할내용여기에넣어줘 += "영어 : A";
    }
    else if ( eng<90 && 80<=eng){
        출력할내용여기에넣어줘 +=  "영어 : B"; 
    }
    else if (eng<80 && 70<eng){
        출력할내용여기에넣어줘 +=  "영어 : C";
    }
    else{
        res +=  "영어 : F";
    }

    //등급을
    if(avg_val >=90){
         res += "A"
    }

    else if((80<=avg_val)&&(avg_val<90)){
            res += "B"
    }

    else if((70<=avg_val) && (avg_val<80)){
            res +="C"
    }


    else if (avg_val<70){
        res += "F"
    }

    
    
    


}


function total(k,m,e){
    return(k+m+e);
}