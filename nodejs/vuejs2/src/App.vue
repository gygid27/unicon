<script setup>
import { RouterLink, RouterView } from 'vue-router'
//router 주된 역할은 올바른 경로 설정
import TopMenu from './components/TopMenu.vue'
//스크립트 안에 들어가있는 것이 다르다
</script>
<template>
  <header>
    <div id="header_wrap">
      <div class="logo">
        <RouterLink to="/"><img src="@/assets/1.jpg" /></RouterLink>
      </div>
      <div class="menu_wrap">
        <TopMenu />
        <nav class="nav">
          <div class="menu"><RouterLink to="/intro">센터소개</RouterLink></div>
          <div class="menu"><RouterLink to="/information">동물보호정보</RouterLink></div>
          <div class="menu"><RouterLink to="/adoption">입양</RouterLink></div>
          <div class="menu"><RouterLink to="/join">참여소통</RouterLink></div>
          <div class="menu"><RouterLink to="/park">반려동물공원</RouterLink></div>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  position: relative;
}

header {
  width: 100%;
  position: relative;
  border-bottom: 1px solid black;
}

#header_wrap {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 50px 0 25px 0;
}

#header_wrap .logo {
  width: 200px;
}

#header_wrap .logo img {
  width: 100%;
}

.menu_wrap {
  width: 100%;
}

.menu_wrap .nav {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
</style>
