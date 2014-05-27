var hangman_life=9;
var hangman_winstreak=0;
var hangman_wordlist=new Array("PEOPLE",
"SHOULD",
"SCHOOL",
"BECOME",
"REALLY",
"FAMILY",
"SYSTEM",
"DURING",
"NUMBER",
"ALWAYS",
"HAPPEN",
"BEFORE",
"MOTHER",
"THOUGH",
"LITTLE",
"AROUND",
"FRIEND",
"FATHER",
"MEMBER",
"ALMOST",
"CHANGE",
"MINUTE",
"SOCIAL",
"FOLLOW",
"AROUND",
"PARENT",
"CREATE",
"PUBLIC",
"OTHERS",
"OFFICE",
"HEALTH",
"PERSON",
"WITHIN",
"RESULT",
"CHANGE",
"REASON",
"BEFORE",
"MOMENT",
"ENOUGH",
"ACROSS",
"SECOND",
"TOWARD",
"POLICY",
"APPEAR",
"MARKET",
"EXPECT",
"NATION",
"COURSE",
"BEHIND",
"REMAIN",
"EFFECT",
"LITTLE",
"FORMER",
"REPORT",
"BETTER",
"EFFORT",
"DECIDE",
"STRONG",
"LEADER",
"POLICE",
"RETURN",
"REPORT",
"BETTER",
"ACTION",
"SEASON",
"PLAYER",
"RECORD",
"GROUND",
"MATTER",
"CENTER",
"COUPLE",
"FIGURE",
"STREET",
"ITSELF",
"EITHER",
"RECENT",
"DOCTOR",
"WORKER",
"SIMPLY",
"SOURCE",
"NEARLY",
"CHOOSE",
"WINDOW",
"LISTEN",
"CHANCE",
"ENERGY",
"PERIOD",
"COURSE",
"SUMMER",
"LIKELY",
"LETTER",
"CHOICE",
"SINGLE",
"CHURCH",
"FUTURE",
"ANYONE",
"MYSELF",
"SECOND",
"AUTHOR");

var hangman_word="";
var hangman_guessed="";

var hangman_start=function(){
	hangman_life=9;
	hangman_word=hangman_wordlist[Math.floor(Math.random()*hangman_wordlist.length)];
	hangman_guessed="";
	document.getElementById("hangman_display").innerHTML=hangman_print();
	document.getElementById("hangman_text").value="";
	document.getElementById("hangman_text").focus();
};
var hangman_enter=function(){
	var typed=document.getElementById("hangman_text").value;
	if(typed.length>0) typed=typed.toUpperCase().charAt(0);
	if(typed>='A' && typed<='Z'){
		if(hangman_guessed.indexOf(typed)!=-1){
			document.getElementById("hangman_text").value="";
			return;
		}
		if(hangman_word.indexOf(typed)==-1){
			hangman_life--;
		}
		hangman_guessed+=typed+" ";
		var res=hangman_print();
		if(res==""){
			res=hangman_print();
		}
		document.getElementById("hangman_display").innerHTML=res;
	}
	document.getElementById("hangman_text").value="";
	document.getElementById("hangman_text").focus();
};

window.onkeydown=function(ev){
	var charCode;
	if (ev.charCode) {
	  charCode = ev.charCode;
	}else if(ev.keyCode){
	  charCode = ev.keyCode;
	}else {
	  charCode = ev.which;
	}
	if(charCode==13 || charCode==10){//enter
		hangman_enter();
	}else {
	}
	if(hangman_life==0) hangman_start();
	else {
		document.getElementById("hangman_display").innerHTML=hangman_print();
	}
};

var hangman_print=function (){
	var res="Win Streak: "+hangman_winstreak+"<br/>Lives: "+hangman_life+"<br/><br/>v---v<br />";
	if(hangman_life==9){
		res+="|<br />|<br />|<br />";
	}else if(hangman_life==8){
		res+="|&nbsp;&nbsp;&nbsp;0<br/>|<br/>|<br/>";
	}else if(hangman_life==7){
		res+="|&nbsp;&nbsp;&nbsp;0<br/>|&nbsp;&nbsp;&nbsp;| <br/>|     <br/>";
	}else if(hangman_life==6){
		res+="|&nbsp;&nbsp;&nbsp;0<br/>|&nbsp;&nbsp;/| <br/>|     <br/>";
	}else if(hangman_life==5){
		res+="|&nbsp;&nbsp;&nbsp;0<br/>|&nbsp;&nbsp;/|\\<br/>|     <br/>";
	}else if(hangman_life==4){
		res+="|&nbsp;&nbsp;&nbsp;0<br/>|&nbsp;&nbsp;/|\\<br/>| &nbsp;/  <br/>";
	}else if(hangman_life==3){
		res+="|&nbsp;&nbsp;&nbsp;0<br/>|&nbsp;&nbsp;/|\\<br/>| &nbsp;/ \\<br/>";
	}else if(hangman_life==2){
		res+="|&nbsp;&nbsp;&nbsp;<span style='color:red'>0</span><br/>|&nbsp;&nbsp;/|\\<br/>| &nbsp;/ \\<br/>";
	}else if(hangman_life==1){
		res+="|&nbsp;&nbsp;&nbsp;<span style='color:blue'>0</span><br/>|&nbsp;&nbsp;/|\\<br/>| &nbsp;/ \\<br/>";
	}else if(hangman_life==0){
		res+="|&nbsp;&nbsp;&nbsp;<span style='color:blue'>0</span><br/>|&nbsp;&nbsp;<span style='color:blue'>/|\\</span><br/>| &nbsp;<span style='color:blue'>/ \\</span><br/>";
	}
	res+="|<br />|<br />^------<br /><br />";
	
	if(hangman_life==0){
		res+=hangman_word;
		hangman_winstreak=0;
	}else{
	  var right=0;
	  for(var i=0; i<hangman_word.length; i++){
		  var j=hangman_guessed.indexOf(hangman_word.charAt(i));
		  if(j==-1){
			  res+="_ ";
		  }else{
			  res+=hangman_word.charAt(i)+" ";
			  right++;
		  }
	  }
	  if(right==hangman_word.length) {
		  hangman_winstreak++;
		  hangman_start();
		  return "";
	  }
	}
	return res+="<br/><br/>Guessed: "+hangman_guessed+"<br/><br/>Please enter a letter:<br/>";
};