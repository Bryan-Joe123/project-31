class plinkos {
    constructor(x,y,height) {
      var options = {
        isStatic: true
      }
      this.body = Bodies.circle(x,y,height,options);
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.height*2, this.height*2);
    }
  };
