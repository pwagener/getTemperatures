// Set up a Backbone View to handle the output
var OutputView = Backbone.View.extend({
  content: '',
  initialize: function(options) {
    if (!this.el) {
      this.el = $("#output");
    }
  },

  render: function() {
    this.$el.html(this.content);
  },
  
  reset: function(html) {
    this.content = html;
    this.render();
  },
  
  append: function(html) {
    if (!this.content) {
      this.content = '';
    }
    
    this.content = this.content + '<br/>' + html;
    this.render();
  }
});

// Method to show a specific step in the series.
var currentStep = 0;
var showStep = function(stepNum) {
  stepNum = stepNum - 1;
  currentStep = Math.max(currentStep, stepNum);
  doShowStep();
}

var doShowStep = _.debounce(function() {
  var steps = $('div.collapse'); 
  for (var i = 0; i < steps.length; i++) {
    var step = $(steps[i]);
    if (step.is(':visible')) {
      step.collapse('hide');
    }
  }
  
  var toShow = $(steps[currentStep]);
  toShow.collapse('show');
}, 10);

// The somewhat inaccurate implementation of getTemperature()
var getTemperature = function(zipCode, callback) {
  var seed = zipCode + '';
  Math.seedrandom(seed);
  var temp = Math.floor(Math.random() * 100)
  
  var waitTime = Math.floor(Math.random() * 1000);
  _.delay(function() {
    callback(temp);
  }, waitTime);
}


// The somewhat inaccurate implementation of getTemperatures()
var getTemperatures = function(zipCodes, callback) {
  var results = new Object();
  var len = zipCodes.length;
  var done = _.after(len, function(value) {
          _.delay(function() {
          callback(results);
          }, len * 1000);
  })
  _.each(zipCodes, function(zip) {
      getTemperature(zip, function(temp) {
         results[zip.toString()] = temp;
      })
      done(results);
  });
}


