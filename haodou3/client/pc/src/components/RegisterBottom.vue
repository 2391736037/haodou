<template>
	<div class="bg">
		<div>
			<div class="footer_box">
				<ul>
					<li class="weight_font">关于我们</li>
					<li><a href="#">关于好豆</a></li>
				</ul>
				<ul>
					<li class="weight_font">好豆旗下应用</li>
					<li><a href="#">手机菜谱</a></li>
					<li><a href="#">好豆wap版</a></li>
					<li><a href="#">豆win8版</a></li>
				</ul>
				<ul>
					<li class="weight_font">关注好豆产品</li>
					<li>好豆网</li>
				</ul>
				<ul>
					<li class="weight_font">好豆频道</li>
					<li><a href="#">好豆网</a></li>
				</ul>
			</div>
			<div class="footer_box2">
				<p class="footer_text1">© 2009-2016 好豆网 All Rights Reserved. </p>
				<p class="footer_text1">湘ICP备B2-20080075-3 </p>
				<p><a href="#" class="footer_text">长公网技(备)第43010239000021号 </a></p>
				<p><a href="#" class="footer_text">湖南红图网络科技有限公司</a></p>
			</div>
			
			
		</div>

	</div>
</template>

<script>
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
</style>

<style scoped>
	ul,
	li {
		list-style: none;
	}
	
	.bg {
		width: 70%;
		padding-left: 15%;
		padding-right: 15%;
		/*width: 966px;*/
		height: 242px;
		background: url(../assets/footer_bg.jpg);
		/*padding-left: 200px;
		padding-right: 200px;*/
	}
	
	.footer_box {
		display: flex;
		justify-content: space-between;
		padding-top: 10px;
	}
	
	.footer_box li {
		font-size: 12px;
		margin-top: 10px;
		color: #666;
	}
	.footer_box .weight_font {
		font-size: 14px;
		font-weight: bold;
		color: #000;
	}
	.footer_text1 {
		font-size: 12px;
		color: #999;
	}
	.footer_text,
	.footer_box a {
		font-size: 12px;
		color: #666;
		text-decoration: none;
	}
	.footer_box a:hover {
		color: #84b70a;
		text-decoration: underline;
	}
	.footer_box2>p {
		text-align: center;
	}
	.footer_box2 {
		margin-top: 20px;
	}
	
</style>