let data = []; //json 데이터에 저장할 변수
let fire_stat = new Object();
var i = 50;

async function getData() {
    var temp = await fetch('./traffic.json').then((r) => r.json());
    return temp.body.items;

    // ).then((res) => res);
    // console.log(temp);
    // return temp;
}

$(async function () {
    data = await getData();
    $.each(data, function (i, item) {
        if (item.rsacGutFsttOgidNm in fire_stat) {
            fire_stat[item.rsacGutFsttOgidNm].출동건수 += item.gutCo;
            fire_stat[item.rsacGutFsttOgidNm].환자수 += item.trnfPcnt;
        } else {
            fire_stat[item.rsacGutFsttOgidNm] = { 출동건수: Number(item.gutCo), 환자수: Number(item.trnfPcnt) };
        }
    });
    var keys = Object.keys(fire_stat);
    $.each(keys, function (i, key) {
        var td1 = '';
        var td2 = '<tr>';
        for (var i = 1; i <= fire_stat[key].출동건수; i += 10) td1 += "<td class='red' width=5></td>";
        td1 += "<td colspan='5' width=60>" + fire_stat[key].출동건수 + '건</td>';
        for (var i = 1; i < fire_stat[key].환자수; i += 10) td2 += "<td class='blue' width=5></td>";
        td2 += '<td width=60>' + fire_stat[key].환자수 + '명</td>';
        $('#gp').append("<tr><td  class='name' rowspan='2'>" + key + '</td>' + td1 + '</tr>');
        $('#gp').append(td2);
    });
    console.log(fire_stat);
    // console.log(keys);

    var cv = $('#canvas')[0];
    var ctx = cv.getContext('2d');

    $('#rect').click(function () {
        ctx.fillStyle = 'pink';
        ctx.fillRect(10, 10, 100, 150);
    });

    $('#circle').click(function () {
        ctx.beginPath();
        ctx.arc(60, 100, 50, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = 'orange';
        ctx.fill();
    });
    var id;
    var step = 10;
    //원을 움직이고 싶을 때 하는 방법
    $('#move').click(function () {
        id = setInterval(function () {
            ctx.clearRect(0, 0, 500, 500);
            ctx.beginPath();
            ctx.arc(i, 100, 50, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = 'orange';
            ctx.fill();
            if (i == 450 || i == 50) step *= -1;
            //clearRect는 지워주는 것
        }, 50);
    });

    // ctx.moveTo(0, 0);
    // ctx.lineTo(100, 100);
    // ctx.stroke();
    // //선그리기
    // ctx.moveTo(50, 100);
    // ctx.lineTo(50, 200);
    // ctx.stroke();
    // //배경색 있는 사각형
    // ctx.fillStyle = '#b281ff';
    // ctx.fillRect(10, 10, 50, 50);

    // //테두리만 있는 사각형(x좌표 y좌표, 너비, 높이)
    // ctx.strokeRect(100, 50, 100, 50);

    // //원 (x좌표,Y좌표, 반지름, 시작각도, 끝각도, 방향)
    // ctx.beginPath();
    // ctx.strokeStyle = 'pink';
    // ctx.arc(200, 200, 50, 0, 2 * Math.PI, true);
    // ctx.stroke();
    // //*2를 해야 지 온전한 원이 나온다.

    // //텍스ㅌ
    // ctx.fillStyle = 'pink';
    // ctx.font = '30px Arial';
    // ctx.fillText('화이팅', 200, 50);
    // ctx.strokeText('화이팅', 200, 100);

    // //그라디언트
    // var grd = ctx.createLinearGradient(0, 0, 100, 0);
    // grd.addColorstop(0, 'blue');
    // grd.addcolorstop(0.9, 'brown');
    // grd.addcolorstop(1, 'white');
    // ctx.fillStyle = grd;
    // ctx.fillRect(50, 300, 100, 200);
});
