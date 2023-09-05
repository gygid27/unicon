let ctx = '';
let color = [
    '#00CC00',
    '#00FF00',
    '#00FF33',
    '#00FF66',
    '#00FF99',
    '#00FFCC',
    '#00FFFF',
    '#00CCCC',
    '#33FFFF',
    '#66FFFF',
];

let data = new Array();
function physical(name, tall) {
    this.name = name;
    this.tall = tall;
}

let cnt = 0;

$(function () {
    ctx = $('#canvas')[0].getContext('2d');

    $('#reg').click(function () {
        var name = $('#name').val();
        var tall = $('#tall').val();
        draw(name, tall);

        $('#name').val('');
        $('#tall').val('');
        $('#name').val('');
    });
});

let oldx = (oldy = 0);

function draw(name, tall) {
    // ctx.fillStyle = '#000';
    // ctx.font = '20px Arial';
    // ctx.fillText(name, 50 + 100 * cnt, 680);

    ctx.beginPath();
    ctx.moveTo(400, 350);
    ctx.arc(400, 350, 300, (270 * Math.PI) / 180, (18 * Math.PI) / 180, false);
    //시작하는 원         //끝나는 원
    //1파이는 180도
    ctx.fillStyle = 'red';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(400, 350);
    ctx.arc(400, 350, 300, (18 * Math.PI) / 180, (223 * Math.PI) / 180, false);
    ctx.fillStyle = 'blue';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(400, 350);
    ctx.arc(400, 350, 300, (223 * Math.PI) / 180, (270 * Math.PI) / 180, false);
    ctx.fillStyle = 'green';
    ctx.fill();
}

//첫번째 사람
// if (oldx == 0 && oldy == 0) {
//     oldx = 80 + 100 * cnt;
//     oldy = 600 - tall;
// } else {
//     ctx.moveTo(oldx, oldy);
//     ctx.lineTo(80 + 100 * cnt, 600 - tall);
//     ctx.stroke();

//     oldx = 80 + 100 * cnt;
//     oldy = 600 - tall;
// }
// cnt++;

//가로 막대그래프 그리는 법
// ctx.fillStyle = '#000';
// ctx.font = '20px Arial';
// ctx.fillText(name, 50, 50 + 40 * cnt);
// for (var i = 0; i < tall / 10; i++) {
//     ctx.fillStyle = color[cnt];
//     ctx.fillRect(150 + 20 * i, 31 + 40 * cnt, 20, 20);
// }
// cnt++;
//세로 막대그래프 그리는 법
// ctx.fillStyle="#000";
// ctx.font="20px Arial";
// ctx.fillText(name,50+100*cnt,680);
// for(var i=0; i<tall/10 ; i++){
//     ctx.fillStyle=color[cnt];
//     ctx.fillRect(50+100*cnt,(640-(20*i)), 50,20);
// }
