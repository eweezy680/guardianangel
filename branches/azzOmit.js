//not rank
//omit zoom in ie

var cblue_bws = navigator.userAgent.toLowerCase(), cblue_turnOffIE=true;//
var cblue_doafter=function(){
	if(cblue_turnOffIE&&cblue_bws.indexOf("msie")!=-1){
	document.getElementById("cblue_word").innerHTML="<img id=\"cblue_toppop\" src=\"http://guardianangel.googlecode.com/svn/branches/cblue0im/01epipen.jpg\" width=\"400px\" height=\"62\"/>";
	}
  cblue_set();
};

function getAbsolutePosition(element) {
     var r = { x: element.offsetLeft, y: element.offsetTop };
     if (element.offsetParent) {
       var tmp = getAbsolutePosition(element.offsetParent);
       r.x += tmp.x;
       r.y += tmp.y;
     }
     return r;
   };
   
var cblue_list=new Array("01epipen,1,Epinephrine 1 mg/10ml Syringe X4,maintains heart rate and BP; opens airways,304,1943,1.5",
						 "02epinmdv,9,Epinephrine 30 ml Multi-Dose Vial X2,maintains heart rate and BP; opens airways,171,63,2",
						 "03diphen,4,Diphenhydramine 50mg/ml X2, antihistamine; helps reverse symptoms of anaphylaxis,113,285,2",
						 "04aden,5,Adenosine 3mg/ml 2ml X3,helps arteries to dilate; restores heart rhythm,177,449,2",
						 "05cacl,6,Calcium Chloride 1gm Syringe X2,helps restore normal calcium levels after MI,70,259,1.5",
						 "06nal,2,Naloxone 1mg/ml 2ml X2,reverses the effect of drug or narcotic overdose,121,617,1.5",
						 "07vasopress,16,Vasopressin 20units/ml X2,treats severe GI bleeding,266,120,2",
						 "08dextrose,11,Dextrose 50% 50ml Syringe X1,maintains normal glucose levels; prevents hypoglycemia,223,517,2",
						 "09atro,10,Atropine 1mg Syringe X4,increases heart rate following bradycardia,66,272,1.0",
						 "10dopa,8,Dopamine 400mg PMX Bag X1,treats shock by increasing blood pressure gradually,225,88,1.5",
						 "11nahco3,11,Sodium Bicarbonate 8.4% 50ml Syringe X3,helps increase urine output in drug overdose,49,209,1.2",
						 "12procain,16,Procainamide 1gm/10ml X1,anti-arrhythmic,178,80,1.5",
						 "13vera,16,Verapamil 5mg/2ml X2,antihypertensive,383,74,1.3",
						 "14mgh,3,cblue_magnesium Sulfate 1mg/ml 2ml X2,relaxes muscle contractions-adjunct treatment for MI,314,183,2",
						 "15amio150,12,Amiodarone 150mg/3ml X2,anti-arrhythimic,64,199,1.2",
						 "16amio900,13,Amiodarone 900mg/18ml X1,anti-arrhythimic,181,87,1.5",
						 "17lidobag,15,Lidocaine 2mg/500ml PMX X1,anti-arrhythmic for acute heart rhythm during MI,305,136,2",
						 "18lidoinj,7,Lidocaine 2% 100mg/5ml Syringe X2,anti-arrhythmic for acute heart rhythm during MI,57,255,0.8",
						 "19ns,15,Normal Saline 30ml X2,diluting and dissolving drugs for parenteral use,286,130,2",
						 "20dexameth,14,Dexamethasone 10mg/ml 1ml X5, corticosteroid,308,124,2");

var cblue_cur=Math.floor(Math.random()*cblue_list.length),cblue_box="",cblue_name="",cblue_ans="", cblue_flagged=false,cblue_prev=0,cblue_hh=0,cblue_ww=0,cblue_bh=0,cblue_bw=0,cblue_th=0,cblue_tw=0,cblue_zoohh=0,cblue_zooww=0,cblue_ratio=1.0,cblue_mag=1.0;

