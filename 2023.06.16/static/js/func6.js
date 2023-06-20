let com_num="";
let win=0, lose=0, draw=0;

function start(){
    com_num = Math.floor(Math.random()*6 )+1;

    let com = document.getElementById("com");
    com.src="./image/dice"+com_num+".png";
}



function user(){
    let user_num = Math.floor(Math.random() *6)+1;
    
    let com = document.getElementById("user");
    user.src="./image/dice"+user_num+".png";


    var res = documentById("result");
    if(com == user){
        res.innerText="무";
        draw++;
    }else if(com < user){
            res.innerText="승"
            win++;
    }else{
        res.innerText="패"
        lose++;
    }

    document.getElementById("recoard").innerText=win+"승 "+lose+"패 "+draw+"무";

    

}

