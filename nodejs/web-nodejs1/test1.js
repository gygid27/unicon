// console.log(100);
// nodejs 실행 방법
// 생성할 서버 내용을 담은 파일 만들기 (js파일)
// node 파일명.js
//localhost:포트번호
//포트 번호는 파일에 app.listen(포트번호)에 작성한 숫자를 사용한다.
//포트번호는 아무거나 하면 안된다.  사용중이 아닌 포트번호 해야된다.
//사용중이 아닌 포트번호 찾으려면 컴퓨터 포트번호 조회하는 방법 찾아보시오
// well-know port 도 사용하면 안됨.
//왠만하면 3000번을 쓰자
//favicon.ico 아이콘을 의마한다.
//nodejs 서버 소스 파일에 내용이 변경되면 반드시 서버를 중단하고 다시실행
//중단은 vscode에서는 터미널을 클릭하고 ctrl+c를 하면된다.

var http = require('http');
//작은 따옴표만 사용하기 자바스크립, nodejs
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var query = url.parse(_url, true).query;
    // console.log(query.part);
    var title = query.part;
    if (request.url == '/') {
        title = 'nodeJS 테스트';
    }
    if (request.url == '/login') {
        _url = '/login.html';
    }
    if (request.url == '/favicon.ico') {
        return response.writeHead(404);
        //오류가 발생했을 때
    }
    response.writeHead(200);
    fs.readFile(`./${query.part}`, 'utf8', function (err, desct) {
        if (desct == undefined)
            desct = `
            <ol>
                <li>테스트</li>
                <li>테스트2</li>
                <li>테스트3</li>
            </ol>`;

        var tmp = `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <a href="/">HOME</a>
        <a href="/login">로그인</a>
        <a href="?part=notice">공지사항</a>
        <a href="?part=freeBoard">자유게시판</a>
        <!--html이동하는 또다른 방법 part파라미터 ?쿼리스트리밍-->
        <h1>${title}</h1>
        <p>${desct || err}</p>
    </body>
</html>
`;
        response.end(tmp);
    });
});

app.listen(3000);
//<내가 코딩이 안돼는 이유>
//html과 js모두 같은 폴더에 있어야 한다. 오타, 추가로 내용을 넣었을 때 test1.js로 다시 입력해주기
//ctrl+c누르고 처음부터 다시 시작
//주소를 다시 적기 //http://localhost:3000/ 이 부분 다시 입력해주기

//터미널에서 서버중단,강제 종료하는 법 ctrl+c
// if (request.url == '/') {
//     url = '/index.html'; '/'이거를 가져오면 /index.html를 쓰자
// }
// if (request.url == '/login') {
//     url = '/login.html';
// }
