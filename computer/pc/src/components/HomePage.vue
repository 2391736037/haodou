<template>
	<div class="index">

		<el-container>
			<el-header style='height: 30px;border-bottom: 5px solid #eee;'><top-nav></top-nav></el-header>
			<el-container>
				<el-aside style="float: right;" width=200px><side-left></side-left></el-aside>
				<el-container>
					<el-main style="background-color: #5ee;">Main</el-main>
				</el-container>
				
			</el-container>
			 <el-footer><foot-nav></foot-nav></el-footer>
		</el-container>
	</div>
</template>

<script>
	import TopNav from '../components/zujian/TopNav';
		export default {
		name: 'HomePage',
		components: {
			TopNav
		}
	}
</script>

<style>
	.clear {
		clear: both;
	}
	
	
	a {
		text-decoration: none;
	}
	body{
		background-image:url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1849193347,1601849245&fm=27&gp=0.jpg) ;
		background-size: 100%;
		background-repeat: no-repeat;
	}
	.left-wei{
		float: right;
	}
</style>