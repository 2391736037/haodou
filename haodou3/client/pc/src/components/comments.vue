<template>
	<div>
		<div class="bodybox">
			<div class="content_box">
				<h2 class="h_all">全部评论<span class="span_all">(10条)</span></h2>
				<div class="header_pic"></div>
				<div class="titlebox">
					<div class="facebox">
						<div class="face"></div>
						<div class="textbox" contenteditable='true'></div>
						<input type="button" class='fb' value="发布"></input>
						<div class="clear"></div>
					</div>
				</div>
				<div class="clear"></div>
				<div class="commentsbox" v-for="stu of stulist" :key="stu.uid">
					<!--<ul>
						<li v-for="stu of stulist" :key="stu.id">姓名：{{stu.name}},年龄：{{stu.age}},性别：{{stu.gender}}</li>
					</ul>-->
					<img :src="stu.header_pic" class="userpic" />
					<div class="comm">
						<a href="#" class="username">{{stu.username}}</a>
						<span class="grade">{{stu.grade}}</span>
						<span class="nottxt">最近发表了话题：<a href="#">{{stu.topic}}</a></span>
						<p class="p_time">
							<span class="nottxt">{{stu.time}}</span>
							<span class="nottxt span_laizi">来自<a href="#">{{stu.source}}</a></span>
							<a href="#" class="reply">回复</a>
							<div class="clear"></div>
						</p>
						<p class="content">{{stu.content}}</p>
					</div>
					<div class="clear"></div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'comments',
		data() {
			return {
				stulist: [{
					uid: 1,
					username: ' 龙宝宝陈诺',
					grade:'豆花',
					topic: '',
					time: '发表于2017-10-23 20:31',
					source: '好豆网',
					content: '我是一名宝妈，我也喜欢学做菜，孩子今年9岁了，正在长身体，所以我经常搜集一些对长身体有帮助的菜来做。健康管理师崴bjt579给孩子制定了一套身高管理方案，需要搭配各种锻炼和营养，我觉得这道菜还是不错的',
					header_pic: 'http://res.hoto.cn/5964ed410135db530c6898a5.jpg!w185h185'
				}, {
					uid: 2,
					username: ' 西马栀子',
					grade:'银豆',
					topic: '【深秋食语】好吃又滋补的虾滑耦合',
					time: '发表于2017-08-31 21:47',
					source: '好豆网',
					content: '来碗米饭',
					header_pic: 'http://avatar0.hoto.cn/46/bb/113478_70.jpg'
				}, {
					uid: 3,
					username: ' 焦木和尚',
					grade:'豆芽',
					topic: '',
					time: '发表于2017-08-31 17:49',
					source: '好豆网',
					content: '你家的菜色香味俱全 又实用好做 哈哈哈',
					header_pic: 'http://res.hoto.cn/5a6c2e790135db27dd269fe7.jpg!w185h185'
				}, {
					uid: 4,
					username: ' 喜爱豆子',
					grade:'豆子',
					topic: ' 【烘培甜点】白芝麻佛卡夏',
					time: '发表于2017-08-31 16:36',
					source: '好豆网',
					content: '好诱人啊',
					header_pic: 'http://res.hoto.cn/5a4faa460135db530c6bc59d.jpg!w185h185'
				}, {
					uid: 5,
					username: '   秋天到枫叶红',
					grade:'金豆',
					topic: ' 【深秋食语】简简单单家常菜香菜豆',
					time: '发表于2017-08-31 09:40',
					source: '好豆网',
					content: '色泽好诱人呀，香香的鸡腿。',
					header_pic: 'http://avatar1.hoto.cn/67/0f/1118055_70.jpg'
				}]
			}
		}
		/*,
				components: {
					TopHeader
				}*/
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
</style>

<style scoped>
	.bodybox {
		width: 70%;
		/*height: 20px;*/
		background: url(../assets/body_bg.png);
		padding-left: 15%;
		padding-right: 15%;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	
	.content_box {
		width: 590px;
		min-height: 100px;
		background: #fff;
		padding: 20px;
	}
	
	.h_all {
		color: #333;
		font-size: 14px;
		padding-bottom: 20px;
		/*background: orchid;*/
	}
	
	.span_all {
		font-weight: normal;
	}
	
	.header_pic {
		width: 70px;
		height: 70px;
		background: url(../assets/user.png);
		background-size: 100% 100%;
		float: left;
	}
	
	.titlebox {
		width: 482px;
		min-height: 200px;
		/*background: lightblue;*/
		float: left;
		margin-left: 20px;
	}
	
	.clear {
		clear: both;
	}
	
	.facebox {
		width: 100%;
		height: 15px;
		background: hotpink;
		padding-top: 10px;
		padding-bottom: 10px;
		border: 1px solid #e5e5e5;
		border-bottom: none;
		background: #F4f2eb;
	}
	
	.face {
		width: 17px;
		height: 17px;
		background: url(../assets/facemin.gif);
		margin-left: 10px;
		cursor: pointer;
	}
	
	.textbox {
		margin-top: 8px;
		width: 472px;
		height: 164px;
		border: 1px solid #e5e5e5;
		/*background: peru;*/
		padding: 5px;
		font-size: 12px;
		resize: none;
		overflow-y: auto;
	}
	
	.fb {
		border: 1px solid #73a400;
		color: #fff;
		text-shadow: 0 1px rgba(0, 0, 0, 0.1);
		background: #709f00;
		height: 30px;
		width: 60px;
		float: right;
		line-height: 30px;
		margin-top: 5px;
		margin-bottom: 40px;
		cursor: pointer;
	}
	
	.commentsbox {}
	
	.userpic {
		width: 70px;
		height: 70px;
		float: left;
	}
	
	.comm {
		width: 470px;
		min-height: 91px;
		/*background: peru;*/
		float: left;
		border: 1px solid #e5e5e5;
		/*position: relative;*/
		border-top: 2px solid #e5e5e5;
		margin-bottom: 40px;
		margin-left: 20px;
		padding: 10px;
		padding-top: 0px;
	}
	
	a {
		text-decoration: none;
		color: #333;
		font-size: 12px;
	}
	.comm>.username {
		margin-left: 16px;
	}
	.comm a:hover {
		color: #84b70a;
		text-decoration: underline;
	}
	.nottxt {
		font-size: 12px;
		color: #999;
	}
	.grade {
		color: #666;
		font-size: 12px;
	}
	.p_time {
		margin-top: 6px;
		margin-bottom: 6px;
	}
	.span_laizi {
		padding-left: 16px;
	}
	.reply {
		float: right;
	}
	.content {
		font-size: 15px;
		color: #333;
		margin-top: 16px;
	}
</style>