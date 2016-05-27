var rbcur=0;
var rbp=new Array();
var rbgt=0;

var rbnewgame=function(){
  $("#rbnext").css({"color":"white","width":"57px","height":"57px"});
  $(".rbtile").css({"color":"white","width":"57px","height":"57px","cursor":"pointer"});
	for(var i=0; i<7; i++){
		for(var j=0; j<7; j++){
			var r=Math.floor(Math.random()*3);
			if(r==0) {
				var rbtemp4=Math.floor(Math.random()*5+1);
				$("#rb"+i+j).css({"background":"url(https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb"+rbtemp4+".jpg)"}).html(rbtemp4);
			}else $("#rb"+i+j).css({"background":"url('https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb0.jpg')"}).html(0);
		}
	}
	rbgofill();
}
var rbfull=function(){
	for(var i=0; i<7; i++){
		for(var j=0; j<7; j++){
			if(rbval(i,j)==0) return false;
		}
	}
	return true;
}
var rbgofill=function(){
  try{
	rbcur=Math.floor(Math.pow(Math.random(),2)*9)+1;
	$("#rbnext").css({"background":"url(https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb"+rbcur+".jpg)"}).html(rbcur);
	
	var rbmovers=new Array();
	for(var i=0; i<7; i++){
		for(var j=0; j<7; j++){
			if(9==rbval(i,j)){
				rbmovers.push(i+" "+j);
			}
		}
	}
	while(rbmovers.length>0){
		var m=rbmovers.pop().split(" "); 
		var i=parseInt(m[0]),j=parseInt(m[1]);
				var rarr=new Array();
				if(i-1>=0 && rbval(i-1,j)==0){
					rarr.push(0);
				}
				if(i+1<7 && rbval(i+1,j)==0){
					rarr.push(1);
				}
				if(j-1>=0 && rbval(i,j-1)==0){
					rarr.push(2);
				}
				if(j+1<7 && rbval(i,j+1)==0){
					rarr.push(3);
				}
				if(rarr.length>0){
				  var r=Math.floor(Math.random()*rarr.length);
				  var rbtemp3=rarr[r];
				  if(rbtemp3==0) {
					  r=i-1;
					  $("#rb"+r+j).css({"background":"url('https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb9.jpg')"}).html(9);
				  }else if(rbtemp3==1){
					  r=i+1;
					  $("#rb"+r+j).css({"background":"url('https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb9.jpg')"}).html(9);
				  }else if(rbtemp3==2){
					  r=j-1;
					  $("#rb"+i+r).css({"background":"url('https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb9.jpg')"}).html(9);
				  }else if(rbtemp3==3){
					  r=j+1;
					  $("#rb"+i+r).css({"background":"url('https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb9.jpg')"}).html(9);
				  }
				}
				  $("#rb"+i+j).css({"background":"url('https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb0.jpg')"}).html(0);
		
	}
  }catch(e){
	  $("#rbdisplay").html("error.rbgofill: "+e);
  }
}
//board state 49bit or track progress
//iter process on state
//tail recur w/o struct loop?
var rbsamesize=function(rbx,rby){//RangeError= max call stack size exceeded (falls back on trail, inf loop)
	try{
		if(rbp.indexOf(rbx+" "+rby)!=-1) return rbgt;
		rbp.push(rbx+" "+rby);
	  if(rbcur!=rbval(rbx,rby)) return rbgt;
	  rbgt++;
	  //var res=1;//rbval(rbx,rby);
	  if(rbx-1>=0){
		  rbsamesize(rbx-1,rby);
	  }
	  if(rbx+1<7){
		  rbsamesize(rbx+1,rby);
	  }
	  if(rby-1>=0){
		  rbsamesize(rbx,rby-1);
	  }
	  if(rby+1<7){
		  rbsamesize(rbx,rby+1);
	  }
	}catch(e){
		
	  $("#rbdisplay").html("error.rbsamesize: "+e);
	}
	return rbgt;
}
var rbval=function(rbx,rby){
	return parseInt($("#rb"+rbx+rby).html());
}
var rbcombine2=function(rbx,rby){
		if(rbp.indexOf(rbx+" "+rby)!=-1) return;
		rbp.push(rbx+" "+rby);
	var rbtemp2=rbval(rbx,rby);
	if(rbcur==rbtemp2) {
		$("#rb"+rbx+rby).css({"background":"url('https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb0.jpg')"}).html(0);
		if(rbx-1>=0){
			rbcombine2(rbx-1,rby);
		}
		if(rbx+1<7){
			rbcombine2(rbx+1,rby);
		}
		if(rby-1>=0){
			rbcombine2(rbx,rby-1);
		}
		if(rby+1<7){
			rbcombine2(rbx,rby+1);
		}
	}
}
$(document).ready(function(){
						   
	try{
	  //0= empty
	  /*
	  $(".rbtile").hover(function(){
		  $(this).css({"color":"white"});
								  })*/
	  $(".rbtile").click(function(){
		  //$(this).html(rbcur);
		  var rbx=parseInt($(this).attr("id").charAt(2));
		  var rby=parseInt($(this).attr("id").charAt(3));
		  if(rbval(rbx,rby)==0){
			  $("#rb"+rbx+rby).css({"background":"url(https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb"+rbcur+".jpg)"}).html(rbcur);//place
			  
			  rbp=new Array();
			  rbgt=0;
			  var rbtemp=rbsamesize(rbx,rby);
			  if(rbtemp>2){
				  
				rbp=new Array();
				if(rbx-1>=0){
					rbcombine2(rbx-1,rby);
				}
				if(rbx+1<7){
					rbcombine2(rbx+1,rby);
				}
				if(rby-1>=0){
					rbcombine2(rbx,rby-1);
				}
				if(rby+1<7){
					rbcombine2(rbx,rby+1);
				}
				if(rbcur+1==10){
					$("#rb"+rbx+rby).css({"background":"url('https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb0.jpg')"}).html(0);
				}else if(rbcur+1==9){
					rbnewgame();
				}else{
					rbcur++;
					$("#rb"+rbx+rby).css({"background":"url(https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb"+rbcur+".jpg)"}).html(rbcur);
					
					rbp=new Array();//combo1
					rbgt=0;
					rbtemp=rbsamesize(rbx,rby);
					if(rbtemp>2){
						
					  rbp=new Array();
					  if(rbx-1>=0){
						  rbcombine2(rbx-1,rby);
					  }
					  if(rbx+1<7){
						  rbcombine2(rbx+1,rby);
					  }
					  if(rby-1>=0){
						  rbcombine2(rbx,rby-1);
					  }
					  if(rby+1<7){
						  rbcombine2(rbx,rby+1);
					  }
					  if(rbcur+1==10){
						  $("#rb"+rbx+rby).css({"background":"url('https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb0.jpg')"}).html(0);
					  }else if(rbcur+1==9){
						  rbnewgame();
					  }else{
						  rbcur++;
						  $("#rb"+rbx+rby).css({"background":"url(https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb"+rbcur+".jpg)"}).html(rbcur);
						  
						  rbp=new Array();//combo2
						  rbgt=0;
						  rbtemp=rbsamesize(rbx,rby);
						  if(rbtemp>2){
							  
							rbp=new Array();
							if(rbx-1>=0){
								rbcombine2(rbx-1,rby);
							}
							if(rbx+1<7){
								rbcombine2(rbx+1,rby);
							}
							if(rby-1>=0){
								rbcombine2(rbx,rby-1);
							}
							if(rby+1<7){
								rbcombine2(rbx,rby+1);
							}
							if(rbcur+1==10){
								$("#rb"+rbx+rby).css({"background":"url('https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb0.jpg')"}).html(0);
							}else if(rbcur+1==9){
								rbnewgame();
							}else{
								rbcur++;
								$("#rb"+rbx+rby).css({"background":"url(https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb"+rbcur+".jpg)"}).html(rbcur);
								
								rbp=new Array();//combo3
								rbgt=0;
								rbtemp=rbsamesize(rbx,rby);
								if(rbtemp>2){
									
								  rbp=new Array();
								  if(rbx-1>=0){
									  rbcombine2(rbx-1,rby);
								  }
								  if(rbx+1<7){
									  rbcombine2(rbx+1,rby);
								  }
								  if(rby-1>=0){
									  rbcombine2(rbx,rby-1);
								  }
								  if(rby+1<7){
									  rbcombine2(rbx,rby+1);
								  }
								  if(rbcur+1==10){
									  $("#rb"+rbx+rby).css({"background":"url('https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb0.jpg')"}).html(0);
								  }else if(rbcur+1==9){
									  rbnewgame();
								  }else{
									  rbcur++;
									  $("#rb"+rbx+rby).css({"background":"url(https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/rbsnack/rb"+(rbcur+1)+".jpg)"}).html(rbcur+1);
								  }
								}
							}
						  }
					  }
					}
				}
				rbgofill();
			  } else {
				rbgofill();
				if(rbfull()) rbnewgame();
			  }
		  }
								  });
	  
	}catch(e){
		$("#rbdisplay.onready").html("error: "+e);
	}
 });
