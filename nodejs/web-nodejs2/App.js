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
    //console.log(Object.keys(query).length == 0); 객체에 값이 있는지 없는 지 확인하ㅡㄴ 방법
    // console.log(query.part);
    if (Object.keys(query).length == 0) {
        if (url == '/') url = '/src/index.html';
        if (url == '/sign') url = '/src/signup.html';
        if (url == '/qs') url = '/src/question.html';
        if (url == '/login') url = '/src/login.html';
        response.writeHead(200);
    } else {
        //쿼리스트링이 있는 경우
        var page = query.part == undefined ? '' : query.part;
        var sub = query.sub == undefined ? '' : query.sub;
        var cookie_arr = [];
        if (sub === 'question') {
            //페이지 경로가 바뀌는 경우 , 주소가 바뀌는 것이 아니다
            cookie_arr = ['sub=qs'];
            url = '/src/login.html';
        }
        if (page === 'login_check') {
            cookie_arr = ['isLogin=false', 'id=""'];
            for (var i in data) {
                if (data[i].sdmId === query.sdmId && data[i].sdmPw === query.sdmPw) {
                    cookie_arr = ['isLogin=true', 'id=' + query.sdmId];

                    //isLogin = 'true'; //아이디 비번 일치하면 쿠키생성
                    //id = query.sdmId;

                    break;
                }
            }
            url = '/src/' + page + '.html';
        }
        if (page === 'logout') {
            cookie_arr = ['isLogin=false'];
            url = '/src/index.html';
        }
        vue;
        response.writeHead(200, {
            'Set-Cookie': cookie_arr,
        });
    }
    if (request.url == '/favicon.ico') {
        return response.writeHead(404);
    }

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
