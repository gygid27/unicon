// 계획을 세워가며 해보기
//1. json파일에서 json데이터 가져오기
//2. 연료는 전기, 하이브리드, 휘발유, 경유, 수소, 만 구하기
//3. json데이터 중에서 용도가 비사업용인 승용차의 연료별, 년도별로 총합 구하기
//승용차는 - RIDNG_ODR

// json파일 가져오기

let data =new Object(); //연료별 용도별 데이터를 저장할 곳

const types=["하이브리드","수소","경유","휘발유","전기"];
//연료는 전기, 하이브리드, 휘발유, 경유, 수소, 만 구하기


async function getData(){
    var temp = await fetch("./static/js/연료별용도별자동차등록현황.json").then((res)=>res.json());
    // console.log(temp);
    refine(temp);
}

$(async function(){
    await getData(); //이거까지 해야지 콘솔로 나옴
    const ctx = $("#car")[0];

    var fuel=Object.keys(data);
    var year = Object.keys(data[types[0]]);

    new Chart(ctx,{
        type:"line",
        data:{
            labels:year,
            datasets:[{
                label:fuel[0],
                data:data[fuel[0]],
                borderColor:"red",
                backgroundColor:"red",
                yAxisID:"수소",
            },
            {
                label:fuel[1],
                data:data[fuel[1]],
                borderColor:"orange",
                backgroundColor:"orange",
                yAxisID:"전기",

            },
            {
                label:fuel[2],
                data:data[fuel[2]],
                borderColor:"pink",
                backgroundColor:"pink",
                yAxisID:"하이브리드",

            },
            {
                label:fuel[3],
                data:data[fuel[3]],
                borderColor:"green",
                backgroundColor:"green",
                yAxisID:"휘발유",
            },
            {
                label:fuel[4],
                data:data[fuel[4]],
                borderColor:"blue",
                backgroundColor:"blue",
                yAxisID:"경유",

            },
        ]
        },
        options:{
            scales:{
                "수소":{
                    min:500,
                    max:7000,
                    ticks:{color:"red"},
                    //ticks는 수소의 최소최대의 범위에 색깔을 넣어주는 것
                    position:"right",
                },
                "전기":{
                    min:11000,
                    max:51000,
                    ticks:{color:"orange"},
                    position:"right",
                },
                "하이브리드":{
                    min:140000,
                    max:310000,
                    ticks:{color:"pink"},
                    position:"right",
                },
                "휘발유":{
                    min:2700000,
                    max:3100000,
                    ticks:{color:"green"},
                    position:"left",
                },
                "경유":{
                    min:1450000,
                    max:1500000,
                    ticks:{color:"blue"},
                    position:"left",

                }
            }
        }
    })
});

//json데이터 중에서 용도가 비사업용, 승용차의 연료별 년도별 총합을 구해 보기

// 연료는 전기, 하이브리드, 휘발유, 경유, 수소 이면서 용도가 비사업용인 것을 구하기
function refine(temp){
    $.each(temp,function(i,c){
        var type="";
        if((type=include(c.DTCONT))== "" || c.PURPOS_DIV==="사업용")return true;
        if(!(type in data))
        data[type]=new Object();
        // 년도별 구하기
        if(!(c.REG_YY in data[type]))//년도로 키가 있는가 없는가
            data[type][c.REG_YY]=Number(c.RIDNG_ODR);
            //없다면 년도 키 생성하고 키에 승용차수를 저장하는 것이다.
            else
            data[type][c.REG_YY]+=Number(c.RIDNG_ODR);//승용차수 누적

    });
    console.log(data);
}
function include(kind){
    for(var i in types){
        if(kind.indexOf(types[i]) > -1)
        return types[i];
    }
    return'';
}