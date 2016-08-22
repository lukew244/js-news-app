(function(exports) {

  function ArticleSummaryView(note) {}

  ArticleSummaryView.prototype.render = function(text){
    return "<div>" + text.substring(0,500) + "...<div>";
  };

exports.ArticleSummaryView = ArticleSummaryView;
})(this);
