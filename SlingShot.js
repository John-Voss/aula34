class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            lenght: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }
    display() {
        if(this.sling.bodyA) {
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push();
            strokeWeight(5);
            stroke('#363636');
            fill('#363636');
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
            pop();
        }
    }
}