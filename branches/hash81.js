//change score hash type b
var drug81_wc=123,drug81_cur=0,drug81_curword="",drug81_started=false,drug81_intv=null,drug81_words=new Array("After he is done blowing oxygen on his wound, can you see to it that he gets these pain relievers?",
"The ox put a hole in the left wall. It must be on thee roids.",
"The sign said \"no pro sin xen\".",
"Osteoporosis acted on Grandma Elle like rise of the drones ate humanity.",
"Foliating with that acid makes your blood rush and your skin smooth like a baby's bottom.",
"When it\'s vibrating on my skin, it\'s hard to do the x and y coordinates while cycling.",
"Zoe said fluorine has 9 protons then she threw up the pretzels on her pants.",
"Thomas found out he got sued and is losing all his money.",
"The happy, tiny parrot perched on the axle.",
"Grandma Eve can see the vista with Raoul's friend."),drug81_correct=0,drug81_incorrect=0,drug81_incorrectLines="<br/>You wrote:";
var drug81_inc = function(){
  try{
	var curnum=parseInt(document.getElementById("drug81_message").innerHTML)+1;
	document.getElementById("drug81_message").innerHTML=curnum;
  }catch (err){//NaN
  	  drug81_correct=0;
	  drug81_incorrect=0;
	  document.getElementById("drug81_message").innerHTML="60";
  }
};
var drug81_endgame = function(){
  try{
	clearInterval(drug81_intv);
	var curnum=parseInt(document.getElementById("drug81_message").innerHTML);
	drug81_started=false;
	var wpm=drug81_wc*60/curnum;
	document.getElementById("drug81_disp").style.display="none";
	document.getElementById("drug81_text").style.display="none";
	document.getElementById("drug81_message").innerHTML="WPM: "+wpm.toFixed(2)+"<br/>Correct: "+drug81_correct+" <br/>Incorrect: "+drug81_incorrect+"<br/><small>"+(drug81_incorrect!=0?drug81_incorrectLines:"")+"</small><br/><br/><a href=\"#\" onclick=\"drug81_newgame();\">Click here to try again</a>";//<br/><a href=\"#\" onclick=\"drug81_newgame();\">Click here to go to the next set of drugs</a>
  }catch (err){
	  document.getElementById("drug81_message").innerHTML="drug81_endgame:"+err;
  }
};
var drug81_newgame = function(){
  try{
	document.getElementById("drug81_message").innerHTML="0";
	document.getElementById("drug81_disp").innerHTML="";
	document.getElementById("drug81_text").value="";
	document.getElementById("drug81_disp").style.display="";
	document.getElementById("drug81_text").style.display="";
	drug81_incorrectLines="<br/>You wrote:";
	drug81_started=false;
	drug81_cur=0;
	drug81_curword="";
	drug81_intv=null;
	drug81_correct=0;
	drug81_incorrect=0;
	drug81_newdisp();
  }catch (err){
	  document.getElementById("drug81_message").innerHTML="drug81_newgame:"+err;
  }
};
var drug81_newdisp = function(){
  try{
	  if(drug81_cur>=drug81_words.length) drug81_endgame();
	  else{
	  	drug81_curword=drug81_words[drug81_cur];
		document.getElementById("drug81_disp").innerHTML="<strong>"+drug81_curword+"</strong>";
	  }
  }catch (err){
	  document.getElementById("drug81_message").innerHTML="drug81_newdisp:"+err;
  }
};
var drug81_process = function(){
  try{
	var str=document.getElementById("drug81_text").value;
	 // document.getElementById("drug81_message").innerHTML=str;
	if(!drug81_started&&str.length==1){//written 1 char
		drug81_intv=setInterval(drug81_inc,1000);
		drug81_started=true;
		drug81_cur=0;
	}else if(str.length>=drug81_curword.length&&(str.charAt(str.length-1)==' '||str.charAt(str.length-1)=='\n')){
		if(str.length-1==drug81_curword.length&&str.substring(0,str.length-1)==drug81_curword) drug81_correct++;
		else {
			drug81_incorrect++;
			drug81_incorrectLines+="<br/>"+str.substring(0,str.length-1);
		}
		document.getElementById("drug81_text").value="";
		
		drug81_cur++;
		drug81_newdisp();
	}
  }catch (err){
	  document.getElementById("drug81_message").innerHTML="drug81_process:"+err;
  }
};

drug81_newdisp();






