function MovingObject(info) {
  this.pos = info["pos"];
  this.vel = info["vel"];
  this.radius = info["radius"];
  this.color = info["color"];
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
  );
  ctx.fill();
};

MovingObject.prototype.move = function() {

};

module.exports = MovingObject;
