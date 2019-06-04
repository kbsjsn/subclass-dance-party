var SlidingDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
  };
  
  SlidingDancer.prototype = Object.create(Dancer.prototype);
  SlidingDancer.prototype.constructor = SlidingDancer;
  
  SlidingDancer.prototype.oldStep = SlidingDancer.prototype.step;
  // console.log("this is:", SlidingDancer.prototype.step)
  
  
  SlidingDancer.prototype.step = function() {
    
    this.oldStep();
    this.$node.animate({
      opacity: 0.25,
      left: "+=300",
      height: "toggle"
    }, 1000);
  };

