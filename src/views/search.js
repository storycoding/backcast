var SearchView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template());
    $('.col-md-6').append(this.$el);
    return this;
  },

  template: templateURL('src/templates/search.html')

});
