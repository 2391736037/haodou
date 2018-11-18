<template>
	<div class='top'>
		<div class="innertop">
			<div class="left">
				<span>
					关注我们：
				</span>
			</div>
			<div class="right">
				<span class="kuaisu">
					快速发布<span class="el-icon-caret-bottom"></span>
				</span>
				<span>您尚未登录，请<a href="#">登录</a>或<a href="#">注册</a></span>
				<span><a class="login_vbn" href="http://login.haodou.com/call.php?do=connect&amp;site=3&amp;action=bind&amp;product=1&amp;is_new=1" rel="nofollow">&nbsp;</i>微博登录</a></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TopNav'
	}
</script>

<style scoped>
	.top{
		position:fixed;
		width:100%;
		height: 30px;
		background-color: #663;
		line-height: 30px;
		z-index: 1000;
		
	}
	.innertop{
		margin:0 auto;
		width: 970px;
	}
	.left{
		color: #eee;
		float: left;
	}
	.right{
		float: right;
	}
	.el-icon-caret-bottom{
		color: #666;
	}
	.kuaisu:hover{
		
	}
</style>