var cblue_blop=function(cblue_ev){
	var cblue_el=document.getElementById("cblue_toppop");
	
	var cblue__x = 0;//el.scrollLeft;//*100/el.width;
    var cblue__y = 0;//el.scrollTop;//*100/el.height;
	while( cblue_el && !isNaN( cblue_el.offsetLeft ) && !isNaN( cblue_el.offsetTop ) ) {
        cblue__x += cblue_el.offsetLeft - cblue_el.scrollLeft;
        cblue__y += cblue_el.offsetTop - cblue_el.scrollTop;
        cblue_el = cblue_el.offsetParent;
    }
	
	var cblue_cL=cblue_ev.pageX-cblue__x;
	var cblue_cT=cblue_ev.pageY-cblue__y;
	var cblue_xx =Math.floor(1.1*cblue_mag*cblue_cL*(cblue_bw-cblue_zooww)/cblue_tw*0.5);
    var cblue_yy =Math.floor(1.1*cblue_mag*cblue_cT*(cblue_bh-cblue_zoohh)/cblue_th*0.5);
	//var cblue_xx =Math.floor((cblue_cL*cblue_bw/cblue_tw-cblue_zooww)*0.5);
//    var cblue_yy =Math.floor((cblue_cT*cblue_bh/cblue_th-cblue_zoohh)*0.5);
	
	//if(cblue_cL-cblue_tw*0.5>0) cblue_xx=cblue_xx*2;
	//if(cblue_cT-cblue_th*0.5>0) cblue_yy=cblue_yy*;
	document.getElementById("cblue_innerim").style.top=-cblue_yy+"px";
	document.getElementById("cblue_innerim").style.left=-cblue_xx+"px";

};


