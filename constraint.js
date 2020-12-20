class throws{
    constructor(body1,pointB){
        var options = {
            bodyA: body1,
            //bodyB: body2,
            pointB: pointB,
            stiffness: 0.05,
            length:2
            
        }
    this.pointB = pointB;    
    this.launcher = Constraint.create(options);
    
    World.add(world,this.launcher)

    //this.image = loadImage("polygon.png")
    }
    
    fly(){
        this.launcher.bodyA = null;
        console.log(400);
    }

    attach(bodyA){
        this.launcher.bodyA = bodyA;
    }

      
    display(){
         
        //var A = this.launcher.bodyA.position;

        //imageMode(CENTER)
        //image(this.image,0,0,this,width,height)
        //var B = this.throws.bodyB.position; 
        //line(A.x,A.y/*pointB.x+this.offsetX,pointB.y*/)
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            
             strokeWeight(7);
             line(pointA.x, pointA.y, pointB.x, pointB.y);
             
        }
     }
    }
