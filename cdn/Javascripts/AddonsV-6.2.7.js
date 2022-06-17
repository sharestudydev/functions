<!--[ CookieConsent JS ]-->
window.addEventListener("load", function () {
  var ckWrap = document.querySelector("#ckWrap"),
    ckAccept = document.querySelector("#ckAccept"),
    ckError = document.querySelector("#ckError"),
    ckErrorN =
      "<input class='MiniPop hidden' id='forCkErr' type='checkbox'/><div class='MiniPopNotif' data-text='Oops! Cookie can&#039;t be set! Please unblock this site from the cookie setting of your browser.'><label for='forCkErr'></label></div>";
  if (ckWrap != null) {
    ckWrap.classList.add("v");
    ckAccept.onclick = () => {
      document.cookie =
        "CookiePolicy=Accepted;max-age=" + 60 * 60 * 24 * 30 + ";path=/";
      if (document.cookie) {
        console.log("The user has accepted the Cookie Policy");
        ckWrap.classList.add("a");
      } else {
        ckError.innerHTML = ckErrorN;
      }
    };
    let ckConsent = document.cookie.indexOf("CookiePolicy=Accepted");
    if (ckConsent != -1) {
      console.log("Cookie Policy is Accepted");
      ckWrap.classList.remove("v");
    }
  }
});



<!--[ No Internet Connection ]-->
function noconnRel() {
  var n = document.querySelector("#noIntrCon .popup-box button svg");
  null != n && n.classList.add("rotate"),
    setTimeout(function () {
      window.location.reload();
    }, 500);
}
window.addEventListener("offline", function () {
  document.querySelector("#noIntrCon").classList.remove("hidden"),
    (document.querySelector("#toastNotif").innerHTML =
      "<span><i class='offWifi'></i>No internet connection!</span>");
}),
  window.addEventListener("online", function () {
    document.querySelector("#noIntrCon").classList.add("hidden"),
      (document.querySelector("#toastNotif").innerHTML =
        "<span><i class='onWifi'></i>Internet connection restored!</span>");
  });
<!--[ Pre Content Copy ]-->
for (
  var preClick = document.getElementsByTagName("pre"), i = 0;
  i < preClick.length;
  i++
)
  preClick[i].addEventListener(
    "dblclick",
    function () {
      var e = getSelection(),
        o = document.createRange();
      o.selectNodeContents(this),
        e.removeAllRanges(),
        e.addRange(o),
        document.execCommand("copy"),
        e.removeAllRanges(),
        (document.querySelector("#toastNotif").innerHTML =
          "<span><i class='clipboard'></i>Copied to clipboard!</span>");
    },
    !1
  );


<!--[ lazy AnitAd ]-->
var lazyAnti = !1;
var antiAdBlock = document.querySelector("#antiAdBlock");
window.addEventListener(
  "scroll",
  function () {
    ((0 != document.documentElement.scrollTop && !1 === lazyAnti) ||
      (0 != document.body.scrollTop && !1 === lazyAnti)) &&
      (!(function () {
        var e = document.createElement("script");
        (e.type = "text/javascript"),
          (e.async = !0),
          (e.src =
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
        e.onerror = function () {
          if (antiAdBlock != null) {
            antiAdBlock.classList.remove("hidden");
            window.lazyAnti = !0;
          }
        };
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(e, a);
      })(),
      (lazyAnti = !0));
  },
  !0
);

     <!-- Google Translate -->
var lazyts = !1;
var gTrans = document.getElementById("gTrans");
window.addEventListener(
  "scroll",
  function () {
    ((0 != document.documentElement.scrollTop && !1 === lazyts) ||
      (0 != document.body.scrollTop && !1 === lazyts)) &&
      (!(function () {
        var e = document.createElement("script");
        (e.type = "text/javascript"),
          (e.async = !0),
          (e.src =
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(e, a);
        if (gTrans != null) {
          gTrans.classList.remove("gtHide");
        }
      })(),
      (lazyts = !0));
  },
  !0
);

     <!-- Back to Top --> 
var backTop = document.getElementById("backTop");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    backTop.style.display = "block";
    backTop.style.bottom = "20px";
  } else {
    backTop.style.display = "none";
  }
  if (
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight - 100
  ) {
    backTop.style.bottom = "150px";
  }
}

