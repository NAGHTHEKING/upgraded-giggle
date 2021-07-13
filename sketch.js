
var turret,turretdos,zombie,zombie1,zombie2,zombie3,zombie4,le_shoot,le_stab;
var bggif,turretimg,turretimg2,zombieimg,zombie1img,zombie2img,zombie3img,zombie4img,bulletimg,laserimg;

function preload()
{
	bggif=loadImage("giphy.gif")
	turretimg=loadImage("gun_gif.gif")
	zombieimg=loadImage("zombie.png")
	zombie1img=loadImage("zombie1.png")
	zombie2img=loadImage("zombie2.png")
	zombie3img=loadImage("zombie3.gif")
	zombie4img=loadImage("zombie4.png")
    turretimg2=loadImage("gungif.gif")
	bulletimg=loadImage("laser2.png")
	laserimg=loadImage("laser.png")
}

function setup() {
	createCanvas(windowWidth-10,displayHeight-150);

turret=createSprite(displayWidth-100,500)
turret.addImage(turretimg)
turretimg.resize(400,250)

turretdos=createSprite(windowWidth-100,displayHeight-115);
turretdos.addImage(turretimg2)
turretimg2.resize(400,250)



// zombie=createSprite(200,500)
// zombie.addImage(zombieimg)
// zombieimg.resize(200,200)
  
}


function draw() {
  background(bggif);
  turret.y=mouseY;
  turretdos.y=mouseY-200;
 

  if(keyWentDown(32)){
	  bulletcome()
	  
  }




// zombie_go_brrr()
// createZombie()
// createZombie2()
// createZombie3()
// createZombie4()


  drawSprites();
 
}

function bulletcome(){

le_shoot=createSprite(windowWidth-280,displayHeight-120,100,100)
le_shoot.addImage(bulletimg)
bulletimg.resize(100,100)
le_shoot.velocityX=-15
console.log("hello World")
  

}

function zombie_go_brrr() {

if(frameCount%Math.round(random(48,57))===0){

 zombie=createSprite(200,Math.round(random(70,height-70))+Math.round(random(-30,50)))
 zombie.addImage(zombieimg)
 zombieimg.resize(150,150)
 zombie.velocityX=Math.round(random(1,4));

 if(frameCount%100===0){
	 zombie.y=Math.round(random(Math.round(random(1,65)),height-60))+Math.round(random(-30,50))
 }

}

} 

function createZombie() {

	if(frameCount%Math.round(random(50,76))===0){
	
	 zombie1=createSprite(150,Math.round(random(100,height-90))+Math.round(random(-30,19)))
	 zombie1img.resize(200,200)
	 zombie1.addImage(zombie1img)
	 	 zombie1.velocityX=Math.round(random(1,6));
	
	 if(frameCount%100===0){
		 zombie1.y=Math.round(random(Math.round(random(1,105)),height-60))-Math.round(random(30,50))
	 }
	
	}
	
	} 

	function createZombie2() {

		if(frameCount%Math.round(random(70,130))===0){
		
		 zombie2=createSprite(150,Math.round(random(90,height-90))+Math.round(random(-47,63)))
		 zombie2.addImage(zombie2img)
		 zombie2img.resize(150,200)
		 zombie2.velocityX=Math.round(random(1,6));
		
		 if(frameCount%100===0){
			 zombie2.y=Math.round(random(Math.round(random(1,105)),height-60))-Math.round(random(30,50))
		 }
		
		}
		

		}
		
		function createZombie3() {

			if(frameCount%100===0){
			
			 zombie3=createSprite(150,Math.round(random(50,height-80))+Math.round(random(-50,34)))
			 zombie3.addImage(zombie3img)
			 zombie3img.resize(200,200)
			 zombie3.velocityX=Math.round(random(1,6));
			
			 if(frameCount%100===0){
				 zombie.y=Math.round(random(Math.round(random(1,78)),height-59))-Math.round(random(-10,70))
			 }
			
			}
			
			} 

			function createZombie4() {

				if(frameCount%135===0){
				
				 zombie4=createSprite(150,Math.round(random(100,height-90))+Math.round(random(-30,19)))
				 zombie4.addImage(zombie4img)
				 zombie4img.resize(200,200)
				 zombie4.velocityX=Math.round(random(1,5));
				
				 if(frameCount%100===0){
					 zombie4.y=Math.round(random(Math.round(random(1,105)),height-60))-Math.round(random(30,50))
				 }
				
				}
				
				} 
