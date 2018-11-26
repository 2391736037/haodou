<template>
	<div id="">
		<register-top></register-top>
		<div class="bodybox">
			<div class="contentbox">
				<h2 class="h_text2">登录好豆网</h2>
				<p class="p_txt">在好豆网可以查看菜谱，发现美食，结交朋友</p>
				<div class="leftbox">
					<!--<el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
						<el-form-item prop="email" label="账号：" :rules="[
					      	{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
					      	{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
					    ]">
							<el-input v-model="dynamicValidateForm.email" placeholder='邮箱/手机号码' class='inp'></el-input>
						</el-form-item>
						<el-form-item label="* 密码：" prop="pass">
							<el-input type="password" v-model="dynamicValidateForm.pass" autocomplete="off" placeholder="请输入您的密码" class='inp'></el-input>
						</el-form-item>
						<el-form-item>
						    <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
						    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
						</el-form-item>
					</el-form>-->
					
					 <el-form ref="form" :model="form" label-width="100px">
          <!--<el-row type="flex" justify="center">
              <el-col :span="5">
                  <el-form-item label-width="70px">
                    <span><font color="pink" size="3">注册登录页面</font></span>
                  </el-form-item>
              </el-col>
          </el-row>-->
          <el-row type="flex" justify="left">
              <el-col :span="100">
                  <el-form-item label="账号：" prop="name">
                      <el-input v-model="form.name" size="small" placeholder='邮箱/手机号码'></el-input>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row type="flex" justify="left">
              <el-col :span="100">
                  <el-form-item label="密码：" prop="password">
                      <el-input v-model="form.password" size="small" placeholder='请输入您的密码'></el-input>
                  </el-form-item>
              </el-col>
          </el-row>
           <el-row type="flex" justify="left">
              <el-col :span="100">
                  <el-form-item>
                      <input type="checkbox" />记住密码
                      <a href="#" class="a_forget">忘记密码？</a>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row type="flex" justify="left">
              <el-col :span="100">
                  <el-form-item>
                      <el-button @click="submit" class='bnt'>登录</el-button>
                  </el-form-item>
              </el-col>
          </el-row>
      </el-form>

				</div>
				<div class="rightbox">
					<p class="p_other">已有账号？
						<a href="#" class="a_res">立即登录！</a>
					</p>
					<p>使用以下账号快速登录：</p>
					<a href="https://api.weibo.com/oauth2/authorize?client_id=1676587957&redirect_uri=http%3A%2F%2Flogin.haodou.com%2Fcall.php%3Fsite%3D3%26from%3D1%26do%3Dbind%26is_new%3D0&response_type=code&state=&display=default">
						<div class="weibobox2"></div>
					</a>
					<a href="https://graph.qq.com/oauth2.0/show?which=error&display=pc&error=100010&client_id=200063&redirect_uri=http%3A%2F%2Flogin.haodou.com%2Fcall.php%3Fsite%3D6%26from%3D1%26do%3Dbind%26is_new%3D0&response_type=code&scope=get_user_info%2Cadd_share%2Cget_fanslist">
						<div class="qqbox2"></div>
					</a>
				</div>
				<div class="clear"></div>
			</div>

		</div>
		<register-bottom></register-bottom>
	</div>
</template>

<!--数据存贮交互，事件控制地区-->
<script>
export default {
  name: 'firstdemo',
  data () {
    return {
        form:{
            name:'',
            password:'',
        },
      
    }
  },
  methods:{
      /*提交进行判断的函数 */
      submit:function(){
          if(this.form.name==="张三"&&this.form.password==="123456")
          alert("登陆成功")
          else
          alert("账号或密码错误")
      }

  },
}
</script>


<style scoped>
	.bodybox {
		background: url(../assets/body_bg.png);
		padding-left: 200px;
		padding-right: 200px;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	
	.contentbox {
		background: #fff;
		padding-left: 60px;
		padding-top: 40px;
		/*padding-bottom: 40px;*/
	}
	
	.h_text2 {
		font-weight: normal;
		font-size: 22px;
		color: #666;
	}
	
	.inp {
		width: 46%;
	}
	
	.leftbox {
		width: 65%;
		border-right: 1px solid #e7e7e7;
		float: left;
	}
	
	.rightbox {
		float: left;
		height: 280px;
		width: 26%;
		/*background: orange;*/
		font-size: 12px;
		padding-left: 30px;
	}
	
	.clear {
		clear: both;
	}
	
	.a_res {
		color: #84b70a;
		text-decoration: none;
		font-size: 12px;
	}
	
	.p_other {
		margin-bottom: 20px;
	}
	
	.weibobox2 {
		margin-top: 6px;
		width: 124px;
		height: 31px;
		background: url(../assets/icon32s.png) 0px -863px;
	}
	
	.weibobox2:hover {
		background: url(../assets/icon32s.png) 0px -831px;
	}
	
	.qqbox2 {
		margin-top: 3px;
		width: 124px;
		height: 31px;
		background: url(../assets/icon32s.png) 0px -898px;
	}
	
	.qqbox2:hover {
		background: url(../assets/icon32s.png) 0px -930px;
	}
	
	.p_txt {
		color: #666;
		padding-top: 10px;
		font-size: 14px;
		padding-bottom: 60px;
	}
	.a_forget {
		color: #666;
		text-decoration: none;
		font-size: 12px;
		margin-left: 60px;
	}
	.a_forget:hover {
		color: #84b70a;
		text-decoration: underline;
	}
	.bnt {
		background: #709f00;
		color: #fff;
		font-weight: 700;
		width: 160px;
	}
	.bnt:hover {
		background: #8bc10a;
	}
</style>