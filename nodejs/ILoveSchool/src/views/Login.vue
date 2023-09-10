<template>
  <div class="login">
    <h3>Login</h3>
    <input type="text" v-model="email" placeholder="email" /><br />
    <input type="password" v-model="password" placeholder="password" />
    <button v-on:click="login">로그인</button>
    <p>
      또는 페이스북 로그인<br />
      <button v-on:click="facebookLogin">
        <img src="@/assets/facebook3.svg" />
      </button>
    </p>
    <p>만약 계정이 없다면, <RouterLink to="/signup">회원가입</RouterLink>을 먼저 진행시켜주세요</p>
  </div>
</template>
<script>
import { RouterLink, useRouter } from 'vue-router'
import firebase from 'firebase'
import vueSession from 'vue-session'
//사용하는 이유는 로그인 연결유지 때문에 사용

const router = useRouter()

var provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
  display: 'popup'
})

//매번 만들어야 한다.

const sessionStorage = window.sessionStorage

export default {
  name: 'login',
  data() {
    return { email: '', password: '' }
  },
  methods: {
    facebookLogin() {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          var token = result.credential.accessToken
          var user = result.user
          alert('로그인성공')
        })
        .catch((err) => {
          alert('에러 : ' + err.message)
        })
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          sessionStorage.setItem('user_id', user.user.id)
          this.$router.replace('msg')
        }) //로그인 성공하는 부분
        .catch((err) => {
          alert('에러 : ' + err.message)
        })
    }
  }
}
</script>
<style scoped>
.login {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.login input {
  height: 30px;
  padding: 5px 15px;
}
.login button {
  background: none;
  border: none;
}

.login button img {
  width: 150px;
  height: 50px;
  padding-right: 110px;
}
</style>
