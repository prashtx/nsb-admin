(function (NSB, Backbone, $, u) {
  'use strict';
  NSB.views.Question = Backbone.View.extend({
    collapse: function () {
      this.$('.expanded').hide();
      this.$('.collapsed').show();
    },
    expand: function () {
      this.$('.collapsed').hide();
      this.$('.expanded').show();
    },

    events: {
      'click .collapsed': 'expand',
      'click .next': 'collapse'
    },

    context: {},

    render: function() {  
      console.log("Rendering a question");
      this.$el.html(u.template($('#t-question').html(), this.context));  
      this.$('.collapsed').hide();
      this.$el.hide();
    }
    
  });

  NSB.models.Question = Backbone.Model.extend({
  });
}(window.NSB, window.Backbone, window.$, window._));

(function (NSB, Backbone, $, u) {
  'use strict';
  NSB.views.PreviewSidebar = Backbone.View.extend({
    
    el: $("#preview-sidebar"),
    
    peek: function () {
      this.$el.addClass('highlight');
    },
    unpeek: function () {
      this.$el.removeClass('highlight');
    },
    expand: function () {
    },

    events: {
      'mouseenter': 'peek',
      'mouseleave': 'unpeek',
      'click': 'expand'
    },

    context: {},

    render: function() {  
      console.log("Rendering a question");
      this.$el.html(u.template($('#t-question').html(), this.context));  
    }
    
  });
}(window.NSB, window.Backbone, window.$, window._));
