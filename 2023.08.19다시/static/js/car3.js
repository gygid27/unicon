let data = new Object();

const types=["하이브리드","수소","경유","휘발유","전기"]

async function getData(){
    var temp = await fetch("./static/js/연료별용도별자동차등록현황.json").then((res)=>res.json())
    console.log(temp);
    refine(temp);
}

$(async function(){
    await getData();
    const ctx = $("#car")[0];

    var fuel=Object.keys(data);
    var year=Object.keys(data[types[0]]);

    new Chart(ctx,{
        type:"line",
        data:{
            datasets:[
                    {
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
                    borderColor:"green",
                    backgroundColor:"green",
                    yAxisID:"하이브리드",
                    },
                        {
                        label:fuel[3],
                        data:data[fuel[3]],
                        borderColor:"blue",
                        backgroundColor:"blue",
                        yAxisID:"휘발유",
                        },
                        {
                            label:fuel[4],
                            data:data[fuel[4]],
                            borderColor:"navy",
                            backgroundColor:"navy",
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
                    ticks:{color:"green"},
                    position:"right",
                },
                "휘발유":{
                    min:2700000,
                    max:3100000,
                    ticks:{color:"blue"},
                    position:"left",
                },
                "경유":{
                    min:1450000,
                    max:1500000,
                    ticks:{color:"navy"},
                    position:"left",
                }
            }
        }
    })

})

// json데이터 중에서 용도가 비사업용인 승용차의 연료별, 년도별로 총합 구하기
// 타입안에 연료가 들어있거나 비사업용인 차량을 구하라

function refine(temp){
        $.each(temp,function(i,c){
            var type="";
            if((type=include(c.DTCONT))=="" || c.PURPOS_DIV==="사업용")return true;
            if(!(type in data))
            data[type]=new Object();
            if(!(c.REG_YY in data[type]))
            data[type][c.REG_YY]=Number(c.RIDNG_ODR)
            else
            data[type][c.REG_YY]+=Number(c.RIDNG_ODR)
        });
        console.log(data);
}

function include(kind){
    for(var i in types){
        if(kind.indexOf(types[i])>-1)
        return types[i];
    }
    return"";
}
