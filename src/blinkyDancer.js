var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // Dancer.call(this);
  console.log("BLINKDANCER THIS IS >>:", this);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.oldStep = BlinkyDancer.prototype.step;
// console.log("this is:", BlinkyDancer.prototype.step)


BlinkyDancer.prototype.step = function() {
  console.log(this.oldStep);
  this.oldStep();
  this.$node.toggle();
};



var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  var blinkyDancer = new Dancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;

};
/*************************************************************************/


// var Chunin = function () {
//   Genin.call(this, properties)
// }

// Chunin.prototype = Object.create(Genin.prototype);
// Chunin.prototype.constructor = Chunin;

// var chunin1 = new Chunin;
// var chunin2 = new Chunin
// chunin1.attack = light blade
// chunin2.attack = shadow blade


/*
blinky dancer is a subclass of dancer,
just as chunin is a subclass of genin
*/