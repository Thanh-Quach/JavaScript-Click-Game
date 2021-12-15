


//it shows time
	var a = document.getElementById('style2');

// timer function
	var i = 0;
	var c = 4;
	var t;
	var timer_is_on = 0;

	// character
	var on = document.getElementById('char1');
	var off = document.getElementById('char2');

	var slash = document.getElementById('slash');
	//the beast
	var beast = document.getElementById('beast');
	var dragonImg = document.getElementById('dragon');

	var curHealth = 500;
	var minHealth = document.getElementById("healthbar");
	var button = document.getElementById("box");

	//Lose
	var atk = document.getElementById('attack');
	var final = document.getElementById('dragonatk');

	function timedCount() {
  	c = c - 1;
  	t = setTimeout(timedCount, 1000);
  	document.getElementById("txt").innerHTML = c + " sec";

  	if (c == 0)//the count down 
  	{
 		clearTimeout(t);
  		timer_is_on = 0;
  		box.style.display = "none";
  		dragonImg.classList.add("invisible");
  		atk.classList.remove("invisible");
  		dragonatk.classList.remove("invisible");
  		setTimeout(function(){
  			atk.classList.add("explode");},3000);
 		setTimeout(function(){
 			alert('Game Over');},4000);
 	}
 	
}

	function myFunction() {

	atk.style.transition = "5s ease";
	final.style.transition = "1s ease";

	if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }

	i = i + 1;
	if (i <= 20) {
	console.log(i);
} else {
	console.log("pass 20");
};

 	off.classList.toggle("invisible");
 	on.classList.toggle("invisible");

 
 	slash.classList.remove("invisible");
 	setTimeout(function(){
 		slash.classList.add("invisible");
 	},100);

 	dragonImg.classList.add("takedmg");
 	setTimeout(function(){
 		dragonImg.classList.remove("takedmg")
 	},500);
 	
 	if (curHealth > 0) {
 	curHealth = curHealth - 25;
	minHealth.style.width = curHealth + "px";

 	} else {
 		clearTimeout(t);
  		timer_is_on = 0;
 		curHealth = 0;
 		box.style.display = "none";
 		beast.classList.add("fadeout");
 		setTimeout(function(){
 			alert('Victory!');},2000);
 	}
 	
}

function start() {
	a.href="css/3.css";
}

