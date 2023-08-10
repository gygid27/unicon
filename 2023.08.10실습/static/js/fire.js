let data = []; // json 데이터 저장할 변수
let fire_stat = new Object();
let color = [
    '#FF6347',
    '#FFD700',
    '#7CFC00',
    '#008080',
    '#0000FF',
    '#BA55D3',
    '#D2691E',
    '#B0C4DE',
    '#FF4500',
    '#228B22',
    '#FFD700',
    '#7CFC00',
    '#008080',
];
async function getData() {
    var temp = await fetch('./traffic.json').then((r) => r.json());
    //console.log(temp);
    return temp.body.items;
}

$(async function () {
    data = await getData();
    $.each(data, function (i, item) {
        total += Number(item.gutCo); //전체 사고건수
        bike += item.rlifAcdAsmCdNm === '오토바이사고' ? Number(item.gutCo) : 0;
        if (item.rsacGutFsttOgidNm in fire_stat) {
            fire_stat[item.rsacGutFsttOgidNm].출동건수 += item.gutCo;
            fire_stat[item.rsacGutFsttOgidNm].환자수 += item.trnfPcnt;
        } else {
            fire_stat[item.rsacGutFsttOgidNm] = { 출동건수: Number(item.gutCo), 환자수: Number(item.trnfPcnt) };
        }
    });
});

var ctx2 = $('#pi')[0].getContext('2d');

var pc = 1 / (total / bike);
var bike_deg = 270 + 360 * pc;
bike_deg = Math.round((bike_deg > 360 ? bike_deg - 360 : bike_deg) * 100) / 100;

ctx2beginpath();
ctx2.moveTo(350, 350);
ctx2.arc(350, 350, 300, (270 * Math.PI) / 180, (bike_deg * Math.PI) / 180, false);
ctx2.fillStyle = 'yellow';
ctx2.fillStyle();

ctx2beginpath();
ctx2.moveTo(350, 350);
ctx2.arc(350, 350, 300, (270 * Math.PI) / 180, (bike_deg * Math.PI) / 180, false);
ctx2.fillStyle = 'orange';
ctx2.fillStyle();

ctx2.fillStyle = '#000';
ctx.font = '30px Arial';
ctx.fillText(Math.round(pc * 1000) / 10 + '%', 450, 200);
