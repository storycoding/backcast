var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field // what does an actual youtube video id field look like?
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

});
