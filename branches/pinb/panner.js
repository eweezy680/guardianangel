var pa_grid=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var pa_spawn=8;//turn 0 into 1 in every [spawn] of 25
var pa_size=5;

var pa_start=function(){
	pa_grid=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
	for(var i=0; i<pa_grid.length; i++){
		for(var j=0; j<pa_grid[i].length; j++){
			if(Math.floor(Math.random()*pa_spawn)==0){
					if(Math.floor(Math.random()*2)==0){
						pa_grid[i][j]=1;
					}else pa_grid[i][j]=-1;
			}
		}
	}
	document.getElementById("pa_board").innerHTML=pa_makeTableHTML(pa_grid);
	document.getElementById("pa_board").focus();
};

var gender=function(a,b){
	return Math.floor(Math.random()*2)==0? 1:-1;
	/*
	if(a>0 && b>0) return 1;
	if(a>0 && b<0) return -1;
	if(a<0 && b<0) return 1;
	return -1;
	*/
};
var mate=function(a,b){
	return Math.abs(a)==Math.abs(b);
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
	if(charCode==37){//left
	  for(var i=0; i<pa_size; i++){
		  var sp=new Array();
		  for(var j=0; j<pa_size; j++){
			  if(pa_grid[i][j]==0){
				  sp.push(j);
			  }else if(pa_grid[i][j]!=0 && sp.length>0){
				  var n=sp.shift();
				  pa_grid[i][n]=pa_grid[i][j];
				  pa_grid[i][j]=0;
				  sp.push(j);
				  if(n>0 && mate(pa_grid[i][n-1],pa_grid[i][n])){
					  pa_grid[i][n-1]=gender(pa_grid[i][n-1],pa_grid[i][n])*(Math.abs(pa_grid[i][n-1])+Math.abs(pa_grid[i][n]));
					  pa_grid[i][n]=0;
					  sp.unshift(n);
				  }
			  }
		  }
	  }
	}else if(charCode==38){//up
	  for(var j=0; j<pa_size; j++){
		  var sp=new Array();
		  for(var i=0; i<pa_size; i++){
			  if(pa_grid[i][j]==0){
				  sp.push(i);
			  }else if(pa_grid[i][j]!=0 && sp.length>0){
				  var n=sp.shift();
				  pa_grid[n][j]=pa_grid[i][j];
				  pa_grid[i][j]=0;
				  sp.push(i);
				  if(n>0 && mate(pa_grid[n-1][j],pa_grid[n][j])){
					  pa_grid[n-1][j]=gender(pa_grid[n-1][j],pa_grid[n][j])*(Math.abs(pa_grid[n-1][j])+Math.abs(pa_grid[n][j]));
					  pa_grid[n][j]=0;
					  sp.unshift(n);
				  }
			  }
		  }
	  }
	}else if(charCode==39){//right
	  for(var i=0; i<pa_size; i++){
		  var sp=new Array();
		  for(var j=pa_size-1; j>-1; j--){
			  if(pa_grid[i][j]==0){
				  sp.push(j);
			  }else if(pa_grid[i][j]!=0 && sp.length>0){
				  var n=sp.shift();
				  pa_grid[i][n]=pa_grid[i][j];
				  pa_grid[i][j]=0;
				  sp.push(j);
				  if(n<pa_size-1 && mate(pa_grid[i][n+1],pa_grid[n][j])){
					  pa_grid[i][n+1]=gender(pa_grid[i][n+1],pa_grid[i][n])*(Math.abs(pa_grid[i][n+1])+Math.abs(pa_grid[i][n]));
					  pa_grid[i][n]=0;
					  sp.unshift(n);
				  }
			  }
		  }
	  }
	}else if(charCode==40){//down
	  for(var j=0; j<pa_size; j++){
		  var sp=new Array();
		  for(var i=pa_size-1; i>-1; i--){
			  if(pa_grid[i][j]==0){
				  sp.push(i);
			  }else if(pa_grid[i][j]!=0 && sp.length>0){
				  var n=sp.shift();
				  pa_grid[n][j]=pa_grid[i][j];
				  pa_grid[i][j]=0;
				  sp.push(i);
				  if(n<pa_size-1 && mate(pa_grid[n+1][j],pa_grid[n][j])){
					  pa_grid[n+1][j]=gender(pa_grid[n+1][j],pa_grid[n][j])*(Math.abs(pa_grid[n+1][j])+Math.abs(pa_grid[n][j]));
					  pa_grid[n][j]=0;
					  sp.unshift(n);
				  }
			  }
		  }
	  }
	}else return;
	
	var vacancy=false;
	for(var i=0; i<pa_grid.length; i++){
		for(var j=0; j<pa_grid[i].length; j++){
			if(pa_grid[i][j]==0 ){
				vacancy=true;
				if(Math.floor(Math.random()*pa_spawn)==0){
					if(Math.floor(Math.random()*2)==0){
						pa_grid[i][j]=1;
					}else pa_grid[i][j]=-1;
				}
			}
		}
	}
	if(!vacancy) pa_start();
	else {
		document.getElementById("pa_board").innerHTML=pa_makeTableHTML(pa_grid);
		document.getElementById("pa_board").focus();
	}
};

var pa_makeTableHTML=function(myArray) {
    var result = "<table border=1>";
    for(var i=0; i<myArray.length; i++) {
        result += "<tr>";
        for(var j=0; j<myArray[i].length; j++){
			if(myArray[i][j]>-11 && myArray[i][j]<11){
            	result += "<td><img src=\"https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/pinb/pinb"+myArray[i][j]+".jpg\" /></td>";
			}else{
				var sign=myArray[i][j]*10/Math.abs(myArray[i][j]);
            	result += "<td><img src=\"https://raw.githubusercontent.com/eweezy680/guardianangel/master/branches/pinb/pinb"+sign+".jpg\" /></td>";
			}
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
};
