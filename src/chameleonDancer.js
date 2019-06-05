var ChameleonDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
  };
  
  ChameleonDancer.prototype = Object.create(Dancer.prototype);
  ChameleonDancer.prototype.constructor = ChameleonDancer;
  
  ChameleonDancer.prototype.oldStep = ChameleonDancer.prototype.step;
  // console.log("this is:", ChameleonDancer.prototype.step)
  
  
  ChameleonDancer.prototype.step = function() {
    this.oldStep();
    // this.$node.css('border', '#3f977e')
    // this.$node.toggle();
    this.$node.css("border", "30px solid #F4B400").animate({  
      opacity: 1,
      borderColor: '#3f977e'
    }, 10000);
  };