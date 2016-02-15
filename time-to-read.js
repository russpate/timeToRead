var bodyContent = document.getElementsByTagName("p");

var timeToRead = function() {
  var allWords = "";
  var contentArray = Array.prototype.slice.call(bodyContent);

  contentArray.forEach(function(item,idx,array){
    allWords += item.innerText;
  });

  var wordArray = allWords.split(" ");
  return ("about " + Math.round(wordArray.length/230) + " minutes to read");
};

document.getElementsByClassName('reading-time')[0].innerText = timeToRead();
