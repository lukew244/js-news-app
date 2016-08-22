
urlChange();

function urlChange() {
  window.addEventListener("hashchange", showCurrentPageId);
}

function showCurrentPageId() {
  getNewsSummary(getIdfromUrl(window.location));
}

function getIdfromUrl(location) {
  return location.hash.split('#')[1];
}

function getNewsSummary(id) {
  newsData.downloadSummary(id);
}

function Article() {}

Article.prototype.passToView = function (text) {
  console.log('in article');
  console.log(text);
  var summary = new ArticleSummaryView();
  var element = document.getElementById("article-summary");
  element.innerHTML = summary.render(text);
};
