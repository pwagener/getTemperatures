$(document).ready(function() {

  // Uncomment this line to have this step selected upon reload
  // showStep(3);
  var output = new OutputView({ el: $('.multiple-temperature .output') });
  // Put your implementation here
  zipcodes = [32605, 11201, 90210];
  var temp = 0;
  getTemperatures(zipcodes, function(results) {
    // the results here
    for (i = 0; i < zipcodes.length; i++) {
      zip = zipcodes[i];
      temp = results[zip.toString()];
    	output.append("The temperature at " + zip + " is: " + temp);
  	}
  });
});
