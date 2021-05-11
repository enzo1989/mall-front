<template>
  <!-- 顶部导航 start -->
  <div class="topnav">
    <div class="topnav_bd w1210 bc">
      <div class="topnav_left"></div>
      <div class="topnav_right fr">
        <ul>
          <li v-if="isLogin">
            您好，欢迎 {{name}} 来到商城！
            [<a href="#" @click.prevent="logout">退出</a>]
          </li>
          <li v-else>
            您好，欢迎来到商城！
            [<a href="#" @click.prevent="login">登录</a>] 
            [<a href="#" @click.prevent="regist">免费注册</a>]
          </li>
          <li class="line">|</li>
          <li>我的订单</li>
          <li class="line">|</li>
          <li>客户服务</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- 顶部导航 end -->
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data() {
      return{

      }
    },
    methods: {
      ...mapMutations({
        setName: 'loginStore/setName',
        setToken: 'loginStore/setToken',
        changeLoginState: 'loginStore/changeLoginState',
      }),
      login(){
        this.$router.push("/login")
      },
      regist(){
        this.$router.push("/regist")
      },
      logout(){
        //清空数据
        this.setName(null)
        this.setToken(null)
        this.changeLoginState()
        localStorage.removeItem('name')
        localStorage.removeItem('token')
      }
    },
    computed: {
      // ...mapState(['name']) 以前在index.js中获取state的方式
      //第一个参数，就是store文件夹中的文件名
      ...mapState("loginStore",{
        name: state => state.name,
        isLogin: state => state.isLogin
      })
    },
    mounted() {
      //从本地存储中获取数据，重新放回vuex
      let name = localStorage.getItem('name')
      let token = localStorage.getItem('token')
      //放回vuex
      this.setName(name)
      this.setToken(token)
      this.changeLoginState()
    }
};
</script>

<style>
</style>