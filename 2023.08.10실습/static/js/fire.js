let data = []; //json저장할 변수
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
    console.log();
    return temp.body.item;
}

$(async function () {
    data = await getData();
    var total = (bike = 0);
    $.each(data, function (i, item) {
        total += Number(item.gutCo); //전체 사고건수
        bike += item.rlifAcdAsmCdNm === '오토바이사고' ? Number(item.gutCo) : 0;
        if (item.rlifAcdAsmCdNm in fire_stat) {
            fire_stat[item.rsacGutFsttOgidNm].출동건수 += item.gutCo;
            fire_stat[item.rsacGutFsttOgidNm].환자수 += item.trnfpcnt;
        }else{
            fire_stat[item.rsacGutFsttOgidNm] = {출동건수:Number(item.gutCo)
            환자수:Number(item.trnfPcnt)};
        }
    });
});
