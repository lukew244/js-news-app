(function(exports) {

  function NewsList() {
    this.list = [];
  }

  NewsList.prototype.update = function(newsItems) {
    this.list = newsItems;
  };

  exports.NewsList = NewsList;
})(this);
