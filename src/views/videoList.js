var VideoListView = Backbone.View.extend({


   initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },


  handleClick: function() {
    this.model.select();
  },  


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.$('.video-list').append(
      this.collection.map(function(video) {
        return new VideoListEntryView({ model: video }).render().el;
      })
    );

    return this;
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  renderVideo: function(video) {
    let videoView = new VideoPlayerView({exampleVideoData: Window.exampleVideoData});
    console.log('videoview = ', videoView);

    videoView = this.template(videoView);
    

    return videoView;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
