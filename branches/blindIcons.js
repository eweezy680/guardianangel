
var blindProcess=function(){
	var s1=document.getElementById("blindTextInput").value;
	var output="";
	for(var i=0; i<s1.length; i++){
		switch(s1.charAt(i)){
		case '\n':
			output+="<br/>";
			break;
		case 'r':
			output+="<img src=\"https://cdn2.iconfinder.com/data/icons/bright-cafe/512/fruits-20.png\" />";
			break;
		case 'u':
			output+="<img src=\"https://cdn3.iconfinder.com/data/icons/3d-printing-icon-set/20/Liquid.png\" />";
			break;
		case 'g':
			output+="<img src=\"https://cdn4.iconfinder.com/data/icons/travel-std-pack/512/tree-20.png\" />";
			break;
		case 'w':
			output+="<img src=\"http://static.icy-veins.com/images/wow/wow_icon_spell_holy_holybolt.jpg\" />";
			break;
		case 'p':
			output+="<img src=\"http://userimages01.imvu.com/userdata/11356598/badge_beff4393edaf69593a217fc946d879e0.gif\" />";
			break;
		case 'h':
			output+="<img src=\"https://cdn1.iconfinder.com/data/icons/love-icons/512/love-heart-20.png\" />";
			break;
		case 'x':
			output+="<img src=\"https://cdn0.iconfinder.com/data/icons/medical-tab-bar-icons-for-iphone/20/Death_skull_button_dead_symbol_poison_horror_halloween.png\" />";
			break;
		case '-':
			output+="<img src=\"https://cdn4.iconfinder.com/data/icons/social-communication/142/block_user-20.png\" />";
			break;
		default:
			output+=s1.charAt(i);
		}
	}
	document.getElementById("blindResult").innerHTML=output;
};