var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
   this.render();
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

   events: {
    "click" : "this.select" //what would we replace click with?

//write here the triggers''
  },

  select: function() {
    console.log('select test');  
  }, //

  template: templateURL('src/templates/videoListEntry.html')

});
