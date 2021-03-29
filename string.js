class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.05,
            length: 10
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    display(){
        if(this.body.bodyA){
            
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }

    }

    fly(){
        this.body.bodyA = null;
    }

    attach(){
        this.body.bodyA = this.bodyA;
    }

}