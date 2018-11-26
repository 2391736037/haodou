<template>
	<div>
		<register-top></register-top>
		<div class="bodybox">
			<div class="contentbox">
				<h2 class="h_text2">注册通行证</h2>
				<div class="leftbox">
					<p class="p_zhu">注册</p>
					<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" method='post'>
						<el-form-item label="* 手话号码：" prop="userid">
							<el-input v-model="ruleForm2.userid" placeholder="请输入你的手机号码" class='inp' @focus='hint0 ' @blur='lose0'></el-input><span :class="ruleForm2.myclass1" v-html="ruleForm2.myinfo0"></span>
						</el-form-item>
						<el-form-item label="昵称：" prop="name">
							<el-input v-model="ruleForm2.name" placeholder="长度在 8 到 16个字符" @focus='hint1' @blur='lose1' class='inp'></el-input><span :class="ruleForm2.myclass1" v-html="ruleForm2.myinfo"></span>
						</el-form-item>
						<el-form-item label="* 密码：" prop="pass">
							<el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="不少于6位，建议包含字母和数字" @focus='hint2' @blur='lose2' class='inp'></el-input><span :class="ruleForm2.myclass1" v-html="ruleForm2.myinfo2"></span>
						</el-form-item>
						<el-form-item label="* 确认密码：" prop="checkPass">
							<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="请确认您的密码" @focus='hint3 ' @blur='lose3' class='inp'></el-input><span :class="ruleForm2.myclass1" v-html="ruleForm2.myinfo3"></span>
						</el-form-item>

						<el-form-item>
							<el-button @click="submitForm('ruleForm2')" class="btn-bg">同意协议并注册</el-button>
							<!--<el-button @click="resetForm('ruleForm2')">重置</el-button>-->
						</el-form-item>
					</el-form>
					<a href="#" class="a_agr">《好豆网用户协议》</a>
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

<script>
	export default {
		data() {
			var checkPhone = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('号码不能为空'));
				}
				setTimeout(() => {
					if(!(/^1[34578]\d{9}$/.test(value))) {
						callback(new Error('请输入正确的电话号码'));
					} else {
						callback();
					}
				}, 1000);
			};
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.ruleForm2.checkPass !== '') {
						this.$refs.ruleForm2.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm2.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				ruleForm2: {
					name: '',
					pass: '',
					checkPass: '',
					myinfo0: '',
					myinfo: '',
					myclass1: 'hint1_font',
					myinfo2: '',
					myinfo3: '',
					userid: '',
				},
				rules2: {
					userid: [{
						validator: checkPhone,
						trigger: 'blur'
					}],
					name: [{
							required: true,
							message: '请输入昵称',
							trigger: 'blur'
						},
						{
							min: 8,
							max: 16,
							message: '长度在 8 到 16个字符',
							trigger: 'blur'
						}
					],
					pass: [{

							validator: validatePass,
							trigger: 'blur'
						},
						{
							min: 6,
							message: '长度不少于6个字符',
							trigger: 'blur'
						}
					],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],

				}
			};
		},
		methods: {

			submitForm(formName) {
				let _this = this;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
						// 要发送到后台的请求的数据
						/*console.log(_this.submitData);
						// post请求
						axios.post(
								"http:localhost:8080/register",
								_this.ruleForm2)
							.then(function(response) {
								console.log(response);
							})
							.catch(function(error) {
								console.log(error);
							});
					} else {
						console.log('error submit!!');
						return false;*/
					}
				});
			},
			/*resetForm(formName) {
				this.$refs[formName].resetFields();
			}*/
			hint0: function() {
				this.ruleForm2.myinfo0 = '您的注册账号'
			},
			lose0: function() {
				this.ruleForm2.myinfo0 = ''
			},
			hint1: function() {
				this.ruleForm2.myinfo = '让更多的豆友认识你'
			},
			lose1: function() {
				this.ruleForm2.myinfo = ''
			},
			hint2: function() {
				this.ruleForm2.myinfo2 = '最少6位，请使用英文字母、符号或数字'
			},
			lose2: function() {
				this.ruleForm2.myinfo2 = ''
			},
			hint3: function() {
				this.ruleForm2.myinfo3 = '请确认您的密码'
			},
			lose3: function() {
				this.ruleForm2.myinfo3 = ''
			},
			/*submitForm: function() {
				axios.post('/register', {
						firstName: 'Fred',
						lastName: 'Flintstone'
					})
					.then(function(response) {
						console.log(response);
					})
					.catch(function(error) {
						console.log(error);
					});
			}*/
		}
	}
</script>

<style scoped>
	.bodybox {
		background: url(../assets/body_bg.png);
		padding-left: 200px;
		padding-right: 200px;
		padding-top: 20px;
		padding-bottom: 20px;
		/*box-shadow: 2px 8px -2px 4px rgba(0,0,0,0.8);*/
	}
	
	.contentbox {
		background: #fff;
		padding-left: 60px;
		padding-top: 40px;
		padding-bottom: 40px;
	}
	
	.h_text2 {
		font-weight: normal;
		font-size: 22px;
		color: #666;
	}
	
	.leftbox {
		width: 65%;
		border-right: 1px solid #e7e7e7;
		float: left;
	}
	
	.p_zhu {
		color: #6a9700;
		font-size: 14px;
		width: 40px;
		text-align: center;
		border-bottom: 2px solid green;
		padding-top: 30px;
		margin-bottom: 20px;
		margin-left: 50px;
	}
	/*.demo-ruleForm {
		width: 60%;
	}*/
	
	.inp {
		width: 48%;
	}
	
	.inp1 {
		width: 55%;
	}
	
	.hint1_font {
		color: #ababab;
	}
	
	.lose1_font {
		color: orange;
	}
	
	.btn-bg {
		background: #709f00;
		color: #fff;
		font-weight: 700;
	}
	
	.btn-bg:hover {
		background: #8bc10a;
	}
	
	.a_agr {
		color: #666;
		text-decoration: none;
		font-size: 12px;
		margin-left: 110px;
	}
	
	.a_agr:hover {
		color: #84b70a;
		text-decoration: underline;
	}
	
	.rightbox {
		float: left;
		height: 350px;
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
</style>