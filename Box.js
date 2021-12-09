class Box {
  constructor(x,y,width,height) {
    var options = {
      restitution: 0.8,
      friction: 0.5,
      density: 2.8
    }
    this.box = Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage('sprites/box.jpg');
    this.width = width;
    this.height = height;
    World.add(world, this.box);
  }
  display() {
    var pos = this.box.position;

    push();
    translate(pos.x, pos.y);
    rotate(this.box.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
