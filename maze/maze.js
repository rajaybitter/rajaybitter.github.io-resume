var loss = false;
var clicked = false;

window.onload = function() {
    $("start").onclick = start;
    $("end").onmouseover = end;
    var bounds = $$("#maze > div.boundary");
    $("maze").onmouseleave = overBoundary;
    for(x=0;x < bounds.length; x++){
    	bounds[x].onmouseover= overBoundary;
    }    
};

function overBoundary() {
	if(clicked){
	    var bounds = $$("#maze > div.boundary");
	    if(clicked){
		    for(x=0;x < bounds.length; x++){
		    	bounds[x].addClassName("youlose");
		    }
		    loss = true;
		}
		end();
	}
}

function start(){
	loss = false;
	clicked = true;
	$("status").innerHTML = "Start";
	var bounds = $$("#maze > div.boundary");
    for(x=0;x < bounds.length; x++){
    	bounds[x].removeClassName("youlose");
    }
}

function end(){
	if(clicked){	
		if(loss){
			$("status").innerHTML = "You Lose!";
		}else{
			$("status").innerHTML = "You win!";
		}
	}
	clicked = false;
}