let data = new Object();

const types=["하이브리드","수소","경유","휘발유","전기"]

async function getData(){
    var temp = await fetch("./static/js/연료별용도별자동차등록현황.json").then((res)=>res.json())
    // console.log(temp);
    refine(temp);
}

$ (async function(){
    await getData();
    const ctx = $("#car")[0]; //차트그리기 시작하기

    var fuel=Object.keys(data);
    var year=Object.keys(data[types[0]]);

    new Chart(ctx,{
        type:"line",
        data:{
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
                borderColor:"purple",
                backgroundColor:"purple",
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
            }
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
                    ticks:{color:"purple"},
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

    
})

function refine(temp){//refine 이라는 함수 정의와 temp라는 파라미터를 받음
    $.each(temp,function(i,c){
        //temp 배열의 각 요소에 대해 반복, i는 인덱스 c는 배열의 요소를 나타냄
        var type='';
        //임시 변수 type을 빈 문자열로 초기화
        // include 함수에 반환된 결과를 저장할 용도
        if((type=include(c.DTCONT))=="" || c.PURPOS_DIV==="사업용")return true;
        //DTCONT는 연료를 나타냄 include(c.DTCONT)을 실행하여 반환된 결과를
        //type변수에 할당합니다. 논리 연산자 ||를 사용하여 
        //첫번째 조건은 type=include(c.DTCONT))=="" type이 빈문자열
        //두번째 조건은 type=include c.PURPOS_DIV==="사업용"
        // 하나라도 만족하는 경우 return true를 사용하여 현재 반복 종료 다음 요소로 이동
        if(!(type in data))
        //data객체에 type이라는 property(특정한 데이터나 값)이
        // 있는가 없는가를 확인하는 것
        //type이 data객체에 peprorty로 존재하지 않을 경우
        //새로운 객체를 생성하여 data[type]에 할당
        data[type]=new Object();
        //type이 data개체에 property가 존재하지 않을 경우
        //연료명으로 새로운 객체 생성 
        if(!(c.REG_YY in data[type]))
        //data[type] 객체내에 c.REG_YY값이 없는 경우
            data[type][c.REG_YY]=Number(c.RIDNG_ODR)
            //data[type][c.REG_YY]에 c.RIDNG_ODR값을 할당하고
            //Number(c.RIDNG_ODR)를 사용하여 문자열을 숫자로 변환
            else
            data[type][c.REG_YY]+=Number(c.RIDNG_ODR)
            // c.REG_YY property가 이미 data[type] 객체내에 존재하는
            //경우 해당 연도의 값을 기존값에다 더해준다.

        });
        console.log(data);
    }

        // 이 코드의 목적은 temp 배열을 순회하면서 
//         일련의 조건을 만족하는 데이터를 가공하고 
//         data 객체에 저장하는 것으로 보입니다. 
//         데이터를 정제하고 가공하는 과정 중에 include 함수가 사용되며, 
//         데이터의 종류(type), 용도(c.PURPOS_DIV), 
//         연도(c.REG_YY), 및 주행 거리(c.RIDNG_ODR) 
//         등이 관련될 것으로 예상됩니다.
// }
function include(kind){// include라는 함수정의 kind라는 파라미터를 받고
    for(var i in types){
        //type 배열의 각 요소를 순회 하기 위해 
        //반복문 for in루프를 통해  types배열의 인덱스 또는 키 i에 할당하면서 반복함
        if(kind.indexOf(types[i]) >-1)
        //반복중인 types[i]값이 kind 파라미터에 포함여부를 확인
        //문자열의 indexOf를 사용하여 찾는다.
        //만약 kind에 해당 문자열이 포함되어 있다면
        //0이상의 값 그렇지 않으면 -1를 반환하는 것이다.
        return types[i];
        //일치하는  문자열을 찾았다면 해당 문자열 types[i]; 반환 함수 종료
    }
    return"";
    //일치하지 문자열을 찾지 못하면 빈문자열로 반환
}

//이 함수의 목적은 kind 파라미터에 포함된 문자열 중에서 
// types 배열에 포함된 문자열과 첫 번째로 일치하는 항목을 
// 찾아 반환하는 것입니다. 
// indexOf를 사용하여 일치하는 문자열을 찾는 방식은 부분 
// 문자열 검색을 수행하며, 만약 일치하는 항목이 없을 경우 
// 빈 문자열을 반환합니다. 
// for...in 루프를 사용하여 
// 열의 각 항목을 검사하고, 
// 일치하는 항목을 찾으면 해당 값을 반환합니다.



