//1. json파일에서 json데이터 가져오기

let data = new Object(); // 연도별용도별.json저장할 함수
let types = ['하이브리드', '수소', '경유', '휘발유', '전기']; //2. 연료는 전기, 하이브리드, 휘발유, 경유, 수소만 구하기

async function getData() {
    var temp = await fetch('./static/js/연료별용도별자동차등록현황.json').then((r) => r.json());
    console.log(temp);
    refine(temp);
    //데이터 정제하는 것
}

//용도가 비사업용, 승용차의 연도별 총합
$(async function () {
    data = await getData();
    const ctx = $('#car')[0];
    var fuel = Object.keys(data);
    var year = Object.keys(data[types[0]]);
    // var color = ['#faa98e', '#FFCDCC', '#fbd0ad', '#d6d5ea', 'yellow'];
    // $.each(fuel,function(i,t){
    //     dataset.push({
    //         label:t,
    //         data:data[t],
    //         borderColor:color[i],
    //          backgroundColor: color[i],

    //     })
    // })
    // var dataset = [];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: year,
            datasets: [
                {
                    label: fuel[0],
                    data: data[fuel[0]],
                    borderColor: 'pink',
                    backgroundColor: 'pink',
                    yAxisID: '수소',
                },
                {
                    label: fuel[1],
                    data: data[fuel[1]],
                    borderColor: 'pink',
                    backgroundColor: 'pink',
                    yAxisID: '전기',
                },
                {
                    label: fuel[2],
                    data: data[fuel[2]],
                    borderColor: 'pink',
                    backgroundColor: 'pink',
                    yAxisID: '하이브리드',
                },
                {
                    label: fuel[3],
                    data: data[fuel[3]],
                    borderColor: 'pink',
                    backgroundColor: 'pink',
                    yAxisID: '휘발유',
                },
                {
                    label: fuel[4],
                    data: data[fuel[4]],
                    borderColor: 'pink',
                    backgroundColor: 'pink',
                    yAxisID: '경유',
                },
            ],
        },
        options: {
            scales: {
                ' 수소': {
                    min: 500,
                    max: 310000,
                    ticks:{color:"pink"},
                },
                "전기":{
                    min:11000,
                    max:51000,
                    ticks:{color:"orange"}
                },
                "하이브리드":{
                    min:140000,
                    max:300000,
                    ticks:{color:"yellow"}     
                },
                "경유":{
                    min:140000,
                    max:150000,
                    ticks:{color:"red"}
                },
                "휘발유":{
                    min:270000,
                    max:310000,
                    ticks:{color:"green"}
                },


        },
    }),
}),
    
        

//4. 연도별로 나눠서 해보기

//3. json데이터 중에서 용도가 비사업용인 승용차의 연도별로 총합을 구하기
function refine(temp) {
    $.each(temp, function (i, c) {
        var type = '';
        if ((type = include(c.DTCONT)) == '' || c.PURPOS_DIV === '사업용') return true;
        if (!(type in data)) data[type] = new Object();
        if (!(c.REG_YY in data[type])) data[type][c.REG_YY] = Number(c.RIDNG_ODR);
        else data[type][c.REG_YY] += Number(c.RIDNG_ODR);
    });
    console.log(data);
}
function include(kind) {
    for (var i in types) {
        if (kind.indexOf(types[i]) > -1) return types[i];
    }
    return '';
}
