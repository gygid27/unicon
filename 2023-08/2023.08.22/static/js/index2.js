let school = new Object(); //전체 데이터 저장
let swt = true; // 차트와 목록 전환 판단용
let std_chart = '';

const chartColor = [
    '#22A699',
    '#F2BE22',
    '#F29727',
    '#F24C3D',
    '#F31559',
    '#FF52A2',
    '#FFB07F',
    '#FFECAF',
    '#35155D',
    '#512B81',
];

//변수이름, 함수이름 등등 이름을 정할 때 대표적인 표기방법
//카멜 표기법(camelCase), 스네이크표기법(snake_case)
//카멜표기법: studentChartDraw 단어 중간부터 대문자를 넣는것
//스네이크표기법 - student_chart_draw
//케밥표기법 -student-chart-draw
//파스칼 표기법 - StudentChartDraw

$(function () {
    $('#detail_bt').click(function () {
        $('.search_detail').slideToggle(500);
    });

    $.getJSON('./database/test4.json', function (d) {
        school = d;

        var teacher = d.담임;
        $('#main_title').text(d.학교명);

        $.each(d.학생, function (i, item) {
            var 담임 = '';
            for (var t in teacher) {
                if (teacher[t].반 == item.반) {
                    담임 = teacher[t].이름;
                    break;
                }
            }
            var eyes = item.시력.split(',');
            $('#list_wrap').append(
                "<div class='info'>" +
                    "<ul class='dt'>" +
                    "<li class='name'>이름:" +
                    item.이름 +
                    '</li>' +
                    "<li class='ban'>" +
                    item.반 +
                    '반</li>' +
                    "<li class='myteacher'>선생님:" +
                    담임 +
                    '</li>' +
                    "<li class='t'>키:" +
                    item.키 +
                    'cm</li>' +
                    "<li class='e'>시력 : 좌" +
                    eyes[0] +
                    ' 우' +
                    eyes[1] +
                    '</li>' +
                    "<li class='w'>몸무게:" +
                    item.몸무게 +
                    'kg</li>' +
                    '</ul>' +
                    '</div>'
            );
        });
        $('#word').on('keyup', default_search);
        $('#word').next().click(default_search);

        $('.search_detail input').on('keyup', detail_search);
        $('#cls').change(function () {
            if (swt)
                //반을 변경했을 때 datail_search함수실행이냐 차트업데이트냐
                detail_search();
            else var ban = $('#cls').val();
            std_chart.destroy();
            drawChart(ban);
        });

        $('#chartBt').click(switchScreen);
    });
    function switchScreen() {
        var ban = $('#cls').val();

        if (ban == '') {
            alert('먼저 반을 선택해주셈');
            return;
        }
        if (swt) {
            $(this).text('목록');
            $('#list_wrap').hide();
            $('#student_chart').show();
            $('.search_input').hide();
            $('.tall_range').hide();
            $('.eyes_range').hide();
            if (std_chart != '') std_chart.destroy();
            drawChart(ban);
            swt = false;
        } else {
            $(this).text('차트');
            $('#list_wrap').show();
            $('#student_chart').hide();
            $('.search_input').show();
            $('.tall_range').show();
            $('.eyes_range').show();
            swt = true;
        }
    }
    function drawChart(ban) {
        var ctx = $('#student')[0];
        //선택한 반의 키를 구하기
        var tall = [];
        var name = [];
        var avg = 0,
            tot = 0; //전체 학생의 평균키에 사용할 변수
        $.each(school.학생, function (idx, std) {
            tot += std.키;
            if (std.반 == ban) {
                tall.push(std.키);
                name.push(std.이름);
            }
        });
        avg = tot / school.학생.length; //평균키

        std_chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: name,
                datasets: [
                    {
                        label: ban + '반 키',
                        data: tall,
                        backgroundColor: chartColor,
                        base: avg,
                        //학생의 키가 평균
                    },
                ],
            },
            option: {
                scales: {
                    y: { min: 150, max: 190 },
                },
            },
        });
    }
    function detail_search() {
        var minT = 0,
            maxT = 0,
            minE = 0,
            maxE = 0;
        minT = parseInt($('#minTall').val() == '' ? 0 : $('#minTall').val());
        maxT = parseInt($('#maxTall').val() == '' ? 0 : $('#maxTall').val());
        minE = parseFloat($('#minEyes').val() == '' ? 0 : $('#minEyes').val());
        maxE = parseFloat($('#maxEyes').val() == '' ? 0 : $('#maxEyes').val());

        var ban = $('#cls').val(); //반 선택 값
        console.log(ban);

        $('.info').filter(function () {
            var isShow = true;
            //여기는 건들면 안됌 오ㅐ? 이미 isshow는 키 검색에 포함되어있기 때문에
            if (minT != 0) {
                //상세검색에서 키를 입력했다면 minT변수는 0이 아니다.
                var T = parseInt($(this).find('.t').text().slice(2));
                //화면에 표시된 키는 cm단위를 가지고 있는 텍스트이기 때문에 parseInt를 통해 앞쪽의 숫자만 걸러온다.
                if (minT > T || maxT < T) isShow = false;
            }
            if (minE != 0 && isShow == false) {
                //키 검색 한것에 추가 검색이 되도록 할것인지 키와 시력둘중하나 검색이 되게 할 것인지 정해야한다.
                var text = $(this).find('.e').text();
                var temp = [
                    parseFloat(text.slice(text.indexOf('좌') + 1)),
                    parseFloat(text, slice(text.indexOf('우') + 1)),
                ];
                //왼쪽 오른쪽의 시력을 담을 공간
                var E = Math.min(...temp);
                //배열에 있는 값중 가장 작은 값을 찾는다.
                //범위 검색에는 기준을 뭐로 할것에 따라 내용이 달라진다. 기준을 무엇으로 할 것인가?
                if (minE > E || maxE < E) isShow = false;
                else isShow = true;
            }
            if (isShow) {
                if ($(this).find('.ban').text().indexOf(ban) == -1) isShow = false;
                //내가 찾고 싶은 반만 하고 싶을 때
            }
            $(this).toggle(isShow);
        });
    }
});
function default_search() {
    var word = $('#word').val();
    $('.info').filter(function () {
        $(this).toggle($(this).find('.name').text().indexOf(word) > -1);
    });
}
