<template>
  <div class="login">
    <form action="" ref="form" id="form" :model="form">
      <div>
        <label for="">用户名:</label>
        <input type="text" placeholder="请输入用户名" v-model="form.account">
      </div>
      <div>
        <label for="">密码:</label>
        <input type="text" placeholder="请输入密码" v-model="form.password">
      </div>
      <div>
        <button class="logBtn" @click="login">登录</button>
        <button class="resBtn">重置</button>
      </div>
    </form>
  </div>
</template>

<script>
// import Vue from 'vue'
// import { JSEncrypt } from 'jsencrypt'
// Vue.use(JSEncrypt)
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.axios({
        url: 'http://x.waiqin.co/api/authentications',
        method: 'post',
        data: this.form
      }).then(res => {
        console.log(res)
      })
    }
    // encryptPassword () {
    //   let PublicKey = 'MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAb6sVJ1LaIIpRR3U20ZbQPDvMkGy7A4ac7rAFz9QWW8pamYzGyfloIDER7OYj5C5S/YkMqXLMBTfc6SeTK9142QIDAQAB'
    //   let encrypt = new JSEncrypt()
    //   encrypt.setPublicKey(PublicKey)
    //   let encrypted = encrypt.encrypt(this.password)
    //   return encrypted
    // }
  }
}

</script>

<style>
.login {
  width: 300px;
  height: 200px;
  /* border: 1px solid #ccc; */
  margin: 100px auto;
}
#form div {
  margin-top: 10px;
}
#form div input {
  padding: 0 20px;
}
button {
  padding: 10px 10px;
  margin-left: 40px;
}
</style>
