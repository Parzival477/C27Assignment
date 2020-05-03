class Ball{
  constructor(x,y){    
    var options = {
restitution : 0.04,
density : 1,
friction : 0.4
    } 
    this.body = Bodies.circle(x,y,100,options)
    this.x = x;
    this.y = y;
    this.radius = 100;
    World.add(world,this.body)
  }
  display(){
      var pos = this.body.position;
      fill("orange")
      ellipse(pos.x, pos.y, 100)
  }
}