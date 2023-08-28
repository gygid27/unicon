let house=new Object();

$(function(){

    $.getJSON("./data/index.json",function(data){
        house=data;
        var set = new Set();
        $("#main").append('<div class="expenBox title"><h3>지출내역</h3>'+
        '<span class="categoryText">분류</span>'+
        '<span class="moneyText">금액</span>'+
        '<span class="detailText">내용</span></div>');

        $.each(data.지출,function(i,d){  // 지출 부분 화면 출력
            set.add(d.분류);
            $("#main").append('<div class="detail">'+
            '<span class="categoryText">'+d.분류+'</span>'+
            '<span class="moneyText">'+d.금액.toLocaleString()+'원</span>'+
            '<span class="detailText">'+d.내용+'</span>'+
            '</div>');
        })

        // $("#main").append('<div class="incomeBox title"><h3>수입내역</h3>'+
        // '<span class="categoryText">분류</span>'+
        // '<span class="moneyText">금액</span>'+
        // '<span class="detailText">내용</span></div>');
        $.each(data.수입,function(i,d){ // 수입 부분 화면 출력
            set.add(d.분류);
            $("#main").append('<div class="detail">'+
            '<span class="categoryText">'+d.분류+'</span>'+
            '<span class="moneyText">'+d.금액.toLocaleString()+'원</span>'+
            '<span class="detailText">'+d.내용+'</span>'+
            '</div>');
        })



        var cg = Array.from(set);  
        $.each(cg,function(i,c){   // 분류 ㅎul 태그 추가
            $("#category").append('<li><input type="checkbox" name="category" value="'+c+'">'+c+'</li>')
        });
        $("input[name=catgory]").change(categorySearch);

        $("#icon").click(function(){  // 사이드 접펼
            $(this).toggleClass("open");
            $("#side").toggleClass("sideopen");
            $("#wrap").toggleClass("sideactive");
        });

        $("#word").on("keyup",keywordSearch);// input 입력
        $("#money").on("keyup",moneyBelow); // 금액 입력 부분 
        $("input[name=category]").click(categorySearch);
    })
    function categorySearch(){
        var ctg = []; // 선택한 분류들 저장 할 배열
        $("input[name=category]:checked").each(function(){
            ctg.push($(this).val());
        });

        $(".detail").filter(function(){
            var isShow=true;
            //배열에 존재하는 값인지 아닌지 확인하는 방법 indexOf
            var isShow = true;
            var text = $(this).find(".categoryText").text();
            if(ctg.indexOf(text)==-1 && ctg.length!=0)isShow=false;
            console.log(text);
            $(this).toggle(isShow);
            //배열에 값이 비어 있는 경우 isshow가 true라고 되어 
        })
    }
});

    function moneyBelow(){
        var moneyB= $(this).val();//입력한 금액가져오기
        if(moneyB !=''){//금액 입력했다면 
            $(".detail").filter(function(){ //필터처리
            var isShow=true;
            var m = $(this).find(".moneyText").text().replace("원","").replace(/,/g,"");
               //나는 화면에 
                if( Number(moneyB) < m) isShow=false;
                $(this).toggle( isShow );
            });
        }
    }
    function keywordSearch(){
        var word = $(this).val();
        
        $(".detail").filter(function(){
    
            $(this).toggle( $(this).text().indexOf(word) > -1);
        });
    }

    function showList(){
        $("#main").show();
        $("#mychart").hide();
    }

    let data_chart='';

    function showChart(){
        $("#main").hide();
        $("#mychart").show();
        if(data_chart == ''){
            var ctx = $("#mycanvas")[0];
            var ctv = $("#incomeChart")[0]

//분류와 분류별 금액 총액구하기를 해보겠음
var setE = new Set(); // 지출분류
var totalE=new Array(); //지출분류별 총금액
var setS=new Set();//수입분류
var totalS=new Array();//수입분류별 총금액 
            $.each(house.지출, function(idx,data){
                var 분류 = data.분류;
                var 금액 = data.금액;
                if(setE.has(분류)){//set에 해당분류가 저장되었있다면 true
                    totalE[분류] +=금액;
                }else{
                    totalE[분류] =금액; //분류별 금액 누적
                }
                setE.add(분류);
            });
            $.each(house.수입,function(i,item){
                var 분류 = item.분류;
                var 금액 = item.금액;
                if(setS.has(분류)){
                    totalS[분류] +=금액;
                }else{
                    totalS[분류]=금액;
                }
                setS.add(분류);
            })        
            console.log(totalE);
            new Chart(ctx,{
                type:"pie",
                data:{
                    labels:Array.from(setE),
                    datasets:[
                        {
                            data:Object.values(totalE),
                            backgroundColor:["#EBE76C","#F0B86E","#ED7B7B","#836096",
                        "#E19898","#A2678A","#4D3C77","#3F1D38","#241468","#9F0D7F","#EA1179","#F79BD3",
                    "#6F61C0"]
                            
                        }
                    ]
                    

                }


            })

            new Chart(ctv,{
                type:"pie",
                data:{
                    labels:Array.from(setS),
                    datasets:[
                        {
                            data:Object.values(totalS),
                            backgroundColor:["#F2EE9D","#7A9D54","#557A46","#8C3333","#5B9A8B","#F7E987"]
                        }
                    ]
                }
            })

        
        }
    }
    
    
        



