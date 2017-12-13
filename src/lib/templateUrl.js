// DO NOT MODIFY THIS CODE -- unless you find a bug.

// Dynamically load HTML template files into the browser.
// This is a very simple loader, in some ways, similar to webpack

(function() {

  var promises = [];

  window.templateURL = function(src) {
    var template;

    // create a promise // REALLY COOL!
    var defer = $.Deferred(); // creates a new deferred object
    defer.done(data => {
      template = _.template(data);
    });
    //passed in a line of code that will execute when
    //the deffered object is ready for use.
    // in this case, it's the _.template conversion

    promises.push(defer); // adds it to a list of queued promises

    // create a node and load the src, then
    // resolve promise on successful load
    $('<script>').load(src, (data, status) => {
      defer.resolve(data);
    }); // only runs on the data when it becomes available

    return function() {
      if (!template) {
        console.error(`Template '${src}' failed to load`);
        return;
      }
      return template.apply(this, arguments); //Q:is arguments the src? <------------
    };
  };

  window.backboneReady = function(callback) {
    // wait for the dom ready event to fire
    // then wait for all the templates to load
    $(document).ready(() => $.when(...promises).then(callback));
  };

})();

