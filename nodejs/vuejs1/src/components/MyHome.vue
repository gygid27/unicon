<template>
    <main id="main">
        <section id="content">
            <img src="../assets/wd.jpg" />
        </section>
        <section id="side">
            <div class="login_bt"><a href="/login">로그인</a></div>
        </section>
    </main>
</template>
<script>
export default {
    name: 'MyHome',
};
//사진을 옮기면 png소문자로 해야하기 대문자로 PNG하면 오류가 뜬다.
</script>

<style>
#main img {
    width: 100%;
}

#side .login_bt {
    padding: 5px 2px;
}

#side .login_bt a {
    width: 100%;
    height: 35px;
    margin: 0 10px;
    padding: 5px 20px;
    color: white;
    display: inline-block;
    text-decoration: none;
    background-color: pink;
    border: 1px solid pink;
    text-align: center;
    border-radius: 4px;
}
</style>
