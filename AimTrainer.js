var firstTarget=true;

function start(){
	var timer=document.querySelector("b#timer");
	var countdown=60;
	var meter=null;
	timer.innerHTML=countdown+"秒";
	document.querySelector("b#counter").innerHTML=0;
	meter=setInterval(
		function(){
			document.getElementById("startButton").style.display="none";
			if(firstTarget){
				showTarget();
				firstTarget=false;
			}
			if(countdown>0){
				countdown--;
				timer.innerHTML=countdown+"秒";
			}else{
				clearInterval(meter);
				meter=null;
				finishGame();
			}
		}
		,1000
	);
}

function showTarget(){
	var target=document.querySelector("div#target");
	target.style.display="block";
	var main=document.querySelector("div#main");

	var targetDiameter=target.clientWidth;
	var mainWidth=main.clientWidth;
	var mainHeight=main.clientHeight;
	var extraTop=document.querySelector("div#title").clientHeight+document.querySelector("div#header").clientHeight;

	var x=(mainWidth-targetDiameter)*(Math.random());
	var y=(mainHeight-targetDiameter)*(Math.random())+extraTop;

	target.style.left=x+"px";
	target.style.top=y+"px";
}

function targetHit(){
	var counter=document.querySelector("b#counter");
	counter.innerHTML=parseInt(counter.innerHTML)+1;
	showTarget();
}

function finishGame(){
	document.querySelector("div#target").style.display="none";
	document.getElementById("startButton").style.display="block";

	firstTarget=true;
	
	var counter=document.querySelector("b#counter").innerHTML;
	alert("您的成绩是："+counter);
}