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
      opacity: 1,
      left: "+=300"
    }, 1000);
  };
