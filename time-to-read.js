

var timeToRead = function() {
  var bodyContent = document.getElementsByTagName("p");
  var contentArray = Array.prototype.slice.call(bodyContent);
  var allWords = "";

  contentArray.forEach(function(item,idx,array){
    allWords += item.innerText;
  });

  var wordArray = allWords.split(" ");
  return ("about " + Math.round(wordArray.length/230) + " min read");
};

document.getElementsByClassName('reading-time')[0].innerText = timeToRead();
// var displayTime = document.createElement("h3");[0].innerText = timeToRead();
