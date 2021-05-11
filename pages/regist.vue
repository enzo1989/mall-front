<template>
  <div>
      <!-- 注册主体部分start -->
	<div class="login w990 bc mt10 regist">
		<div class="login_hd">
			<h2>用户注册</h2>
			<b></b>
		</div>
		<div class="login_bd">
			<div class="login_form fl">
				<form action="" method="post">
					<ul>
						<li>
							<label for="">用户名：</label>
							<input type="text" class="txt" name="username" v-model="regForm.name" />
							<p>3-20位字符，可由中文、字母、数字和下划线组成</p>
						</li>
						<li>
							<label for="">密码：</label>
							<input type="password" class="txt" name="password" v-model="regForm.password" />
							<p>6-20位字符，可使用字母、数字和符号的组合，不建议使用纯数字、纯字母、纯符号</p>
						</li>
						<li>
							<label for="">确认密码：</label>
							<input type="password" class="txt" name="password" v-model="regForm.repassword"/>
							<p> <span>请再次输入密码</span></p>
						</li>
					    <li>
							<label for="">手机号码：</label>
							<input type="text" class="txt" name="mobile" v-model="regForm.mobile" />
							<!--input type="button" value="点击发送短信验证码"-->
                            <button @click.prevent="sendsms" :disabled="smsBtnDisabled">点击发送短信验证码 <span v-if="smsBtnDisabled">{{seconds}}</span></button>
						</li>
						<li class="checkcode">
							<label for="">验证码：</label>
							<input type="text"  name="code" v-model="regForm.code" />
						</li>
						<li>
							<label for="">&nbsp;</label>
							<input type="checkbox" class="chb" checked="checked" /> 我已阅读并同意《用户注册协议》
						</li>
						<li>
							<label for="">&nbsp;</label>
							<!--input type="submit" value="" class="login_btn" /-->
                            <button class="login_btn" @click.prevent="submit"></button>
						</li>
					</ul>
				</form>

				
			</div>
			
			<div class="mobile fl">
				<h3>手机快速注册</h3>			
				<p>中国大陆手机用户，编辑短信 “<strong>XX</strong>”发送到：</p>
				<p><strong>1069099988</strong></p>
			</div>

		</div>
	</div>
	<!-- 注册主体部分end -->
  </div>
</template>

<script>
//import sysConfig from '@/plugins/sysconfig.js'
export default {
    layout : 'loginAndRegist',
    data(){
        return{
            regForm:{},
            smsBtnDisabled:false,
            seconds:5,
            localTimer:null,
        }
    },
    methods:{
        async submit(){
            //let{data} = await this.$axios.$post(sysConfig.baseURL + '/web-service/regist',this.regForm)
            let{data} = await this.$axios.$post('/web-service/regist',this.regForm)
            //console.log(data)
            if(data.errno==0){
                alert("regist success, can login")
                this.$router.push("/login")
            } else{
                alert(data.errmsg)
            }
        },
        async sendsms(){
            //let{data} = await this.$axios.$post(sysConfig.baseURL + '/web-service/regist',this.regForm)
            let{data} = await this.$axios.$post('/web-service/regist',this.regForm)
            if(data.errno==0){
                this.smsBtnDisabled = true
                alert("send sms success")
                this.localTimer = setInterval(this.timer,1000)
            } else{
                alert(data.errmsg)

            }
        },
        timer() {
            if(this.seconds > 0){
                this.seconds--;
            } else{
                this.smsBtnDisabled = false
                this.seconds = 5
                clearInterval(this.localTimer)
            }
        }

    }
}
</script>

<style>

</style>