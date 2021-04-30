class Bird {
  constructor(x, y, width,height) {
    var options = {
      'restitution':0.3,
      'density':1.2,
      'friction':0.5,
      'is Static':false
  }
  this.body=Bodies.rectangle(x,y,width,options,height)
    this.width = width;
    this.height = height;
    this.image = loadImage("clipart2661.png")
    World.add(world, this.body);
    
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER)
      image( this.image,0,0,this.height,this.width);
    pop();
  }
};