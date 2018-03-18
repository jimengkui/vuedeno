<template>
	<div class="box">
	<div class="head1">
		<img src="../assets/iconLeftAlign.png" />
		发布文章
		<div class="login">
	    <ul id="ul1">
	    	<li><span class="span0">*</span><span class="span1">发布到</span></li>
	    	<li>
	    	<select class="select">
	    		<option>科研教育</option>
	    		<option>xxxxx</option>
	    		<option>xxxxx</option>
	    		<option>xxxxx</option>
	    	</select>
	    	<select class="select">
	    		<option>学校管理</option>
	    		<option>xxxxx</option>
	    		<option>xxxxx</option>
	    		<option>xxxxx</option>
	    	</select>
	    	<span class="span2"></span>
	    	</li>
	    	
	    	<!----------------------------------------------------------------->
	    	<li>
	    	<select class="select">
	    		<option>栏目</option>
	    		<option>xxxxx</option>
	    		<option>xxxxx</option>
	    		<option>xxxxx</option>
	    	</select>
	    	<select class="select">
	    		<option>类别</option>
	    		<option>xxxxx</option>
	    		<option>xxxxx</option>
	    		<option>xxxxx</option>
	    	</select>
	    	<span class="span2"></span>
	    	</li>
	    	<!----------------------------------------------------------------->
	    	<li><span class="span3"></span></li>
	    	<!----------------------------------------------------------------->
	    	<li><span class="span0">*</span><span class="span1">标题</span></li>
        	<li>
	    	<input type="text" id="title" value="" >
	    	</li>
	    	<li><span class="span0">*</span><span class="span1">作者</span></li>
	    	<li>
	    	<input type="text" class="author" value="" >
	    	<select class="select1">
	    		<option>常用作者</option>
	    		<option>xxxxx</option>
	    		<option>xxxxx</option>
	    		<option>xxxxx</option>
	    	</select>
	    	</li>
	    	<!----------------------------------------------------------------->
	    	
	    	<li><span class="span0">*</span><span class="span1">审核</span></li>
	    	<li>
	    	<input type="text" class="author" value="曹令梅" >
	    	<select class="select1">
	    		<option>常用作者</option>
	    		<option>xxxxx</option>
	    		<option>xxxxx</option>
	    		<option>xxxxx</option>
	    	</select>
	    	</li>
	    	<!----------------------------------------------------------------->
	    	
	    	<li><span class="span0">*</span><span class="span1">内容</span></li>
	    </ul>
    </div>
	</div>
	
	</div>
</template>

<script>
	
</script>

<style>
	.box{
		display: block;
	}
	.head1{
		display:inline-block;
		width: calc(100% - 220px);
        height:50px;
		background: white;
		position:absolute;
		top:10px;
		left:210px;
		text-align: left;
		text-indent: 55px;
		font:bold 20px/50px "微软雅黑"
	}
	.head1 img{
		position:absolute;
		left: 0px;
		margin: 11px;
	}
	.login{
		width:100%;
		margin:10px;
		margin-left:0px;
		height:713px;
		background: white;
	}
	.span0{
		color: red;
		font-size:15px;
	}
	
	 li{
	 	
		list-style: none;
		margin-bottom:-15px;
	}
	#ul1{
		width:70%;
		position:relative;
		left:-40px;
		top:10px;
	}
	#ul1 li:nth-of-type(2){
		margin-top: -30px;;
	}
	#ul1 li:nth-of-type(4){
		margin-bottom:-10px;
	}
	#ul1 li:nth-of-type(6){
		margin-bottom:10px;
	}
	#ul1 li:nth-of-type(8){
		margin-bottom:10px;
	}
	#ul1 li:nth-of-type(10){
		margin-bottom:10px;
	}
	
	select{
		width:35%;
		height:34px;
		border: solid 1px rgb(210,210,210);
		border-radius: 8px;
		margin-right:15px;
		text-indent:5px;
		font-size: 15px;
		line-height: 34px;
		font-weight: normal;
		appearance:none;
		background: url(../assets/下拉菜单.png) no-repeat scroll 105% transparent;
	}
	
	input{
		height:34px;
		border: solid 1px rgb(210,210,210);
		border-radius: 8px;
		margin-right:15px;
		font-size: 17px;
		font-weight: normal;
		text-indent: 10px;
		font:"微软雅黑";
	}
	#title{
		width: 73%;
	}
	.author{
		width: 35%;
		
		
	}
	
	.span2{
		display: inline-block;
		width:50px;
		height:50px;
		background:url(../assets/未标题-1.png) no-repeat;
		position:relative;
		top:23px;
		left:-15px;
	}
	.span3{
		display: inline-block;
		width:50px;
		height:50px;
		background:url(../assets/未标题-2.png) no-repeat;
		position:relative;
		top:8px;
		left:-15px;
	}
	
</style>