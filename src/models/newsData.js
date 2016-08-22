(function(exports) {

  function NewsData() {
    this.jsonSample = {"response":{"status":"ok","userTier":"developer","total":31170,"startIndex":1,"pageSize":10,"currentPage":1,"pages":3117,"orderBy":"newest","results":[{"id":"us-news/2016/aug/21/donald-trump-troll","type":"article","sectionId":"us-news","sectionName":"US news","webPublicationDate":"2016-08-21T11:30:15Z","webTitle":"'If you fight fire with fire, everyone burns': how to catch a troll like Trump","webUrl":"https://www.theguardian.com/us-news/2016/aug/21/donald-trump-troll","apiUrl":"https://content.guardianapis.com/us-news/2016/aug/21/donald-trump-troll","isHosted":false},{"id":"us-news/2016/aug/21/heidelberg-project-detroit-public-street-art","type":"article","sectionId":"us-news","sectionName":"US news","webPublicationDate":"2016-08-21T11:30:15Z","webTitle":"The Heidelberg Project: end of the road for Detroit's 30-year-old street artwork","webUrl":"https://www.theguardian.com/us-news/2016/aug/21/heidelberg-project-detroit-public-street-art","apiUrl":"https://content.guardianapis.com/us-news/2016/aug/21/heidelberg-project-detroit-public-street-art","isHosted":false}]}};
  }

  NewsData.prototype.downloadAll = function() {
    var guardianApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=us-news&from-date=2016-08-21";
    this.requestData(guardianApi);
  };

  NewsData.prototype.downloadSummary = function (articleUrl) {
    var aylienUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";
    this.requestData(aylienUrl + articleUrl);
  };

  NewsData.prototype.passToController = function(response) {
    controller = new Article();
    controller.passToView(response);
  };

  NewsData.prototype.requestData = function(url) {
    var httprequest = new XMLHttpRequest();
    var newsdata = this;
    httprequest.onreadystatechange = function() {
      if (httprequest.readyState == 4 && httprequest.status == 200) {
        newsdata.passToController(httprequest.responseText);
      }
    };
    httprequest.open("GET", url);
    httprequest.send();

  };

  NewsData.prototype.format = function(rawData) {
    var stringifyData = (JSON.stringify(rawData));
    var parseData = JSON.parse(stringifyData);
    return parseData.response.results;
  };

  exports.NewsData = NewsData;
  })(this);
