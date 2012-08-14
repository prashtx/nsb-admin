(function (NSB, Backbone, $, u) {
  'use strict';
  var i = 0;
  u.forEach($('.question'), function (el) {
    //var view = Object.create(NSB.views.Question);
    var view = new NSB.views.Question();
    view.context.fullQuestion = 'What kind of information do you want to collect? ' + i;
    view.context.shortQuestion = 'What kind of information do you want to collect? ' + i;
    i += 1;
    view.setElement(el);
    view.render();
  });

  var previewSidebar = new NSB.views.PreviewSidebar();
}(window.NSB, window.Backbone, window.$, window._));
