<template>
  <div class="login__index">
    <form class="wrap">
      <CompTextField ref="userNameTextField" v-model="userName"
                     hintText="请输入账号" fullWidth
                     :valid="userNameValid" />
      <CompTextField ref="passwordTextField" v-model="password"
                     hintText="请输入密码" fullWidth type="password"
                     :valid="passwordValid" />
      <CompTextField v-show="mod == 'register'"
                     ref="confirmPasswordTextField" v-model="confirmPassword"
                     hintText="请再次输入密码" fullWidth type="password"
                     :valid="confirmPasswordValid" />
      <!-- 登录模式 -->
      <div v-show="mod == 'login'" class="button-wrap">
        <mu-raised-button class="btn mr20" label="登 录" primary
                          @click="confirmLogin" />
        <mu-flat-button class="btn" label="去注册" primary
                        @click="goToRegister" />
      </div>
      <!-- 注册模式 -->
      <div v-show="mod == 'register'" class="button-wrap">
        <mu-raised-button class="btn mr20" label="注 册" primary
                          @click="confirmRegister" />
        <mu-flat-button class="btn" label="取 消" primary
                        @click="cancelRegister" />
      </div>
    </form>
  </div>
</template>

<script>
import CompTextField from '/src/components/CompTextField'

export default {
  name: 'LoginIndex',
  data() {
    return {
      userName: '',
      password: '',
      confirmPassword: '',
      userNameValid: [{ pattern: /[\w]{6}/, errorMsg: '账号不能为空且至少为6位合法字符' }],
      passwordValid: [{ pattern: /[\w]{6}/, errorMsg: '密码不能为空且至少为6位合法(非空格)字符' }],
      confirmPasswordValid: [{
        pattern: (val, vm) => val == vm.$parent.password,
        errorMsg: '两次密码不相同'
      }],
      mod: 'login' // 登录模式: login, 注册模式: register
    }
  },
  methods: {
    confirmLogin() {
      this.$alertRx('123')
      this.$alertRx('321')
      this.$alertRx('asd')
      this.$alertRx('dsa')
      setTimeout(() => {
        this.$alertRx('setTimeoutA 1')
        this.$alertRx('setTimeoutA 2')
        this.$alertRx('setTimeoutA 3')
        setTimeout(() => {
          this.$alertRx('setTimeoutB 1')
          this.$alertRx('setTimeoutB 2')
        }, 2000)
      }, 1000)
    },
    goToRegister() {
      this.$alert('123')
      this.$alert('321')
      this.$alert('asd')
      this.$alert('dsa')
      setTimeout(() => {
        this.$alert('setTimeoutA 1')
        this.$alert('setTimeoutA 2')
        this.$alert('setTimeoutA 3')
        setTimeout(() => {
          this.$alert('setTimeoutB 1')
          this.$alert('setTimeoutB 2')
        }, 2000)
      }, 1000)
    },
    confirmRegister() {
      console.log('确认注册')
    },
    cancelRegister() {
      console.log('取消注册')
    }
  },
  mounted() {

  },
  components: {
    CompTextField
  }
}
</script>

<style lang="less">
@import "/src/style/color";

.login__index {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  .wrap {
    box-sizing: border-box;
    padding: 40px;
    width: 700px;
    background-color: @white;
    border-right: 1px solid @silver;
    border-bottom: 1px solid @silver;
    .button-wrap {
      padding-top: 20px;
      text-align: center;
      .btn {
        min-width: 200px;
      }
    }
  }
}

</style>
