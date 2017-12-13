var Videos = Backbone.Collection.extend({

  model: Video,
  
  exampleVideoData: Window.exampleVideoData
  //add exampleVideoData here somewhere

});

//basically a collection of video modules (defined in models/video.js)
//