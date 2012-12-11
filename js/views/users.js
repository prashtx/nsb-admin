/*jslint nomen: true */
/*globals define: true */

define([
  'jquery',
  'lib/lodash',
  'backbone',
  'lib/tinypubsub',

  // LocalData
  'settings',

  // Models
  'models/users'
],

function($, _, Backbone, events, settings, UserModels) {
  'use strict'; 

  var UserViews = {};


  UserViews.LoginView = Backbone.View.extend({
    el: "#container",

    initialize: function() {
      _.bindAll(this, 'render', 'update');
    },

    render: function() {
      this.$el.html(_.template($('#login-view').html(), { }));  
      return this;
    },

    update: function() {
      this.render();
    }
  });

  return UserViews;

}); // End UserViews 