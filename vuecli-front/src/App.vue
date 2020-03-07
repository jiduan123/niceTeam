<template>  
    <div >
      <router-view></router-view>
    </div> 
</template>

<script>
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 640) {
        docEl.style.fontSize = "100px";
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 640) + "px";
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
export default {
  components: {
    home: () => import("./views/Home.vue"),
    movie:()=> import("./views/Movie.vue"),
    detail:()=> import("./components/movie/Detail.vue")
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

</style>






