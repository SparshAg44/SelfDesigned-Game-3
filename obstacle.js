/*class Box{
    constructor(x,y,width,height){
      
      this.image = loadImage("cactus.png");
  var options = {
    
  'friction' : 1.0,
  //'density' : 0.3,
  'restitution' : 0.4
  }
  
  this.height = height;
  this.width = width;
  this.body = Bodies.rectangle(x,y,width,height,options);
  
  World.add(world,this.body);
  }
  
  
  display(){
     var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    
   imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
     }}
    /*
  score(){
    if (this.Visiblity < 0 && this.Visiblity >-105){
      score++;
    }
  }*/

  
 