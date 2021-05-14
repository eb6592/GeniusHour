function loadArticleList() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("shade").style.display = "block";
    var loading_text = document.getElementById("loading-text");
    setTimeout(function(){
        loading_text.innerHTML = "Reloading index.html..."
   }, 200);

   setTimeout(function(){
    loading_text.innerHTML = "Reloading main.js..."
   }, 400);

   setTimeout(function(){
    loading_text.innerHTML = "Reloading page-swapper.js..."
   }, 600);

   setTimeout(function(){
    loading_text.innerHTML = "Reloading main.css..."
  }, 800);
  
  setTimeout(function(){
    loading_text.innerHTML = "Reloading article-list.html..."
  }, 1000);
  
  setTimeout(function(){
    document.getElementById("modal").style.display = "none";
    document.getElementById("shade").style.display = "none";
    document.getElementById("main-page").style.display = "none";
    loading_text.innerHTML = "Loading..."
    document.getElementById("article-list").style.display = "block"
  }, 1200);
}
function loadHomePage() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("shade").style.display = "block";
    var loading_text = document.getElementById("loading-text");
    setTimeout(function(){
        loading_text.innerHTML = "Reloading index.html..."
   }, 200);

   setTimeout(function(){
    loading_text.innerHTML = "Reloading main.js..."
   }, 400);

   setTimeout(function(){
    loading_text.innerHTML = "Reloading page-swapper.js..."
   }, 600);

   setTimeout(function(){
    loading_text.innerHTML = "Reloading main.css..."
  }, 800);
  
  setTimeout(function(){
    document.getElementById("modal").style.display = "none";
    document.getElementById("shade").style.display = "none";
    document.getElementById("articleOne").style.display = "none";
    document.getElementById("articleTwo").style.display = "none";
    document.getElementById("articleThree").style.display = "none";
    document.getElementById("articleFour").style.display = "none";
    document.getElementById("articleFive").style.display = "none";

    document.getElementById("main-page").style.display = "block";
    loading_text.innerHTML = "Loading..."
  }, 1200);
}

function loadArticleOne() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("shade").style.display = "block";
    var loading_text = document.getElementById("loading-text");
    setTimeout(function(){
        loading_text.innerHTML = "Reloading main.js..."
   }, 200);

   setTimeout(function(){
    loading_text.innerHTML = "Reloading page-swapper.js..."
   }, 400);

   setTimeout(function(){
    loading_text.innerHTML = "Reloading main.css..."
   }, 600);
  
  setTimeout(function(){
    loading_text.innerHTML = "Reloading article-list.html..."
  }, 800);

  setTimeout(function(){
    document.getElementById("modal").style.display = "none";
    document.getElementById("shade").style.display = "none";
    document.getElementById("main-page").style.display = "none";
    document.getElementById("articleOne").style.display = "block";
    loading_text.innerHTML = "Loading..."
  }, 1000);
}
function loadArticleTwo() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("shade").style.display = "block";
  var loading_text = document.getElementById("loading-text");
  setTimeout(function(){
      loading_text.innerHTML = "Reloading main.js..."
 }, 200);

 setTimeout(function(){
  loading_text.innerHTML = "Reloading page-swapper.js..."
 }, 400);

 setTimeout(function(){
  loading_text.innerHTML = "Reloading main.css..."
 }, 600);

setTimeout(function(){
  loading_text.innerHTML = "Reloading article-list.html..."
}, 800);

setTimeout(function(){
  document.getElementById("modal").style.display = "none";
  document.getElementById("shade").style.display = "none";
  document.getElementById("main-page").style.display = "none";
  document.getElementById("articleTwo").style.display = "block";
  loading_text.innerHTML = "Loading..."
}, 1000);
}
function loadArticleThree() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("shade").style.display = "block";
  var loading_text = document.getElementById("loading-text");
  setTimeout(function(){
      loading_text.innerHTML = "Reloading main.js..."
 }, 200);

 setTimeout(function(){
  loading_text.innerHTML = "Reloading page-swapper.js..."
 }, 400);

 setTimeout(function(){
  loading_text.innerHTML = "Reloading main.css..."
 }, 600);

setTimeout(function(){
  loading_text.innerHTML = "Reloading article-list.html..."
}, 800);

setTimeout(function(){
  document.getElementById("modal").style.display = "none";
  document.getElementById("shade").style.display = "none";
  document.getElementById("main-page").style.display = "none";
  document.getElementById("articleThree").style.display = "block";
  loading_text.innerHTML = "Loading..."
}, 1000);
}
function loadArticleFour() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("shade").style.display = "block";
  var loading_text = document.getElementById("loading-text");
  setTimeout(function(){
      loading_text.innerHTML = "Reloading main.js..."
 }, 200);

 setTimeout(function(){
  loading_text.innerHTML = "Reloading page-swapper.js..."
 }, 400);

 setTimeout(function(){
  loading_text.innerHTML = "Reloading main.css..."
 }, 600);

setTimeout(function(){
  loading_text.innerHTML = "Reloading article-list.html..."
}, 800);

setTimeout(function(){
  document.getElementById("modal").style.display = "none";
  document.getElementById("shade").style.display = "none";
  document.getElementById("main-page").style.display = "none";
  document.getElementById("articleFour").style.display = "block";
  loading_text.innerHTML = "Loading..."
}, 1000);
}
function loadArticleFive() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("shade").style.display = "block";
  var loading_text = document.getElementById("loading-text");
  setTimeout(function(){
      loading_text.innerHTML = "Reloading main.js..."
 }, 200);

 setTimeout(function(){
  loading_text.innerHTML = "Reloading page-swapper.js..."
 }, 400);

 setTimeout(function(){
  loading_text.innerHTML = "Reloading main.css..."
 }, 600);

setTimeout(function(){
  loading_text.innerHTML = "Reloading article-list.html..."
}, 800);

setTimeout(function(){
  document.getElementById("modal").style.display = "none";
  document.getElementById("shade").style.display = "none";
  document.getElementById("main-page").style.display = "none";
  document.getElementById("articleFive").style.display = "block";
  loading_text.innerHTML = "Loading..."
}, 1000);
}
