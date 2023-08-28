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
var app = http.createServer(function (request, response) {
    var url = request.url;
    if (request.url == '/') {
        url = '/index.html';
    }
    if (request.url == '/login') {
        url = '/login.html';
    }
    if (request.url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);
//html과 js모두 같은 폴더에 있어야 한다. 오타, 추가로 내용을 넣었을 때 test1.js로 다시 입력해주기
//http://localhost:3000/
//터미널에서 서버중단,강제 종료하는 법 ctrl+c
// if (request.url == '/') {
//     url = '/index.html'; '/'이거를 가져오면 /index.html를 쓰자
// }
// if (request.url == '/login') {
//     url = '/login.html';
// }
