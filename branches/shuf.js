$(document).ready(function(){						   
	
	var chanceskip=0.2;
	var arr=new Array();
	for(var i=0; i<25; i++){
		arr.push("land");
	}
	for(var i=0; i<35; i++){
		arr.push("reg");
	}
	var uarr=new Array();
	for(var i=0; i<25; i++){
		uarr.push("land");
	}
	for(var i=0; i<17; i++){
		uarr.push("reg");
	}
	for(var i=0; i<18; i++){
		uarr.push("blue");
	}
	
	var shuf_printarr=function(){
		
	for(var i=0; i<arr.length; i++){
		var val=arr[i];
		if(val=='land')	{
			$("#shuf_disp").html($("#shuf_disp").html()+"<div class=\"shuf_card shuf_land\"></div>");
		}else {
			$("#shuf_disp").html($("#shuf_disp").html()+"<div class=\"shuf_card shuf_reg\"></div>");
		}
	}
	
	};
	var uprintarr=function(){
	for(var i=0; i<uarr.length; i++){
		var val=uarr[i];
		if(val=='land')	{
			$("#shuf_disp2").html($("#shuf_disp2").html()+"<div class=\"shuf_card shuf_land\"></div>");
		}else if(val=='reg')	{
			$("#shuf_disp2").html($("#shuf_disp2").html()+"<div class=\"shuf_card shuf_reg\"></div>");
		}else {
			$("#shuf_disp2").html($("#shuf_disp2").html()+"<div class=\"shuf_card shuf_blue\"></div>");
		}
	}
	};
	
	
								// try{
	$("#shuf_disp").click(function(){ 
		//printarr();
				
			//$("#shuf_disp").html(arr.slice(0,34)[0]);
			
		var arr2=new Array();
		var mid=Math.floor(arr.length/2)+Math.round(Math.random()*5);
		var arr3=arr.slice(0,mid);
		var arr4=arr.slice(mid,arr.length);
		for(var one=arr3.length,two=arr4.length; arr3.length>0||arr4.length>0;){
			$("#shuf_disp").html(one+" "+two);
			
			var c=Math.random();
			if(one>0&&c>chanceskip){
				arr2.push(arr3.pop());
				one--;
			}
			c=Math.random();
			if(two>0&&c>chanceskip){
				arr2.push(arr4.pop());
				two--;
			}
		}
		arr=arr2;
		$("#shuf_disp").html("");
		shuf_printarr();
		
		
							   });
$("#shuf_disp2").click(function(){ 
		//printarr();
				
			//$("#shuf_disp").html(arr.slice(0,34)[0]);
			
		var arr2=new Array();
		var mid=Math.floor(uarr.length/2)+Math.round(Math.random()*5);
		var arr3=uarr.slice(0,mid);
		var arr4=uarr.slice(mid,uarr.length);
		for(var one=arr3.length,two=arr4.length; arr3.length>0||arr4.length>0;){
			$("#shuf_disp2").html(one+" "+two);
			
			var c=Math.random();
			if(one>0&&c>chanceskip){
				arr2.push(arr3.pop());
				one--;
			}
			c=Math.random();
			if(two>0&&c>chanceskip){
				arr2.push(arr4.pop());
				two--;
			}
		}
		uarr=arr2;
		$("#shuf_disp2").html("");
		uprintarr();
		
		
							   });								 
	shuf_printarr();	uprintarr();
 });
