<template>
  <div class="topMenu">
    <ul>
      <li>home</li>
      <li>로그인</li>
      <li>동물보호관리시스템</li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.topMenu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #ddd;
  color: black;
}

ul {
  display: flex;
  padding: 0;
  margin: 0 auto;
  width: 1200px;
  justify-content: end;
  list-style: none;
  padding: 10px 0;
  column-gap: 15px;
}
</style>
