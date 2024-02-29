const s = document.createElement("script");
s.src = chrome.runtime.getURL("remove-feed.js");
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);
