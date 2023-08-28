//App.js

/*
  page 구성 - 메인, 회원가입, 문의
    메인 - index.html
    회원가입 - signup.html
    문의 - question.html
    각 페이지의 내용은 간단하게만 작성 (메인, 회원가입, 문의 페이지인지 구별되게만)
    
    url : 메인 - http://localhost:3000
    회원가입 : - http://localhost:3000/sign
    문의 - http://localhost:3000/qs
*/

var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
    var url = request.url;
    if (request.url == '/') url = 'index,html';
    if (request.url == '/sign') url = 'signup.html';
    if (request.url == '/qu') url = 'question.html';
    if (request.url == '/favicon.ico') {
        return response.writeHead(404);
        //오류가 발생했을 때
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});

app.listen(3000);
