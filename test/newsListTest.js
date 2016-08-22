console.log("news-list-test");

var newNewsList = new NewsList();
var yoda = new Yoda();

function testNewsListObject() {
  yoda.testAnything(typeof newNewsList != 'undefined', testNewsListObject.name);
}

function testNewsListContainsList() {
  yoda.testAnything(newNewsList.list instanceof Array, testNewsListContainsList.name);
}

testNewsListObject();
testNewsListContainsList();
