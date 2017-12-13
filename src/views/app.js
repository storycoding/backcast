var AppView = Backbone.View.extend({

  el: '#app',
  
  //el: '<div id="app"</div>', - wouldn't this be better?

  initialize: function() {
    console.log('appView Initialized')
    this.videos = new Videos(); //makes a new collection of videos
    
    // hoping to make it render on initialization, but
    // render should be okay to call on init, because it will only
    // get called once the Backbone promises are ready (check index)
    this.render(); 
  },

  className: 'appView',
  

  render: function() { // not running
    console.log('this = ', this); 
    console.log('this.model = ', this.model);

    this.$el.html(this.template());

    $('#app').append(this.$el);
    return this.$el;
    
  },

  template: templateURL('src/templates/app.html')

});
