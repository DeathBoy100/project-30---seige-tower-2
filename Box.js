class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width, height);
    //this.Visibility = 255
  }
  display(x){
    if(this.body.speed < 3){
      super.display(x);
     }
     else{
      /*if(x === 1){
        fill("red")
      }else if(x === 2){
        fill("blue")
      }else if(x===3){
        fill("yellow")
      }else if(x===4){
        fill("green")
      }*/
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       //translate(this.body.position.x, this.body.position.y);
       //rotate(this.body.angle);
       //rect(0,0, this.width, this.height);
       pop();
     }
     
  }
};