var cblue_set = function(){
  try{
		  var cblue_temp=cblue_list[cblue_cur].split(",");
		  cblue_filename=cblue_temp[0];
		  cblue_box=cblue_temp[1];
		  cblue_name=cblue_temp[2];
		  document.getElementById("cblue_rxname").innerHTML=cblue_name;
		  cblue_ans=cblue_temp[3];
		  cblue_hh=cblue_temp[4];
		  cblue_ww=cblue_temp[5];
		  cblue_mag=cblue_temp[6];
		  
		  cblue_contin();
//		  setTimeout(cblue_contin,1000);
  }catch (err){
	  document.getElementById("cblue_errmess").innerHTML="cblue_set: "+err+"\nans:"+cblue_ans+" cur:"+cblue_cur;
  }
};
var cblue_contin = function(){
  try{
		  if(cblue_ww - cblue_hh>0){
			  var cblue_toph=Math.floor(cblue_hh*400/cblue_ww),
			  		cblue_zoomh=Math.floor(400-cblue_toph),
			  		cblue_bigw=Math.floor(cblue_zoomh*cblue_ww*cblue_mag/cblue_hh),cblue_bigh=Math.floor(cblue_mag*cblue_zoomh);
			  cblue_ratio=cblue_bigw/400;
			  cblue_zooww=400;
			  cblue_zoohh=cblue_zoomh;
			  cblue_th=cblue_toph;
			  cblue_tw=400;
			  cblue_bh=cblue_bigh;
			  cblue_bw=cblue_bigw;
			  
			  document.getElementById("cblue_toppop").src="http://guardianangel.googlecode.com/svn/branches/cblue0im/"+cblue_filename+".jpg";
			  document.getElementById("cblue_toppop").style.float="none";
			  if(cblue_bws.indexOf('msie')>-1||cblue_bws.indexOf('firefox')>-1){
			  document.getElementById("cblue_toppop").style.position="";
			  }
			  document.getElementById("cblue_toppop").style.width=400+"px";
			  document.getElementById("cblue_toppop").style.height=cblue_toph+"px";
			  
	if(cblue_turnOffIE&&cblue_bws.indexOf("msie")==-1){
			  document.getElementById("cblue_innerim").src="http://guardianangel.googlecode.com/svn/branches/cblue0im/"+cblue_filename+".jpg";
			  document.getElementById("cblue_innerim").style.width=cblue_bigw+"px";
			  document.getElementById("cblue_innerim").style.height=cblue_bigh+"px";
			  document.getElementById("cblue_innerim").style.top=-Math.floor(0.5*cblue_bh-0.5*cblue_zoohh)+"px";
			  document.getElementById("cblue_innerim").style.left=-Math.floor(0.5*cblue_bw-0.5*cblue_zooww)+"px";
			  document.getElementById("cblue_zoomer").style.float="none";
			  if(cblue_bws.indexOf('msie')>-1||cblue_bws.indexOf('firefox')>-1){
			  document.getElementById("cblue_zoomer").style.position="";
			  }
			  document.getElementById("cblue_zoomer").style.width=cblue_zooww+"px";
			  document.getElementById("cblue_zoomer").style.height=cblue_zoohh+"px";
	}
	document.getElementById("cblue_errmess").innerHTML="";//"cblue_toph: "+cblue_toph;
			  
		  }else{//height bigger
			  
			  var cblue_smaller=0.9;
			  
			  var cblue_topw=Math.floor(400*cblue_ww/cblue_hh),
			    cblue_zoomw=Math.floor((400-cblue_topw)*cblue_smaller),
			  	cblue_bigh=Math.floor(cblue_zoomw*cblue_hh*cblue_mag/cblue_ww),cblue_bigw=Math.floor(cblue_mag*cblue_zoomw);
		      cblue_ratio=cblue_bigh/400;
			  cblue_zooww=cblue_zoomw;
			  cblue_zoohh=Math.floor(cblue_smaller*400);
			  cblue_th=400;
			  cblue_tw=cblue_topw;
			  cblue_bh=cblue_bigh;
			  cblue_bw=cblue_bigw;
			  
			  document.getElementById("cblue_toppop").src="http://guardianangel.googlecode.com/svn/branches/cblue0im/"+cblue_filename+".jpg";
			  document.getElementById("cblue_toppop").style.float="left";
			  if(cblue_bws.indexOf('msie')>-1||cblue_bws.indexOf('firefox')>-1){
			    document.getElementById("cblue_toppop").style.position="relative";
			  }
			  document.getElementById("cblue_toppop").style.width=cblue_topw+"px";
			  document.getElementById("cblue_toppop").style.height=400+"px";
	if(cblue_turnOffIE&&cblue_bws.indexOf("msie")==-1){
			  document.getElementById("cblue_innerim").src="http://guardianangel.googlecode.com/svn/branches/cblue0im/"+cblue_filename+".jpg";
			  document.getElementById("cblue_innerim").style.width=cblue_bigw+"px";
			  document.getElementById("cblue_innerim").style.height=cblue_bigh+"px";
			  document.getElementById("cblue_innerim").style.top=(-Math.floor(0.5*cblue_hh))+"px";
			  document.getElementById("cblue_innerim").style.left=(-Math.floor(0.5*cblue_ww))+"px";
			  document.getElementById("cblue_zoomer").style.float="left";
			  if(cblue_bws.indexOf('msie')>-1||cblue_bws.indexOf('firefox')>-1){
			  document.getElementById("cblue_zoomer").style.position="relative";
			  }
			  document.getElementById("cblue_zoomer").style.width=cblue_zooww+"px";
			  document.getElementById("cblue_zoomer").style.height=cblue_zoohh+"px";
	}
	document.getElementById("cblue_errmess").innerHTML="";//"cblue_topw: "+cblue_topw;
	 
	 
				if(cblue_bws.indexOf('chrome')>-1){
				}else if(cblue_bws.indexOf('safari')>-1){
				}else if(cblue_bws.indexOf('msie')>-1){//ie
				}else{//ff 
				
			  document.getElementById("cblue_zoomer").style.top="-400px";
			  document.getElementById("cblue_zoomer").style.left=cblue_topw+"px";
			  
				}
				
		  }
		  
  }catch (err){
	  document.getElementById("cblue_errmess").innerHTML="cblue_contin: "+err+"\nans:"+cblue_ans+" cur:"+cblue_cur;
  }
};

//clicked
var cblue_process = function(cblue_x){
  try{
	  if(cblue_x==cblue_box){
		  
		  cblue_prev=cblue_cur;
		  cblue_cur=Math.floor(Math.random()*cblue_list.length);//choose new current
		  while(cblue_cur==cblue_prev) cblue_cur=Math.floor(Math.random()*cblue_list.length);
		  cblue_set();
	  }else{//do nothing if it wrong button
	  //document.getElementById("cblue_errmess").innerHTML=cblue_x+" but answer was "+cblue_box;
	  document.getElementById("cblue_errmess").innerHTML="Clue: "+cblue_ans;
	  
	  }
  }catch (err){
	  document.getElementById("cblue_errmess").innerHTML="cblue_process: "+err+"\nans:"+cblue_ans+" cur:"+cblue_cur+" x:"+cblue_x;
  }
};