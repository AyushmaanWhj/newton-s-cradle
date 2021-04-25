class Bob{
    constructor(x,y,r){
       var options={
       'isStatic':true,
       'restitution':0.3,
       'friction':0.5,
       'density':1.2
    }
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body)
    this.radius=r

  }
   
   display(){
    var pos=this.body.position
      
      var angle = this.body.angle;
      push();
      rotate(angle);
      fill(0,0,204);
      circle(pos.x,pos.y,this.radius)
      pop();

   }

    


}