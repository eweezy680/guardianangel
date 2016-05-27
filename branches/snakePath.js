var seq_boxSize=50;
$(document).ready(function(){
	try{
		$("#seq_seq").css({ backgroundColor:"yellow" });		
				
		for(var seq_i=0; seq_i<5; seq_i++){
			for(var seq_j=0; seq_j<6; seq_j++){
				$("#seq_seq").after("<div id=\"seq_"+seq_i+seq_j+"\" class=\"seq_box\" onclick=\"seq_process("+seq_i+","+seq_j+")\" />");
				$("#seq_"+seq_i+seq_j).css({position:"absolute",float:"left",height:seq_boxSize+"px",width:seq_boxSize+"px",backgroundColor:'#FFFFFF',top:(seq_i*seq_boxSize+100)+"px",left:(seq_j*seq_boxSize+50)+"px",border:"1px dashed blue",cursor:'pointer'});
			}
		}
	
	}catch(err){
		$("#seq_seq").val("Error:ready:"+err);		
	}

 });
function seq_get_random_color() {
	//anatoliy@stackoverflow.com
    var seq_letters = '0123456789ABCDEF'.split('');
    var seq_gcolor = '#';
    for (var seq_i = 0; seq_i < 6; seq_i++ ) {
        seq_gcolor += seq_letters[Math.round(Math.random() * 15)];
    }
    return seq_gcolor;
}
var seq_color=seq_get_random_color();
	var seq_process=function(seq_row,seq_col){
		try{
			$(".seq_box").css({backgroundColor:'rgb(255, 255, 255)'});
			$("#seq_"+seq_row+seq_col).css({backgroundColor:seq_color});
			var seq_tx=$("#seq_seq").val();	
			for(var seq_i=0; seq_i<seq_tx.length; seq_i++){
				switch(seq_tx.charAt(seq_i)){
					case '^': seq_row--;
					break;
					case '>': seq_col++;
					break;
					case 'v': seq_row++;
					break;
					case '<': seq_col--;
					break;
				}
				if(seq_row<0||seq_row>=5||seq_col<0||seq_col>=6){
					$(".seq_box").css({backgroundColor:'rgb(255, 255, 255)'});
					return;
				}
				if($("#seq_"+seq_row+seq_col).css('backgroundColor')!='rgb(255, 255, 255)') {
					seq_color=seq_get_random_color();
				}
				$("#seq_"+seq_row+seq_col).css({backgroundColor:seq_color});
			}
		
		}catch(err){
			$("#seq_seq").val("Error:seq_process:"+err);		
		}
	}