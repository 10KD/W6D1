const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

const DEFAULTS = {
  COLOR: "blue",
  RADIUS: 25
};


function Asteroid(options = {}) {
  options.color = DEFAULTS.COLOR;
  options.pos = options.pos;
  options.radius = DEFAULTS.RADIUS;
  options.vel = options.vel || Util.randomVec(4);

  MovingObject.call(this, options);

}
