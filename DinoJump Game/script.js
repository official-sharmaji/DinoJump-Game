score = 0;
cross = true;

audio = new Audio('music.mp3')
audiogo = new Audio('Game over.wav')
setTimeout(() => {
           audio.play();
            }, 1000);

document.onkeydown = function(e) {
	("Key code is: ", e.keyCode)
	if(e.keyCode==38){
		Dino = document.querySelector('.Dino');
		Dino.classList.add('animateDino');
		setTimeout(() => {
			Dino.classList.remove('animateDino')
		}, 700);
      }

      if(e.keyCode==39){
            Dino = document.querySelector('.Dino');
            Dinox = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('left')); 
            Dino.style.left = Dinox + 112 + "px"
      }

       if(e.keyCode==37){
            Dino = document.querySelector('.Dino');
            Dinox = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('left')); 
            Dino.style.left = (Dinox - 112) + "px"
            
      }
}

setInterval(() =>{
      Dino = document.querySelector('.Dino');
      gameOver = document.querySelector('.gameOver');
      obstacle=  document.querySelector('.obstacle');

      Dx =parseInt(window.getComputedStyle(Dino, null).getPropertyValue('left')); 
      Dy =parseInt(window.getComputedStyle(Dino, null).getPropertyValue('top'));

      ox =parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
      oy =parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

      offsetX = Math.abs(Dx-ox);
      offsetY = Math.abs(Dy-oy);
      
      if (offsetX< 113 && offsetY<52){
            gameOver.style.visibility = 'visible';    
      	gameOver.innerHTML = "Game Over - Reload to play Again"
      	obstacle.classList.remove('obstacleAni')
             audiogo.play();
            setTimeout(() => {
                 audiogo.pause();
            }, 1000);
      }
      else if (offsetX< 145 && cross){
            score+=1;
            updateScore(score);
            cross = false;
            setTimeout(() => {
                  cross = true;
            }, 1000);
            setTimeout(() => {
            aniDur = parseFlost(window.getComputedStyle(Dino, null).getPropertyValue('animation-duration')); 
            newDur = aniDur -0.8;
            obstacle.style.animationDuration = 's';
            }, 500);
            
      }


}, 100)

function updateScore(score) {
      scoreCont.innerHTML = " Your Score: " + score
}