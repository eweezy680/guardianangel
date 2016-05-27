var pod_ans=-1;
var pod_prev=-1;
var pod_prompt=-1;
var pod_win=0;
function pod_createNewGame(){
	try{
		var pod_res="";
		if(pod_prev==0){
			pod_win=0;
			pod_res="Wrong. "+pod_prompt+ pod_ans+"<br/><br/>Try this one:<br/>";
		}else if(pod_prev==1){
			pod_win++;
			pod_res="Correct! "+pod_prompt+ pod_ans+" <br/>Winning streak: "+pod_win+"<br/><br/>Try the next one:<br/>";
		}else pod_res="Solve:<br/>"
		var pod_ar=Array();
		for (var pod_i=0; pod_i<4; pod_i++){
			pod_ar[pod_i]=Math.floor(Math.random()*9)+1;
			if(Math.floor(Math.random()*2)==0) pod_ar[pod_i]*=-1;
		}
		pod_ans=pod_ar[0]*pod_ar[1]+pod_ar[2]*pod_ar[3];
		
		pod_prompt=pod_ar[0]+"*"+pod_ar[1];
		if(pod_ar[2]<0){
			pod_prompt+=pod_ar[2]+"*"+pod_ar[3]+" = ";
		}else {
			pod_prompt+="+"+pod_ar[2]+"*"+pod_ar[3]+" = ";
		}
		pod_res+=pod_prompt;
		document.getElementById("pod_query").innerHTML=pod_res;
	}catch(e){		
		document.getElementById("pod_query").innerHTML="Error:pod_createNewGame:"+e;
	}
}
function pod_goeval(){
	try{//(NH4)2Cr2O7
		var pod_str=document.getElementById("pod_inp").value;
		var pod_num=parseInt(pod_str);
		if(pod_num!=null){
			if(pod_num==pod_ans){
				pod_prev=1;
			}else pod_prev=0;
			
			pod_createNewGame();
		}
	}catch(e){		
		document.getElementById("pod_query").innerHTML="Error:pod_goeval:"+e;
	}
}