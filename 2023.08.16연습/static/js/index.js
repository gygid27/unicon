const love = [100, 95, 89, 75, 64, 93];
const day = [10, 20, 50, 100, 200, 300, 365];

const ctx = $('#line1')[0];

let 겸지 = {
    label: '사랑지수',
    data: love,
    borderColor: 'pink',
    tension: 0.2,
    fill: false,
    backgroundColor: 'mistyrose',
    borderCapStyle: 'square',
    //butt이건 기본값이다.
    pointStyle: 'rect',
    pointBorderWidth: 10,
    pointHoverBorderColor: 'red',
    showLine: true,
};

let 수향 = {
    label:"사랑지수",
    data: [100, 100, 90, 80, 70, 100, 30, 20],
    borderColor: 'hotpink',
    pointHoverBorderWidth:20,
    pointStyle:"round",
    backgroundColor:"mistyrose",

};

const loveData = {
    labels: day,
    datasets: [겸지, 수향],
};

const chartOption = {
    plugins: {
        title: { display: true, text: "기념일에따른 사랑지수"}
    },
    scales:{
            y:{
            stacked:true
        }
    }
}

new Chart(ctx, {
    type: 'line',
    data: loveData,
    option: chartOption,
});
