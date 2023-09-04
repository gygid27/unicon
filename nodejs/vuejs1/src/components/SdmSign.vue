<template>
    <main id="main">
        <section id="content">
            <h3>스즈메 회원가입</h3>
            <div id="sign_wrap">
                <div id="sign_part">
                    <div class="sign_input">
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
                        -<input type="tel" name="sdmTel2" id="sdmTel2" /> -
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
        </section>
    </main>
</template>

<style>
#main {
    margin: 20px 0;
}

#content {
    width: 1000px;
    height: 300px;
    margin: 0 auto;
    background-color: antiquewhite;
}

#content h3 {
    text-align: center;
    padding: 9px 50px;
    border-bottom: 2px solid burlywood;
    /* background-color: ; */
}

#sign_wrap {
    width: 100%;
    margin: 40px 273px;
    /* padding:10px 0; 전체의 웹이움직임 생각하고 하자 */
    /* display:flex;
    flex-direction: column; */
    /* justify-content: ; */
    /* margin-bottom:20px; */
    /* padding:0 30px; */
}

/* #sign_part{
    /* margin:10px 0;
    margin-bottom: 10px;

}  */

.sign_input {
    /* width:500px; */
    /* display:flex;
    justify-content: space-between;  */
    /* row-gap: 20px;
    column-gap: 20px;  */
    padding: 10px 0;
}

#email {
    width: 120px;
    height: 20px;
    margin: 0 25px;
}

#password {
    width: 120px;
    height: 20px;
    margin: 0 10px;
}

#sdmTel1 {
    width: 50px;
    height: 20px;
    margin-left: 25px;
}

#sdmTel2 {
    width: 100px;
    height: 20px;
    /* margin:0 9px; */
}

#sdmTel3 {
    width: 100px;
    height: 20px;
    /* margin:0 9px; */
}

#addr {
    width: 120px;
    height: 20px;
    margin: 0 10px;
}

#wDate {
    width: 123px;
    height: 20px;
    margin: 0 15px;
}

.sign_bt_part {
    margin: -60px 497px;
    padding: 29px;
}

.sign_bt {
    /* margin:10px 0; */
    text-decoration: none;
    display: inline-block;
    width: 133px;
    height: 42px;
    background-color: rgb(199, 191, 118);
    color: black;
    font-weight: 900;
    text-align: center;
    margin: -21px 0;
    padding: 9px 0;
}
</style>
