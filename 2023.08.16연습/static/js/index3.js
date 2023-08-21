const tall = [161, 168, 174, 159];
const name = ['송은선', '임민지', '이상준', '김선향'];
const weight = [43, 59, 72, 46];

let avg = tall_avg();

$('#reg_bt').click(function () {
    if ($('#tall').val() == '' || $('#name').val() == '') {
        alert('키 또는 이름을 입력하세요');
        $('#tall').val() == '' ? $('#tall').focus() : $('#name').focus();
        return;
    }
    if ($('#weight').val() == '') {
        alert('몸무게를 입력하시요');
    }
    tall.push(Number($('#tall').val()));
    name.push($('#name').val());
    weight.push(Number($('#weight').val()));
    avg = tall_avg();
    chart.destroy();
    draw();
    //차트를 다 날려버리고 다시 그리기
});

let ctx = $('#bar_chart')[0].getContext('2d');
//캔버스의 판대기가 필요하기 때문에 인덱스[0]으로 주는 것이다
let chart = '';
draw();

function draw() {
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: name,
            datasets: [
                {
                    label: '201호 키 조사',
                    data: tall,
                    borderWidth: 1,
                    //테두리 굵기가 있어야 색깔을 넣어줄 수 있다.
                    backgroundColor: avg_color(),
                    //단일값 배열값이 오는 것만 잘 지켜주기만 함
                    indexAxis: 'y',
                },
                {
                    label: '201호 몸무게 조사',
                    data: weight,
                    borderWidth: 1,
                    //테두리 굵기가 있어야 색깔을 넣어줄 수 있다.
                    backgroundColor: 'orange',
                    //단일값 배열값이 오는 것만 잘 지켜주기만 함
                    indexAxis: 'y',
                },
            ],
        },
        options: {},
    });
}
function avg_color() {
    var a = [];
    $.each(tall, function (i, t) {
        a.push(t >= avg ? '#4374D9' : '#CC3D3D');
    });

    return a;
    //사용된 함수로 돌아오게 하는것이 return
}

function tall_avg() {
    var sum = 0;
    $.each(tall, function (i, t) {
        sum += t;
    });
    return sum / tall.length;
}

// barPercentage: 1,
// //막대의 너비를 주는 것 기본값은 0.9
// barThickness: 50,
// //막대의 너비가 정하기  이걸 쓰면   barPercentage이게 적용되지 않는다. 그래서  barThickness고정적인 값을 쓸 때 유용하다.
// borderColor: 'black',
// borderSkipped: 'topleft', // 기본은 start , end, middle, bottom, left, top, right
// borderRadius: 200,
// // categoryPercentage: 0.1,
// hoverBackgroundColor: 'green', // hoverBorderColor,  hoverBorderWidth,  hoverBorderRadius
// indexAxis: 'x',
// //x는 세로막대형 Y는 가로막대형 기본 축을 의미한다.
// // base: avg,