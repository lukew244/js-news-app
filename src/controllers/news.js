var newsData = new NewsData();
var newsList = new NewsList();
var newsListView = new NewsListView();

function updateNews() {
  var downloadedNews = newsData.format(newsData.jsonSample);
  newsList.update(downloadedNews);
  displayNews();
  }

function displayNews() {
  var element = document.getElementById('news-list');
  element.innerHTML = newsListView.render(newsList.list);
}

updateNews();
