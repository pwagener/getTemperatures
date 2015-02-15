$(document).ready(function() {

  // Uncomment this line to have this step selected upon reload
  // showStep(2);

  var output = new OutputView({ el: $('.temperature .output') });
  var temp = 0;
  getTemperature(32605, function(temp) {
    // The temp variable is set to some value;
    // Output the temperature of a given ZIP code to the screen here.
    output.append("The temperature at 32605 is: " + temp);
  });

});
