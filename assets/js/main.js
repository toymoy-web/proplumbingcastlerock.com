(function(){
  "use strict";

  function lockScroll(lock){
    document.documentElement.style.overflow = lock ? "hidden" : "";
  }

  function initMobileMenu(){
    var hamburger = document.querySelector(".hamburger");
    var drawer = document.querySelector(".mob-drawer");
    if(!hamburger || !drawer) return;
    var closeBtn = drawer.querySelector(".mob-close");
    var overlay = drawer.querySelector(".overlay");

    function open(){
      drawer.classList.add("open");
      hamburger.setAttribute("aria-expanded","true");
      lockScroll(true);
    }
    function close(){
      drawer.classList.remove("open");
      hamburger.setAttribute("aria-expanded","false");
      lockScroll(false);
    }
    hamburger.addEventListener("click", open);
    if(closeBtn) closeBtn.addEventListener("click", close);
    if(overlay) overlay.addEventListener("click", close);

    var subToggles = drawer.querySelectorAll("[data-sub-toggle]");
    for(var i=0;i<subToggles.length;i++){
      subToggles[i].addEventListener("click", function(){
        var targetId = this.getAttribute("data-sub-toggle");
        var sub = document.getElementById(targetId);
        if(sub) sub.classList.toggle("open");
      });
    }
  }

  function initFaq(){
    var items = document.querySelectorAll(".faq-item");
    for(var i=0;i<items.length;i++){
      var item = items[i];
      var q = item.querySelector(".faq-q");
      var a = item.querySelector(".faq-a");
      if(!q || !a) continue;
      q.addEventListener("click", function(){
        var parent = this.parentElement;
        var answer = parent.querySelector(".faq-a");
        var isOpen = parent.getAttribute("data-open") === "true";
        if(isOpen){
          parent.setAttribute("data-open","false");
          answer.style.maxHeight = null;
        } else {
          parent.setAttribute("data-open","true");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function(){
    initMobileMenu();
    initFaq();
  });
})();
