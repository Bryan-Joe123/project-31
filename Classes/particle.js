class particle {
    constructor(x,y,height) {
      var options = {
        isStatic: false,
        restitution: 0.75,
        friction:0.5,
        density:1.0
      }
      this.body = Bodies.circle(x,y,height,options);
      this.height = height;
      World.add(world, this.body);
      this.color=[random(0,255),random(0,255),random(0,255)];
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color[0],this.color[1],this.color[2]);
      ellipse(pos.x, pos.y, this.height*2, this.height*2);
    }
  };
