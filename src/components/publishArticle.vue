<template>
	<div class="box">
	<div class="head1">
		<img src="../assets/iconLeftAlign.png" />
		账户管理
		<div class="login">
			<ul>
				<li><span class="span0">*</span><span class="span1">原密码</span></li>
				<li>
					<input type="text" id="oldpassworld" value="">
				</li>
		       </ul>
		    <ul>
			    <li><span class="span0">*</span><span class="span1">新密码</span></li>
				<li><input type="text" id="newpassworld" value="" ></li>
				</ul>
		    <ul>
			    <li><span class="span0">*</span><span class="span1">确认新密码</span></li>
				<li><input type="text" id="checkpassworld" value=""></li>
				</ul>
				<div id="resetting">重置</div>
				<div id="save">保存</div>
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
		margin:10px;
		margin-top:-7px;
		height:713px;
		background: white;
	}
	.span0{
		color: red;
		font-size:15px;
	}
	ul{
		margin-bottom: -10px;
	}
	 li{
		list-style: none;
		margin-bottom: -20px;
	}
	input{
		width:30%;
		height:30px;
		border-radius: 5px;
		font:20px;
		
	}
	input:hover{
		border-color: rgba(17,104,234,0.5);
	}
	.span1{
		font: bold 15px/30px "微软雅黑";
	}
	#resetting{
		display: inline-block;
		width:55px;
		height:40px;
		background:rgb(232,232,232) ;
		text-indent:0px;
	    font:15px/40px "微软雅黑";
	    position:relative;
	    left:15%;
	    top:30px;
	    text-align: center;
	    border-radius: 5px;
	    cursor: pointer;
	}
	#save{
		display: inline-block;
		width:55px;
		height:40px;
		background:rgb(23,181,153) ;
		text-indent:0px;
	    font:15px/40px "微软雅黑";
	    position:relative;
	    left:18%;
	    top:30px;
	    color:white;
	    text-align: center;
	    border-radius: 5px;
	    cursor: pointer;
	}
	#resetting:hover{
		background:#cfcbcb;
	}
	#save:hover{
		background: rgb(50,153,135);
	}
	
</style>