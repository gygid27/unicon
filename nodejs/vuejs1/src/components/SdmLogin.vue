<template>
    <b-icon icon="broadcast"></b-icon>
    <main id="main">
        <section id="content">
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
                        <!--inlineblock줘서 버튼의 크기를 누를 수 있게해준다.-->
                    </div>
                </form>
                <div class="joinfind">
                    <p class="find">아이디/비밀번호 찾기</p>
                    <p class="join"><a href="/sign">회원가입</a></p>
                </div>
            </div>
        </section>
    </main>
</template>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: 0;
}

#main {
    width: 1000px;
    height: 350px;
    background-color: bisque;
    margin: 50px auto;
}

#content {
    width: 600px;
    margin: 20px 370px;
}

#content .sub {
    padding: 23px 0;
    font-size: 30px;
}

/* .login_wrap {
    /* width: 900px; */
/* margin-right: 20px; */

.login_input {
    width: 270px;
    display: flex;
}

.login_input1 {
    display: flex;
    width: 250px;
    justify-content: space-between;
    padding: 10px 0;
}

.login_input label {
    padding: 0 5px;
}

.login_input1 label {
    padding: 0 5px;
}

#sdmId {
    width: 220px;
    height: 30px;
    /* border: none; */
    /* padding: 0 10px; */
}

#sdmPw {
    width: 220px;
    height: 30px;
    /* border: none; */
    /* padding: 0 10px; */
}

.login_bt {
    width: 220px;
    height: 30px;
    margin: 10px 2px;
    border: 1px solid burlywood;
    background-color: burlywood;
    padding: 5px 80px;
    display: inline-block;
    /* width: 100%; */
    text-decoration: none;
    color: white;
    /*a태그는 원래 inline 속성이라 너비, 높이를 안 먹는다*
    /*때문에 inline-block으로 바꿔서 너비와 높이를 먹을 수 있게 해준 것이다.*/
}

.joinfind {
    display: flex;
    gap: 10px;
    padding: 30px 0;
}

.join a {
    text-decoration: none;
    color: black;
}
</style>
