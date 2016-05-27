$(document).ready(function(){
	//$("li").css({"padding-bottom":"1em"});
	var answers=new Array("b","d","c","b","b","d","d","b","c","a","a","b","a","d","c","a","b","c","b","c","a","a","d","b","a","b","a","c","c","c");
	$("#submit").click(function () { 
	var correct=0,incorrect=0;
		var inp = $(".quiz2").each(function (i) {
        if (answers[Math.floor(i/4)]==this.value){
			if(this.checked==true){
			$("#a14x"+i).css({"background-color":"green"});
			correct++;
			}else{
				$("#a14x"+i).css({"background-color":"red"});
				incorrect++;
			}
		}
		var percentage=Math.round(100*correct/answers.length);
		$("#score").html("Correct: "+correct+" ("+percentage+"%)<br/>"+"Incorrect: "+incorrect);
      });

    });

 });
