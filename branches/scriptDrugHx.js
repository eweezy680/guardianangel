$(document).ready(function(){
	//$("li").css({"padding-bottom":"1em"}); http://guardianangel.googlecode.com/files
	var p01_answers=new Array("d","a","b","c","d","c","d","b","b","c","d","d","c","d","b","a","c","d","c","d");
	$("#p01_submit").click(function () { 
	var p01_correct=0,p01_incorrect=0;
		var p01_inpRxHx = $(".p01mt1").each(function (i) {
        if (p01_answers[Math.floor(i/4)]==this.value){
			if(this.checked==true){
			$("#p01_x"+i).css({"background-color":"green"});
			p01_correct++;
			}else{
				$("#p01_x"+i).css({"background-color":"red"});
				p01_incorrect++;
			}
		}
		var p01_percentage=Math.round(100*p01_correct/p01_answers.length);
		$("#p01_score").html("Correct: "+p01_correct+" ("+p01_percentage+"%)<br/>"+"Incorrect: "+p01_incorrect);
      });

    });

 });
