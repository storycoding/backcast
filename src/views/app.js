var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(); //makes a new collection of videos
    
    // render should be okay to call on init, because it will only
    // get called once the Backbone promises are ready (check index)

    this.listenTo(this.videos, 'sync', this.selectFirst);
    //this.videos.search('javascript tutorial'); //trouble!
    this.render();
  },


  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },
  
  render: function() {
    this.$el.html(this.template());

    //rendering all the components
    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();

    return this;
  },
  
  //still sources the same components
  template: templateURL('src/templates/app.html')

});