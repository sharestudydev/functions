<!--[ CookieConsent JS ]-->
var ckBox = document.getElementById("ckBox"),
  ckAcptBtn = document.getElementById("ckAcptBtn"),
  ckErrMes =
    "Cookie can't be set! Please unblock this site from the cookie setting of your browser.";
if (null != ckBox) {
  ckAcptBtn.onclick = () => {
    (document.cookie = "CookieConsent=Accepted; max-age=2592000; path=/"),
      document.cookie ? ckBox.classList.add("acptd") : alert(ckErrMes);
  };
  let e = document.cookie.indexOf("CookieConsent=Accepted");
  -1 != e ? ckBox.classList.add("hide") : ckBox.classList.remove("hide");
}

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


<!--[ AnitAd ]-->
var lazyAnti=!1;var antiAdBlock=document.querySelector("#antiAdBlock");window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyAnti||0!=document.body.scrollTop&&!1===lazyAnti)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";e.onerror=function(){if(antiAdBlock!=null){antiAdBlock.classList.remove("hidden");window.lazyAnti=!0}};var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyAnti=!0)},!0);



