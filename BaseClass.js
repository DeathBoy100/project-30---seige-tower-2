class BaseClass{
    constructor(x, y, width, height/*, angle*/) {
        var options = {
            isStatic: false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
       
        World.add(world, this.body);
      }
      display(x){
        
        var angle = this.body.angle;
        if(x === 1){
          fill("red")
        }else if(x === 2){
          fill("blue")
        }else if(x===3){
          fill("yellow")
        }else if(x===4){
          fill("green")
        }
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        
      }
}