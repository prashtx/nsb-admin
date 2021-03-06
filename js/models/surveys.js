NSB.models.Survey = Backbone.Model.extend({
  urlRoot: NSB.API + "/surveys/",
  
  initialize: function(options) {
    _.bindAll(this, 'parse');
    this.fetch();
  },
  
  parse: function(response) {    
    if (_.has(response, "survey")) {
      // Individual surveys are returned a little differently from 
      // lists of surveys. Oh well. 
      return response.survey;
    };
    
    return response;
  }
  
});


NSB.collections.Surveys = Backbone.Collection.extend({
  model: NSB.models.Survey,
  url: NSB.API + "/surveys", 
  
  initialize: function(options) {
    _.bindAll(this, 'parse');
    this.fetch();
  },
  
  parse: function(response) {
    return response.surveys;
  }
  
});