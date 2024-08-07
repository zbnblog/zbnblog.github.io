var posts=["2024/08/01/installtwikoo/","2024/08/04/zbnbloggonggao/","2024/07/29/installparrot/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };