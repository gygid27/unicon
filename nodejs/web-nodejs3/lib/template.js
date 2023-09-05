module.exports = {
    questionHTML: function (main, login, qsData) {
        var tag = '';

        for (var q of qsData) {
            tag +=
                '<tr class=qsTr>' +
                '<td class="qsId">' +
                q.id +
                '</td>' +
                '<td class="qsTitle">' +
                q.title +
                '</td>' +
                '<td class="qsWriter">' +
                q.writer +
                '</td>' +
                '<td class="qsDate">' +
                q.date +
                '</td>' +
                w;
            '<td class="qsTo">' + q.to + '</td>' + '</tr>';
        }

        var qsHTML = `
        <section id="content">
        <div id="qsList">
            <div class="qsTitle">
                <h2>문의</h2>
                <a href="javascript:questionWrite();">문의하기</a>
            </div>
            <div class="search_box">
                <input type="text" name="word" id="word" />
            </div>
            <div class="qsList_box">
                <table>
                    <thead>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>답변</th>
                    </thead>
                    <tbody id="qs">
                        ${tag}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <section id="side">
    <div class="login_bt">
    <a href="/${login.url}">${login.text}</a>
    </div>
    </section>
</main>
</div>
<div id="qsModal" style="display: none">
<div class="modalBackground"></div>
<div class="qsInputBox">
    <h3>문의글 작성</h3>
    <div class="qsInput">
        <input type="text" name="title" id="title" />
        <labe for="title">제목</labe>
    </div>
    <div class="qsInput">
        <textarea name="qsContent" id="qsContent"></textarea>
        <label>문의내용</label>
    </div>
    <div class="qsRegBt">
        <a href="javascript:qsSave();">완료</a>
    </div>
</div>
        `;
    },
    homeHTML: function (main, login) {
        var mainHTML = `
        <section id="content">
            <img src="./image/${main.main_img}" />
        </section>
        <section id="side">
            <div class="login_bt">
            ${login.url == 'logout' ? `<p>${login.id}</p>` : ''}
            <a href="/${login.url}">${login.text}</a>
            </div>
        </section>;`;
        return commonHTML(main, mainHTML, 'index');
    },
    loginHTML: function (main) {
        var loginHTML = `<section id="content">
                <p class="sub">스즈메 with 로그인</p>
                <div class="login_wrap">
                    <form name="loginf" id="loginf" method="get" action="/">
                        <input type="hidden" name="part" value="login_check" />
                        <div class="login_box">
                            <div class="login_input1">
                                <input type="text" name="sdmId" id="sdmId" />
                                <label>ID</label>
                            </div>
                            <div class="login_input">
                                <input type="password" name="sdmPw" id="sdmPw" />
                                <label>PW</label>
                            </div>
                            <a class="login_bt" href="javascript:login()">LOGIN</a>
                        </div>
                    </form>
                    <div class="joinfind">
                        <p class="find">아이디/비밀번호 찾기</p>
                        <p class="join"><a href="/sign">회원가입</a></p>
                    </div>
                </div>
            </section>`;
        return commonHTML(main, loginHTML, 'login');
    },
    signHTML: function (main) {
        var signHTML = `
        <section id="content">
                    <h3>스즈메 회원가입</h3>
                    <form action="signf" id="signf" method="get" action="/signup">
                        <div id="sign_wrap">
                            <div id="sign_part">
                                <div calss="sign_input">
                                    <label for="email">이메일</label>
                                    <input type="email" name="email" id="email" />
                                </div>

                                <div class="sign_input">
                                    <label for="sdmPw">비밀번호</label>
                                    <input type="password" name="password" id="password" />
                                </div>
                                <!--연락처는 밑에 번호 앞숫자 고르는 기능까지 넣어야 함-->
                                <div class="sign_input">
                                    <label for="sdmTel2">연락처</label>
                                    <!--option안 value는 숫자 앞번호 넣으면 됨 생각 많이 ㄴㄴ-->
                                    <!--select오타!!!!!!!주의-->
                                    <select name="sdmTel1" id="sdmTel1">
                                        <option value="010">010</option>
                                        <option value="02">02</option>
                                        <option value="032">032</option>
                                        <option value="031">031</option>
                                        <option value="033">033</option>
                                        <option value="034">034</option>
                                    </select>
                                    - <input type="tel" name="sdmTel2" id="sdmTel2" /> -
                                    <input type="tel" name="sdmTel3" id="sdmTel2" />
                                </div>
                                <div class="sign_input">
                                    <label for="addr">신혼집 주소</label>
                                    <input type="addr" name="addr" id="addr" />
                                </div>
                                <div class="sign_input">
                                    <label for="wDate">결혼예정일</label>
                                    <input type="date" name="wDate" id="wDate" />
                                </div>
                            </div>
                            <div class="sign_bt_part">
                                <a href="/signup" class="sign_bt">회원가입</a>
                            </div>
                        </div>
                    </form>
                </section>
        `;
        return commonHTML(main, signHTML, 'sign');
    },
};
function commonHTML(main, html, css) {
    var menu = '';
    for (var key of Object.keys(main.menu)) {
        menu += `<li class="menu"><a href="/${key}">${main.menu[key]}</a></li>`;
    }

    return `
<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>스즈메의 문단속</title>
        <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"> 
        <link rel="stylesheet" href="./lib/main.css">
         <link rel="stylesheet" href="./lib/${css}.css">
       
    </head>
    <body>
        <div id="wrap">
            <header id="header">
                <div class="logo">
                    <a href="/"><img src="./image/${main.logo}" /></a>
                </div>
                <nav class="nav">
                    <ul class="menuList">
                      ${menu}
                    </ul>
                </nav>
            </header>
            <main id="main">
                ${html}
            </main>
        </div>
    </body>
</html>
        `;
}
