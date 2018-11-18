<template>
	<div class="foot">
		<div class="innerfoot">
			<el-row :gutter="20">
				<el-col :span="3">
					<div class="big">关于我们</div>
					<div>关于好豆</div>
					<div>加入好豆</div>
					<div>用户协议</div>
				</el-col>
				<el-col :span="3">
					<div class="big">客户服务</div>
					<div>帮助中心</div>
					<div>意见反馈</div>
					<div>联系客服</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<div class="big">关注好豆</div>
						<div>微博</div>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="image1">
						<a href="#"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=428605923,3138726742&fm=26&gp=0.jpg" /></a>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<div class="big">手机好豆</div>
						<div>好豆菜谱</div>
						<div>好豆wap版</div>
						<div>好豆win8版</div>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="big">微信二维码</div>
					<img class="mgt5" src="//www.haodou.com/public/images3/semacode_x64.png" alt="">
				</el-col>
				<el-col :span="3">
					<div class="big">友情链接</div>
					<div>菜谱大全</div>
					<div>56音乐网</div>
					<div>家常菜做法</div>
				</el-col>
			</el-row>
		</div>
		<div class="lastfoot">
			<p>© 2009-2017 好豆网 All Rights Reserved. </p>
			<p>湘ICP备B2-20080075-3 </p>
			<p>长公网技(备)第43010239000021号</p> 
			<p>北京好豆网络科技有限公司</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FootNav'
	}
</script>

<style scoped>
	.foot {
		width: 100%;
		background-color: #330;
		padding: 30px 0;
	}
	
	.innerfoot {
	
		margin: 0 auto;
		width: 950px;
		padding-left: 70px;
		font-size: ;
		color: #666;
	}
	
	.image1 img {
		width: 95px;
		height: 95px;
		border-radius: 50%;
	}
	.big{
		font-weight: 900;
	}
	.lastfoot{
		margin-top: 80px;
		color: #999;
		text-align: center;
		
	}
</style>