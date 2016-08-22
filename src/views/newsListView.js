(function(exports) {

  function NewsListView() {}

  NewsListView.prototype.render = function(newsItems){
    var list = this;
    var renderedList = "<ul>";
    newsItems.forEach(function(item) {
      renderedList += list.formatItem(item);
    });
    return renderedList + "</ul>";
    };

    NewsListView.prototype.formatItem = function(item) {
      return "<li><i>" + item.webTitle + "</i>, " + this.summaryLink(item.webUrl) + "</li>";
    };

    NewsListView.prototype.summaryLink = function(url) {
      return '<a href="#' + url + '"> Summary </a>';
    };


  exports.NewsListView = NewsListView;
})(this);
