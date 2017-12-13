var VideoListView = Backbone.View.extend({

  initialize: function() {

    this.render();
      
    
  },

  render: function() {
    
    //for each video entry object - render it!
    this.$el.empty();
    
    //why infinite loop?
    for (var i = 0; i < 5; i++) {
      console.log('iterating videolistview, video = ', window.exampleVideoData[i])
      this.$el.append(this.renderVideo(exampleVideoData[i])); //these need to be converted

    }


    $('.col-md-5').append(this.$el); // 

    console.log('this.$el = ', this.$el)
    return this;
  },

  renderVideo: function(video) {
    let videoView = new VideoPlayerView({exampleVideoData: Window.exampleVideoData});
    console.log('videoview = ', videoView);

    videoView = this.template(videoView);
    

    return videoView;
  },

  template: templateURL('src/data/exampleVideoData.js')

});
