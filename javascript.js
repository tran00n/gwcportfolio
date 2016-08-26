var images = ['Runner', 'runner.png', 'Obamicon', "obamicon1.png", 'Obamicon Product','obamicon2.png', 'Ball Game', 'ball.png', 'Snow Animation', 'snow.png'];
i=0;

function showText(name){
	var source = document.getElementById(name);
	source.src = name + 'text.png';
}

function showImage(name){
	var source = document.getElementById(name);
	source.src = name + '.png';
}

function nextPic(){
	var currentCap = document.getElementById("caption");
	var currentIm = document.getElementById("currentimage");
	i +=2;
	length = images.length; 

	if (i>= length){
		i=0
	}
	currentCap.innerHTML = images[i];
	currentIm.src = images[i+1];
	currentIm.style.width = '600px';
	currentIm.style.height = '400px';
	
}

function prevPic(){
	var currentCap = document.getElementById("caption");
	var currentIm = document.getElementById("currentimage");
	i -=2;
	length= images.length;
	if (i<0){
		i= length-2;
		currentCap.innerHTML = images[i];
		currentIm.src = images[i+1];
		currentIm.style.width = '600px';
		currentIm.style.height = '400px';
	}
	else {
		currentCap.innerHTML = images[i];
		currentIm.src = images[i+1];
		currentIm.style.width = '600px';
		currentIm.style.height = '400px';
	}
}