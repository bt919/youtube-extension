console.log("remove-feed.js working");
setTimeout(() => {
  const feed = document.querySelector("#contents");
  feed.parentElement.removeChild(feed);
}, 2000);
