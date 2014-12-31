
var blindProcess=function(){
	var s1=document.getElementById("blindTextInput").value;
	var output="";
	for(var i=0; i<s1.length; i++){
		switch(s1.charAt(i)){
		case '\n':
			output+="<br/>";
			break;
		case 'r':
			output+="<img src=\"http://www.puzzledragonx.com/en/img/allow/0.png\" />";
			break;
		case 'u':
			output+="<img src=\"http://www.puzzledragonx.com/en/img/allow/1.png\" />";
			break;
		case 'g':
			output+="<img src=\"http://www.puzzledragonx.com/en/img/allow/2.png\" />";
			break;
		case 'w':
			output+="<img src=\"http://www.puzzledragonx.com/en/img/allow/3.png\" />";
			break;
		case 'p':
			output+="<img src=\"http://www.puzzledragonx.com/en/img/allow/4.png\" />";
			break;
		case 'h':
			output+="<img src=\"http://www.puzzledragonx.com/en/img/allow/5.png\" />";
			break;
		case 'x':
			output+="<img src=\"http://www.puzzledragonx.com/en/img/allow/6.png\" />";
			break;
		case '-':
			output+="<img src=\"http://www.puzzledragonx.com/en/img/allow/7.png\" />";
			break;
		default:
			output+=s1.charAt(i);
		}
	}
	document.getElementById("blindResult").innerHTML=output;
};