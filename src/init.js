$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var slidingMakerFunctionName = $(this).data('sliding-maker-function-name');

    //var dancerMakerFunctionName = 'BlinkyDancer'

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window.dancers);
  });



  $('.addSlidingDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var slidingMakerFunctionName = $(this).data('sliding-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[slidingMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  

  $('.addChameleonDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var chameleonMakerFunctionName = $(this).data('chameleon-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[chameleonMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function (event) { //function here lines up dancers

    //window.dancer has all the dancers

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }

    // var lineUpFunctionName = $(this).data('line-up-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    // var lineUpFunction = window[lineUpFunctionName];
    //lineUpFunction is the function that makes everyone line up

    // make a dancer with a random position

  //   var lineUp = new dancerMakerFunction( //trigger Dancer.prototype.lineUp
  //     $("body").height() * Math.random(),
  //     $("body").width() * Math.random(),
  //     Math.random() * 1000
  //   );
  //   $('body').append(dancer.$node);
  // });
  });


  $('.interactButton').on('click', function (event) { 
    
    var dancersArr = [];
    for(var i of window.dancers) {
      dancersArr.push(i);
    }
    var partnersArr = [];
    for (var i = 0; i < window.dancers.length; i++) {
      // if(!dancersArr.includes(window.dancers[i])) {
        var dancer1 = window.dancers[i];
        var minDist = Infinity;
        var partner;
        var partnerInd;
        for (var j = i + 1; j < window.dancers.length; j++) {
          var dancer2 = window.dancers[j];
          var horDist = dancer2.left - dancer1.left;
          var vertDist = dancer2.top - dancer1.top;
          var dist = Math.sqrt(horDist**2 + vertDist**2);
          if(dist < minDist) {
            minDist = dist;
            partner = dancer2;
          }
        }
        partnersArr.push([dancer1, partner]);
      // }
    }
    for(var i of partnersArr) {
      i[1].setPosition(i[0].top + 5, i[0].left + 5);
    }


  });

  $(document).on('mouseover', '.dancer', function() {
    $( this ).css("border", "50px solid red");
  });

});