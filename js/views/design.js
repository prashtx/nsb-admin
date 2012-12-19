/*jslint nomen: true */
/*globals define: true */

define([
  'jquery',
  'lib/lodash',
  'backbone',
  'lib/tinypubsub',

  // LocalData
  'settings',
  'api',

  // Models
  'models/surveys',
  'models/forms',

  // Views
  'views/forms',

  // Misc
  'misc/exampleform'
],

function($, _, Backbone, events, settings, api, SurveyModels, FormModels, PreviewView, exampleForm) {
  'use strict'; 

  var DesignViews = {};

  DesignViews.DesignView = Backbone.View.extend({   
    survey: null,
    
    initialize: function(options) {
      _.bindAll(this, 'update', 'render');

      this.$el = $(options.elId);

      this.survey = options.survey;
      this.survey.on('change', this.render, this);
    },

    update: function() {
      console.log("Update design view called, but not operational");
      // this.render();
    },

    render: function() {
      console.log("Rendering design view");
      $("#preview-view-container").empty();

      // Set the context & render the page
      var context = {
        'survey': this.survey.toJSON()
      };
      this.$el.html(_.template($('#survey-design-view').html(), context));

      $('.preview').click(function(event){
        console.log("Survey preview clicked");
        event.preventDefault();

        this.previewView = new PreviewView({
          elId: "#preview-view-container",
          popup: "popup",
          forms: [exampleForm]
        });  
      });

    }    
  });

  return DesignViews;
});