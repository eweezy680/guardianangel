var mwitab_shoesize=1, mwitab_wallet=100;
var mwitab_shoe=new Array(), mwitab_hand=new Array(), mwitab_shand=new Array(), mwitab_dealer=new Array(), mwitab_prev=new Array();
function mwitab_val21(mwitab_x){
	try{
	var mwitab_temp=0;
	var mwitab_aces=0;
	for(var i=0; i<mwitab_x.length; i++){
		var mwitab_strs=mwitab_x[i].split(" ");
		if(mwitab_strs[0]=='A'){
			mwitab_aces++;
		}else if(mwitab_strs[0]=='J'||mwitab_strs[0]=='Q'||mwitab_strs[0]=='K') mwitab_temp+=10;
		else mwitab_temp+=parseInt(mwitab_strs[0]);
	}
	if(mwitab_aces==1){
		if(mwitab_temp+11<=21) mwitab_temp+=11;
		else mwitab_temp+=1;
	}else if(mwitab_aces==2){
		if(mwitab_temp+12<=21) mwitab_temp+=12;
		else mwitab_temp+=2;
	}else if(mwitab_aces==3){
		if(mwitab_temp+13<=21) mwitab_temp+=13;
		else mwitab_temp+=3;
	}else if(mwitab_aces==4){
		if(mwitab_temp+14<=21) mwitab_temp+=14;
		else mwitab_temp+=4;
	}
	return mwitab_temp;
	}catch(e){		
		document.getElementById("mwitab_tex").innerHTML="Error:val21:"+e;
	}
}
function mwitab_createNewGame(){
	try{
	mwitab_shoe=new Array();//52*shoesize);
	mwitab_hand=new Array();//52*shoesize);
	mwitab_shand=new Array();//52*shoesize);
	mwitab_dealer=new Array();//52*shoesize);
		var mwitab_temp=document.getElementById("mwitab_sh").selectedIndex;
		if(mwitab_temp==0) mwitab_shoesize=1;
		else if(mwitab_temp==1) mwitab_shoesize=2;
		else if(mwitab_temp==2) mwitab_shoesize=4;
		else if(mwitab_temp==3) mwitab_shoesize=6;
		else if(mwitab_temp==4) mwitab_shoesize=8;
	for(var i=0; i<mwitab_shoesize; i++){
		for(var j=0; j<4; j++){
			for(var k=2; k<11; k++){
				mwitab_shoe.push(""+k+" "+j);
			}
			mwitab_shoe.push("A "+j);
			mwitab_shoe.push("J "+j);
			mwitab_shoe.push("Q "+j);
			mwitab_shoe.push("K "+j);
		}		
	}
	mwitab_shuffle();
	mwitab_shuffle();
	mwitab_shuffle();
	
	
	mwitab_deal();
	
	}catch(e){		
		document.getElementById("mwitab_tex").innerHTML="Error:createNewGame:"+e;
	}
}
function mwitab_shuffle(){
	try{
		
	for(var i=0; i<mwitab_shoe.length; i++){
		var mwitab_pin=Math.floor(Math.random()*mwitab_shoe.length);
		if(mwitab_pin!=i){
		var mwitab_temp=mwitab_shoe[i];
		mwitab_shoe[i]=mwitab_shoe[mwitab_pin];
		mwitab_shoe[mwitab_pin]=mwitab_temp;
		}
	}
	
	}catch(e){		
		document.getElementById("mwitab_tex").innerHTML="Error:shuffle:"+e;
	}
}
function mwitab_deal(){
	var mwitab_temp;
	try{
	if(mwitab_shoe.length<5) {
		mwitab_createNewGame();
		return;
	}
	//document.getElementById("tex").innerHTML=shoe.length;
	mwitab_temp=mwitab_shoe.pop();
	//document.getElementById("mwitab_tex").innerHTML=mwitab_temp+"*EOV*";
	mwitab_hand.push(mwitab_shoe.pop());
	mwitab_temp=mwitab_shoe.pop();
	mwitab_face=mwitab_temp.split(" ");
	mwitab_face=mwitab_face[0];
	if(mwitab_face=='A') mwitab_face=11;
	else if(mwitab_face=='J'||mwitab_face=='Q'||mwitab_face=='K') mwitab_face=10;
	mwitab_dealer.push(mwitab_temp);
	mwitab_hand.push(mwitab_shoe.pop());
	mwitab_dealer.push(mwitab_shoe.pop());
	//hand.sort();//aces end
	//dealer.sort();
	document.getElementById("mwitab_tex").innerHTML="You are a guy named Jack and there happens to be a bar inside the movie theater. You sit next to a cop who tells you about a fight he just broke up between a drunk and the bouncer. The fight was serious- they both went to the hospital. Perhaps after one too many drinks, you think you are "+mwitab_val21(mwitab_hand)+" and you get on the cop's nerves. Someone approaches you from behind who happens to be an attractive young lady. You are drowsy and she looks "+mwitab_face+" plus no more than 11. The room is lit with candles and you count "+mwitab_shoe.length+" freckles in her eyes. She tells you about the R-rated movie she just saw and makes a cute remark that her shoe size is "+mwitab_shoesize+" less than yours. Do you buy her a drink? (You have "+mwitab_wallet+" dollars in your wallet.)<br/><button onclick=\"mwitab_hit()\">Yes</button><br/><button onclick=\"mwitab_stay()\">No</button><br/>";
	if(mwitab_hand.length==2) {
		if(mwitab_cardtype(mwitab_hand[0])==mwitab_cardtype(mwitab_hand[1])) document.getElementById("mwitab_tex").innerHTML+="<button onclick=\"mwitab_split()\">Yes, buy her a drink plus one for your wingman</button><br/>";
		document.getElementById("mwitab_tex").innerHTML+="<button onclick=\"mwitab_doubledown()\">Yes, buy her a drink plus one for yourself</button><br/>";
	}
	document.getElementById("mwitab_tex").innerHTML+=mwitab_printout();
	}catch(e){		
		document.getElementById("mwitab_tex").innerHTML="Error:deal:"+e+" slen"+mwitab_shoe.length;
	}
}
function mwitab_reprompt(){
	try{
		if(mwitab_shand!=null&&mwitab_shand.length<2){
	document.getElementById("mwitab_tex").innerHTML="You somber up some and you think you are "+mwitab_val21(mwitab_hand)+", but you are still drowsy and she still looks "+mwitab_face+" plus no more than 11. The room is still lit with candles and you count "+mwitab_shoe.length+" freckles in her eyes. She tells you she is thirsty. Do you buy her a drink? (You have "+mwitab_wallet+" dollars in your wallet.)<br/><button onclick=\"mwitab_hit()\">Yes</button><br/><button onclick=\"mwitab_stay()\">No</button><br/>";}
	else {
	document.getElementById("mwitab_tex").innerHTML="You somber up some and you think you are "+mwitab_val21(mwitab_shand)+", but you are still drowsy and she still looks "+mwitab_face+" plus no more than 11. The room is still lit with candles and you count "+mwitab_shoe.length+" freckles in her eyes. She tells you she is thirsty. Do you buy her a drink? (You have "+mwitab_wallet+" dollars in your wallet.)<br/><button onclick=\"mwitab_hit()\">Yes</button><br/><button onclick=\"mwitab_stay()\">No</button><br/>";}
	document.getElementById("mwitab_tex").innerHTML+=mwitab_printout();
	}catch(e){		
		document.getElementById("mwitab_tex").innerHTML="Error:mwitab_reprompt:"+e+"*EOE* slen"+mwitab_shoe.length;
	}
}
function mwitab_printout(){
	var mwitab_temp=mwitab_printcard(mwitab_dealer[0])+"<br/>";
	for(var i=0; i<mwitab_hand.length; i++){
		mwitab_temp+=mwitab_printcard(mwitab_hand[i])+" ";
	}mwitab_temp+="<br/>";
	for(var i=0; i<mwitab_shand.length; i++){
		mwitab_temp+=mwitab_printcard(mwitab_shand[i])+" ";
	}
	return mwitab_temp+"<br/><br/>"+mwitab_prev;
}
function mwitab_record(){
	var mwitab_temp="";
	for(var i=0; i<mwitab_dealer.length; i++){
		mwitab_temp+=mwitab_printcard(mwitab_dealer[i])+" ";
	}mwitab_temp+="<br/>";
	for(var i=0; i<mwitab_hand.length; i++){
		mwitab_temp+=mwitab_printcard(mwitab_hand[i])+" ";
	}mwitab_temp+="<br/>";
	for(var i=0; i<mwitab_shand.length; i++){
		mwitab_temp+=mwitab_printcard(mwitab_shand[i])+" ";
	}
	mwitab_prev=mwitab_temp;
}
function mwitab_cardtype(mwitab_x){
		var mwitab_strs=mwitab_x.split(" ");
		return mwitab_strs[0];
}
function mwitab_printcard(mwitab_x){
	var mwitab_cardcolor="black";
	
		var mwitab_strs=mwitab_x.split(" ");
		
		var mwitab_temp=mwitab_strs[0];
		
	if(mwitab_strs[1]=='0') {mwitab_temp+="&diams;";mwitab_cardcolor="red"}
	if(mwitab_strs[1]=='1') {mwitab_temp+="&clubs;";mwitab_cardcolor="black"}
	if(mwitab_strs[1]=='2') {mwitab_temp+="&hearts;";mwitab_cardcolor="red"}
	if(mwitab_strs[1]=='3') {mwitab_temp+="&spades;";mwitab_cardcolor="black"}
	
	return "<span style=\"color:"+mwitab_cardcolor+"\">"+mwitab_temp+"</span>";
}
//pre: 0=to dealer, 1=to hand, 2=to second hand
function mwitab_draw(mwitab_x){
	try{
	if(mwitab_x==0) mwitab_dealer.push(mwitab_shoe.pop());
	else if(mwitab_x==1) mwitab_hand.push(mwitab_shoe.pop());
	else if(mwitab_x==2) mwitab_shand.push(mwitab_shoe.pop());
	if (mwitab_shoe.length==0) {
		var mwitab_temp=document.getElementById("mwitab_sh").selectedIndex;
		if(mwitab_temp==0) mwitab_shoesize=1;
		else if(mwitab_temp==1) mwitab_shoesize=2;
		else if(mwitab_temp==2) mwitab_shoesize=4;
		else if(mwitab_temp==3) mwitab_shoesize=6;
		else if(mwitab_temp==4) mwitab_shoesize=8;
	for(var i=0; i<mwitab_shoesize; i++){
		for(var j=0; j<4; j++){
			for(var k=2; k<11; k++){
				mwitab_shoe.push(""+k+" "+j);
			}
			mwitab_shoe.push("A "+j);
			mwitab_shoe.push("J "+j);
			mwitab_shoe.push("Q "+j);
			mwitab_shoe.push("K "+j);
		}		
	}
	mwitab_shuffle();
	mwitab_shuffle();
	mwitab_shuffle();
	}	
	}catch(e){		
		document.getElementById("mwitab_tex").innerHTML="Error:mwitab_draw:"+e+" slen"+mwitab_shoe.length;
	}
}
function mwitab_award(){
	if(document.getElementsByName("mwitab_poison")[0].checked) mwitab_wallet+=5;
	else if(document.getElementsByName("mwitab_poison")[1].checked) mwitab_wallet+=10;
	else if(document.getElementsByName("mwitab_poison")[2].checked) mwitab_wallet+=25;
}
function mwitab_minus(){
	if(document.getElementsByName("mwitab_poison")[0].checked) mwitab_wallet-=5;
	else if(document.getElementsByName("mwitab_poison")[1].checked) mwitab_wallet-=10;
	else if(document.getElementsByName("mwitab_poison")[2].checked) mwitab_wallet-=25;
}
function mwitab_hit(){
	if(mwitab_shand.length==0){
		mwitab_draw(1);
		if(mwitab_val21(mwitab_hand)>21){
			//subtract, redeal
			mwitab_minus();
		mwitab_record();
			mwitab_dealer=new Array();
			mwitab_hand=new Array();
			mwitab_deal();
		}else{
			//reprompt
			mwitab_reprompt();
		}
	}else {
		if(mwitab_shand.length==1){//split, hit on 1
		mwitab_draw(1);
		if(mwitab_val21(mwitab_hand)>21){
			//subtract, reprompt
						mwitab_minus();

		mwitab_draw(2);
			mwitab_reprompt();
		}else{
			//reprompt
			mwitab_reprompt();
		}
	}else {//hit on 2
		mwitab_draw(2);
		if(mwitab_val21(mwitab_shand)>21){
			//subtract, redeal
						mwitab_minus();

		mwitab_record();
			mwitab_dealer=new Array();
			mwitab_hand=new Array();
			mwitab_shand=new Array();
			mwitab_deal();
		}else{
			//reprompt
			mwitab_reprompt();
		}
	}
	}
}
function mwitab_stay(){
	if(mwitab_shand.length==1){
		mwitab_draw(2);
		//reprompt
			mwitab_reprompt();
			return;
	}
	//dealer's turn (not bust cuz sub when bust)
	while(mwitab_val21(mwitab_dealer)<17){
		mwitab_draw(0);
	}
	var dval=mwitab_val21(mwitab_dealer),hval=mwitab_val21(mwitab_hand),sval=mwitab_val21(mwitab_shand);
	if(dval>21){
		//award
				mwitab_award();
		if(mwitab_shand.length!=0){
				mwitab_award();
			//award
		}
		mwitab_record();
			mwitab_dealer=new Array();
			mwitab_hand=new Array();
			mwitab_shand=new Array();
			mwitab_deal();
		return;
	}
	if(hval>dval){//award
				mwitab_award();
	}else{
		mwitab_minus();
	}
	if(mwitab_shand.length>0){
	if(sval>dval){//award
				mwitab_award();
	}else{
		mwitab_minus();
	}
	}
		mwitab_record();
			mwitab_dealer=new Array();
			mwitab_hand=new Array();
			mwitab_shand=new Array();
			mwitab_deal();
		return;
}
function mwitab_split(){//shand
	mwitab_shand=new Array();
	mwitab_shand.push(mwitab_hand.pop());
	mwitab_hand.push(mwitab_shoe.pop());
	//reprompt
			mwitab_reprompt();
}
function mwitab_doubledown(){
	mwitab_draw(1);
		if(mwitab_val21(mwitab_hand)>21){
			//subtract, redeal
						mwitab_minus();
			mwitab_minus();

		}else{
			while(mwitab_val21(mwitab_dealer)<17){
				mwitab_draw(0);
			}
			var dval=mwitab_val21(mwitab_dealer),hval=mwitab_val21(mwitab_hand);
			if(dval>21||hval>dval){//award
				
				mwitab_award();
				mwitab_award();
			}else if(hval<dval){//sub
							mwitab_minus();
			mwitab_minus();

			}
			//redeal
		}
		mwitab_record();
			mwitab_dealer=new Array();
			mwitab_hand=new Array();
			mwitab_deal();
}