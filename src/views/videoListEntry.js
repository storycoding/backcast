var VideoListEntryView = Backbone.View.extend({


  events: {
    'click .video-list-entry-title': 'handleClick' //so that's why it didn't work before...
  },

  handleClick: function() {
    this.model.select();
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
