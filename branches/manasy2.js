$(document).ready(function(){
				
	$("input[class=genPkg]").css({border:"none",width:"20%"});
	$("input[class=landPkg]").css({width:"20%"});
	$("input[class=landPkg]").click(function(){
		this.select();
	}).keyup(function(event){
		var mg=parseInt($("#manaG").val());
		var mr=parseInt($("#manaR").val());
		var mu=parseInt($("#manaU").val());
		var mb=parseInt($("#manaB").val());
		var mw=parseInt($("#manaW").val());
		var totsym=mg+mr+mu+mb+mw;
		var landeck=parseInt($("#manaLandsInDeck").val());
		
		$("#totalSymbols").val(totsym);
		$("#landG").val(Math.round(mg*landeck/totsym));
		$("#landR").val(Math.round(mr*landeck/totsym));
		$("#landU").val(Math.round(mu*landeck/totsym));
		$("#landB").val(Math.round(mb*landeck/totsym));
		$("#landW").val(Math.round(mw*landeck/totsym));
    });
	$("#manaReset").click(function(){
		$("input[class=landPkg]").val("0");
		$("input[class=genPkg]").val("");
		$("#manaLandsInDeck").val("17");
	});

 });
