var ChameleonDancer = function(top, left, timeBetweenSteps) {
    SlidingDancer.call(this, top, left, timeBetweenSteps);
  };
  
  ChameleonDancer.prototype = Object.create(Dancer.prototype);
  ChameleonDancer.prototype.constructor = ChameleonDancer;
  
  ChameleonDancer.prototype.oldStep = ChameleonDancer.prototype.step;
  // console.log("this is:", ChameleonDancer.prototype.step)
  
  
  ChameleonDancer.prototype.step = function() {
    this.oldStep();
    this.$node.css("border", "30px", "solid", "green");
  };