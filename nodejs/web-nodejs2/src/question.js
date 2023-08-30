let data = [];
//여기에 담아주는 것

let isLogin = false;

async function getQsData() {
    return await fetch('./data/question.json')
        .then((r) => r.json())
        .then((r) => r);
    //비동기로 주는 방법
}

$(async function () {
    isLogin = getCookie('isLogin') == 'true' ? true : false;
    var id = getCookie('id');

    var login = '';
    if (isLogin) {
        //로그인 성공
        login = `<div class="user">
        <p>${id}</p><a href="/login">로그아웃</a></div>`;
    } else {
        //로그인 실패 또는 로그인을 안한 상태
        login = '<div class="login_bt"><a href="/login">로그인</a></div>';
    }
    $('#side').append(login);

    data = await getQsData();

    $.each(data, function (i, item) {
        //<tbody id="qs"></tbody> 담아주기
        $('#qs').append(
            '<tr class=qsTr>' +
                '<td class="qsId">' +
                item.id +
                '</td>' +
                '<td class="qsTitle">' +
                item.title +
                '</td>' +
                '<td class="qsWriter">' +
                item.writer +
                '</td>' +
                '<td class="qsContent">' +
                item.content +
                '</td>' +
                '<td class="qsDate">' +
                item.date +
                '</td>' +
                '<td class="qsTo">' +
                item.to +
                '</td>' +
                '</tr>'
        );
    });
    //검색 기능 만들기
    $('#word').on('keyup', function () {
        var word = $(this).val();
        $('.qs>Tr').filter(function () {
            var isShow = true;
            if (
                !(
                    $(this).find('.qstitle').text().indexOf(word) > -1 ||
                    $(this).find('.qsWriter').text().indexOf(word) > -1
                )
            ) {
                isShow = false;
            }
            $(this).toggle(isShow);
        });
    });
    //배경 클릭 시 modal창 닫힘
    $('.modalBackground').click(function () {
        $(this).parent().hide();
    });
    function qsSave() {
        $('#qsModal').hide(); //문의글작성 모달창 닫기
        //json형식으로 값 전달하기 만들기
    }
});
function questionWrite() {
    if (isLogin) {
        //로그인 성공인 상태
        $('#qsModal').show();
    } else {
        //로그인 안한 상태
        var isOk = confirm('로그안 후 문의하기 할 수 있습니다. \n 로그인 하시겠습니까?');
        if (isOk) {
            location.href = '/login';
            //location 사이트 이동경로
        }
    }
}

// $.getJSON('./data/member.json', function (member) {
//     var href = decodeURIComponent(location.href);
//     var query = parse(href);
//     console.log(member);
