function my_order(){
    var main_drink = document.getElementById("drink");
    var  temp1 = document.getElementById("temp");
    var  size1= document.getElementById("size");
    
    var order_list = document.getElementById("order_result");

    var out=""
    var cafe=menu(main_drink.value);
    out+=main_drink.value+"금액"+cafe+"원<br>";

    var cafe1=menu(temp1.value);
    out+=temp1.value+"금액"+cafe1+"원<br>";

    var cafe2=menu(size1.value);
    out+=size1.value+"금액"+cafe2+"원<br>";

    if(typeof(cafe)==='string' || typeof(cafe1)==='string' || typeof(cafe2)==='string'){
        alert(".")
    }

}



function menu(name){
    var money=0;
    switch(name){
        case "아메리카노" :
            money=2000;
            break;
        case "바닐라 라떼" :
            money=3500;
            break;
        case "자바칩 프라포치노" :
                money=3500;
                break;
        case "돌체라떼" :
                money=3500;
                break;
        case "라이트 키위 라임 피치오" :
                money=5000;
                break;
                default:
                    return;                

    }
}