NSB.views.ResponseListView = Backbone.View.extend({
  
  elId: "#body",
  responses: null,
  surveyId: null,
  paginationView: null,

  initialize: function(options) {
    _.bindAll(this, 'render', 'goTo', 'humanizeDates');
    this.surveyId = options.surveyId;
    
    this.responses = new NSB.collections.Responses({surveyId: this.surveyId}); 
    this.responses.on('all', this.render, this);
    this.responses.on('reset', this.setup, this);
    
  },
  
  setup: function() {
    this.page = 0;
    this.pageListCount = 10;
    this.pageStart = 0;
    this.pageEnd = this.pageStart + this.pageListCount;

    this.pageCount = Math.floor(this.responses.length / this.pageListCount);   
  },
  
  goTo: function(pageStr) {
    console.log("Going to page " + page);
    // Update the start and end page so we're only displaying certain results
    // Make sure it's a number
    var page = parseInt(pageStr, 10); 
    this.page = page;
    this.pageStart = (this.page - 1) * this.pageListCount;
    this.pageEnd = this.page * this.pageListCount;
    
    this.render();
  },
  
  ready: function() {
    
  },
  
  humanizeDates: function(responses, field) {
    _.each(responses, function(response){
      // 2012-06-26T20:00:52.283Z
      response.createdHumanized = moment(response.created, "YYYY-MM-DDThh:mm:ss.SSSZ").fromNow();
    });
  },
  
  render: function() {  
    console.log("Rendering response view");
    var thisPage = this.responses.toJSON().slice(this.pageStart, this.pageEnd);
    this.humanizeDates(thisPage);  
      
    var context = { 
      responses: thisPage
    };    
    
    $(this.elId).html(_.template($('#response-view').html(), context));
    
    this.paginationView = new NSB.views.PaginationView({ 
      pageCount: this.pageCount
    });
    this.paginationView.bind('changePage', this.goTo);
    
  }
  
});