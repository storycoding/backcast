var VideoPlayerView = Backbone.View.extend({


  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');

    $('.col-md-7').append(this.$el);
    

    return this;
  },

   events: {
  "select" : "this.render" //what would we replace click with?

//write here the triggers''
  },

  template: templateURL('src/templates/videoPlayer.html')

});
