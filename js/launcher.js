class Launcher{
    constructor(body,anchor){

        var options={
            bodyA:body,
            pointB:anchor,
            stiffness:0.004,
            length:1
        }

       this.launcher= Constraint.create(options);
       World.add(world,this.launcher);
       this.bodyA=body;
       this.pointB=anchor;
    }

    display(){
        if(this.launcher.bodyA){
        var pointA=this.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }

    }
    fly(){
        this.launcher.bodyA=null;
    }

    attach(body){
       this.launcher.bodyA=body;
    }
}