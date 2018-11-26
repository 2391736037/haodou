<template>
	<div id="bodybox">
		<div class="onebox">
			<p class="title">菜式菜品</p>
			<p class="a_txt"><a href="#">家常菜</a></p>
			<p class="a_txt"><a href="#">下饭菜</a></p>
			<p class="a_txt"><a href="#">创意菜</a></p>
			<p class="a_txt"><a href="#">下酒菜</a></p>
			<p class="a_txt"><a href="#">卤菜</a></p>
			<p class="a_txt"><a href="#">面食</a></p>
			<p class="a_txt"><a href="#">粥</a></p>
			<p class="a_txt"><a href="#">汤</a></p>
		</div>
		<div class="onebox">
			<p class="title">菜系</p>
			<p class="a_txt"><a href="#">川菜</a></p>
			<p class="a_txt"><a href="#">粤菜</a></p>
			<p class="a_txt"><a href="#">湘菜</a></p>
			<p class="a_txt"><a href="#">鲁菜</a></p>
			<p class="a_txt"><a href="#">京菜</a></p>
			<p class="a_txt"><a href="#">东北菜</a></p>
			<p class="a_txt"><a href="#">西餐</a></p>
			<p class="a_txt"><a href="#">日本料理</a></p>
		</div>
		<div class="onebox">
			<p class="title">时令食材</p>
			<p class="a_txt"><a href="#">南瓜</a></p>
			<p class="a_txt"><a href="#">莲藕</a></p>
			<p class="a_txt"><a href="#">山药</a></p>
			<p class="a_txt"><a href="#">螃蟹</a></p>
			<p class="a_txt"><a href="#">冬瓜</a></p>
			<p class="a_txt"><a href="#">茄子</a></p>
		</div>
		<div class="onebox">
			<p class="title">功效</p>
			<p class="a_txt"><a href="#">护肝</a></p>
			<p class="a_txt"><a href="#">养心</a></p>
			<p class="a_txt"><a href="#">补肾</a></p>
			<p class="a_txt"><a href="#">养胃</a></p>
			<p class="a_txt"><a href="#">丰胸</a></p>
			<p class="a_txt"><a href="#">排毒</a></p>
			<p class="a_txt"><a href="#">补血</a></p>
			<p class="a_txt"><a href="#">补钙</a></p>
		</div>
		<div class="onebox">
			<p class="title">场景</p>
			<p class="a_txt"><a href="#">早餐</a></p>
			<p class="a_txt"><a href="#">午餐</a></p>
			<p class="a_txt"><a href="#">下午茶</a></p>
			<p class="a_txt"><a href="#">晚餐</a></p>
			<p class="a_txt"><a href="#">夜宵</a></p>
			<p class="a_txt"><a href="#">冬季</a></p>
			<p class="a_txt"><a href="#">10分钟内</a></p>
			<p class="a_txt"><a href="#">10-20分钟</a></p>
		</div>
		<div class="onebox">
			<p class="title">工艺口味</p>
			<p class="a_txt"><a href="#">炒</a></p>
			<p class="a_txt"><a href="#">蒸</a></p>
			<p class="a_txt"><a href="#">煮</a></p>
			<p class="a_txt"><a href="#">电饭煲</a></p>
			<p class="a_txt"><a href="#">微波炉</a></p>
			<p class="a_txt"><a href="#">烤箱</a></p>
			<p class="a_txt"><a href="#">酸</a></p>
			<p class="a_txt"><a href="#">甜</a></p>
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
	
	a {
		text-decoration: none;
	}
	#bodybox {
		width: 70%;
		/*height: 20px;*/
		background: url(../assets/body_bg.png);
		padding-left: 15%;
		padding-right: 15%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding-bottom: 34px;
	}
	.title {
		color: #6a9700;
		font-size: 14px;
    	font-weight: bold;
    	width: 100%;
    	padding-top: 34px;
	}
	.onebox {
		display: flex;
		flex-wrap: wrap;
		width: 30%;
	}
	.a_txt {
		width: 25%;
		font-size: 12px;
	}
	.a_txt>a {
		color: #666;
	}
	.onebox>p {
		padding-bottom: 10px;
	}
	.a_txt>a:hover {
		color: #84b70a;
		text-decoration: underline;
	}
</style>