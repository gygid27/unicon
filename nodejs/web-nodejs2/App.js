// App.js

/*
    page 구성 - 메인, 회원가입, 문의
        메인 - index.html
        회원가입 - signup.html
        문의 - question.html
    각 페이지의 내용은 간단하게만 작성 ( 구별만 되면 됨 )

    url : 메인 - http://localhost:3000
          회원가입 - http://localhost:3000/sign
          문의 - http://localhost:3000/qs
*/

var http = require('http');
var fs = require('fs');
var tempUrl = require('url');
var cookie = require('cookie');

const data = JSON.parse(fs.readFileSync('./data/member.json', 'utf8'));
//console.log(query.part);

var app = http.createServer(function (request, response) {
    var url = request.url;
    var query = tempUrl.parse(url, true).query;
    // console.log(query.part);
    if (query.part == undefined) {
        if (url == '/') url = '/src/index.html';
        if (url == '/sign') url = '/src/signup.html';
        if (url == '/qs') url = '/src/question.html';
        if (url == '/login') url = '/src/login.html';
        response.writeHead(200);
    } else {
        var page = query.part;
        var isLogin = 'false';
        var id = '';
        if (page === 'login_check') {
            for (var i in data) {
                if (data[i].sdmId === query.sdmId && data[i].sdmPw === query.sdmPw) {
                    isLogin = 'true'; //아이디 비번 일치하면 쿠키생성
                    id = query.sdmId;

                    break;
                }
            }
            url = '/src/' + page + '.html';
        }
        if (page === 'logout') url = '/src/index.html';
        response.writeHead(200, {
            'Set-Cookie': ['isLogin=' + isLogin, 'id=' + id],
        });
    }
    if (url == '/favicon.ico') return response.writeHead(404);

    // console.log(request.headers.cookie);
    // var cookies = {};
    // cookies = cookie.parse(request.headers.cookie); // 내 pc에 저장된 쿠키를 가져와 객체로 저장
    // console.log(cookies.id);

    // , {
    //     'Set-cookie': ['id=sky', 'pw=1234'],
    //쿠키를 만드는 방법 id는 key sky는 value에 해당된다

    response.end(fs.readFileSync(__dirname + url));

    // response.end('aaa');
});
app.listen(3000);

//cd .\NodeJS(파일 이름)\(NodeJS밑에 있는 파일)web-nodejs2\적어주기
//App은 src바깥쪽 web-nodejs2안에다 넣어주기
//web-nodejs2을 넣어준 상태에서 어디 js에 넣어줄지 확인하고 App.js넣어주기

//<내가 코딩을 실수하는 101가지 이유>
//1. 오타 손가락이 문제다.거의 85%
//2. 제대로 보지 못한다.15%
//3. 한가지만 생각하는 나쁜 병이 있다  ㅠ
