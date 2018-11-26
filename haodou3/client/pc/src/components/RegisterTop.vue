<template>
	<div id="">
		<div id="lvbox">
			<ul class="ul_left">
				<li><a href="#">好豆网</a>|</li>
				<li><a href="#">菜谱</a>|</li>
				<li><a href="#">广场</a>|</li>
				<li><a href="#">商城</a></li>
				<!--<li class="clear"></li>-->
			</ul>
			<div class="p_right"> 欢迎您来到好豆！请 <a href="#" class="hov">登录</a> 或 <a href="#" class="hov">注册</a></div>
			<a href="https://graph.qq.com/oauth2.0/show?which=error&display=pc&error=100010&client_id=200063&redirect_uri=http%3A%2F%2Flogin.haodou.com%2Fcall.php%3Fsite%3D6%26from%3D1%26do%3Dbind%26is_new%3D1&response_type=code&scope=get_user_info%2Cadd_share%2Cget_fanslist">
				<div class="qqbox"><img class="qq_pic" src="../assets/QQ.png"></img> <span class="qq_text">QQ登录</span></div>
			</a>
			<a href="https://api.weibo.com/oauth2/authorize?client_id=1676587957&redirect_uri=http%3A%2F%2Flogin.haodou.com%2Fcall.php%3Fsite%3D3%26from%3D1%26do%3Dbind%26is_new%3D1&response_type=code&state=&display=default">
				<div class="weibobox"><img class="weibo_pic" src="../assets/weibo.png"></img> <span class="weibo_text">微博登录</span></div>
			</a>
			<div class="clear"></div>
		</div>
		<div class="zhanwei"></div>
		<div class="traffic">
			<h2 class="h_text">好豆通行证</h2>
			<img src="../assets/haodou.png" class="haodou_pic"/>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	#lvbox {
		width: 70%;
		padding-left: 15%;
		padding-right: 15%;
		/*padding-left: 200px;
		padding-right: 200px;*/
		background-color: rgba(106,151,0,.9);
		height: 30px;
		line-height: 30px;
		/*width: 72%;*/
		position: fixed;
		font-size: 12px;
		top: 0;
		left: 0;
		z-index: 100;	
	}
	ul,li {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
	.clear {
		clear: both;
	}
	.ul_left>li {
		float: left;
		color: #fff;
		
	}
	.ul_left>li a {
		color: #fff;
		padding-left: 6px;
		padding-right: 6px;
	}
	.ul_left>li a:hover,
	.hov:hover {
		color: goldenrod;
	}
	.p_right {
		float: left;
		margin-left: 390px;
		color: #d5d5d5;
	}.p_right>a {
		color: #fff;
	}
	.qqbox,.weibobox {
		width: 70px;
		padding-left: 5px;
		padding-right: 5px;
		height: 24px;
		background: #fff;
		display: inline-block;
		margin-top: 3px;
		line-height: 24px;
		border-radius: 3px;
		color: #000;
		position: relative;
		margin-left: 20px;
	}
	.qq_pic,.weibo_pic {
		width: 22px;
		height: 22px;
		/*background: orchid;*/
	}
	.qq_text,.weibo_text {
		position: absolute;
		top: 0px;
	}
	.qq_text:hover,
	.weibo_text:hover {
		color: rgba(106,151,0,.9);
	}
	.traffic {
		width: 70%;
		padding-left: 15%;
		padding-right: 15%;
		/*padding-left: 200px;
		width: 85%;*/
		height: 60px;
		line-height: 60px;
		
	}
	.h_text {
		font-weight: normal;
    	font-size: 24px;
    	line-height: 29px;
    	display: inline-block;
	}
	.haodou_pic {
		float: right;
		margin-right: 200px;
		margin-top: 10px;
	}
	.zhanwei {
		height: 30px;
	}
</style>