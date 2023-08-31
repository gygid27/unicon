const http = require('http');
const fs = require('fs');
const url = require('url');
const template = require('./lib/template.js');

const app = http.createServer(function (request, response) {
    const pageURL = request.url;
    const query = url.parse(pageURL, true).query; //쿼리스트리밍
    const path = url.parse(pageURL, true).pathname; // 루트도메인 뒤 주소

    if (path === '/') {
        fs.readFile('./lib/page.json', 'utf8', function (err, data) {
            const dataParse = JSON.parse(data);
            const html = template.homeHTML(dataParse.main, dataParse.login_before);
            response.writeHead(200);
            response.write(html);
            response.end();
        });
    }
    if (path === '/login') {
        //로그인화면
        fs.readFile('./lib/page.json', 'utf8', function (err, data) {
            const dt = JSON.parse(data);
            const h = template.loginHTML(dt.main);
            response.writeHead(200);
            response.write(h);
            response.end();
        });
    }
    if (path == '/sign') {
        //회원가입 화면
        fs.readFile('./lib/page.json', 'utf8', function (err, data) {
            const dt = JSON.parse(data);
            const h = template.signHTML(dt.main);
            response.writeHead(200);
            response.write(h);
            response.end();
        });
    }
    if (path == '/qs') {
        var qdata = JSON.parse(fs.readFileSync('./lib/question.json', 'utf8'));
        html = template.questionHTML(dataParse.main, dataParse.login_before, qdata);
    }
    if (path.indexOf('.css') > -1) {
        var css_name = path.slice('/lib'.length);
        fs.readFile('./lib/' + css_name, function (err, data) {
            response.writeHead(200);
            response.write(data);
            response.end();
        });
    }
    if (path.indexOf('/image') > -1) {
        var img_name = path.slice('/image/'.length);
        fs.readFile('./image/' + img_name, function (err, data) {
            response.writeHead(200);
            response.write(data);
            response.end();
        });
    }
});
app.listen(3000);
