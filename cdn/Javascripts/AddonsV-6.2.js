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

<!-- Bookmark -->
/*
* sharestudy Bookmark
* Copyright (c) 2020 https://www.sharestudy.in
*/
// variable empty content
var massgEmpty = ('Favorite Article List Not Available'),
articleLabel = ('All Articles'),
link_articleLabel = ('/search');
(function ($) {
"use strict";
var OptionManager = (function () {
var objToReturn = {};
var defaultOptions = {
bookmarkIcon: 'bookmarkIcon',
bookmarkBadge: 'show-bookmark',
articleQuantity: 'article-quantity',
affixBookmarkIcon: true,
showBookmarkModal: true,
clickOnAddToBookmark: function($addTobookmark) { },
clickOnbookmarkIcon: function($bookmarkIcon, content ) { },
};
var getOptions = function (customOptions) {
var options = $.extend({}, defaultOptions);
if (typeof customOptions === 'object') {
$.extend(options, customOptions);
}
return options;
}
objToReturn.getOptions = getOptions;
return objToReturn;
}());
var articleManager = (function(){
var objToReturn = {};
localStorage.content = localStorage.content ? localStorage.content : "";
var getIndexOfarticle = function(id){
var articleIndex = -1;
var content = getAllcontent();
$.each(content, function(index, value){
if(value.id == id){
articleIndex = index;
return;
}
});
return articleIndex;
}
var setAllcontent = function(content){
localStorage.content = JSON.stringify(content);
}
var addarticle = function(id, title, link, summary, quantity, borkimage) {
var content = getAllcontent();
content.push({
id: id,
title: title,
link: link,
summary: summary,
quantity: quantity,
borkimage: borkimage
});
setAllcontent(content);
}
var getAllcontent = function(){
try {
var content = JSON.parse(localStorage.content);
return content;
} catch (e) {
return [];
}
}
var updatePoduct = function(id, quantity) {
var articleIndex = getIndexOfarticle(id);
if(articleIndex < 0){
return false;
}
var content = getAllcontent();
content[articleIndex].quantity = typeof quantity === "undefined" ? content[articleIndex].quantity : quantity;
setAllcontent(content);
return true;
}
var setarticle = function(id, title, link, summary, quantity, borkimage) {
if(typeof id === "undefined"){
console.error("id required")
return false;
}
if(typeof title === "undefined"){
console.error("title required")
return false;
}
if(typeof link === "undefined"){
console.error("link required")
return false;
}
if(typeof borkimage === "undefined"){
console.error("borkimage required")
return false;
}
summary = typeof summary === "undefined" ? "" : summary;
if(!updatePoduct(id)){
addarticle(id, title, link, summary, quantity, borkimage);
}
}
var cleararticle = function(){
setAllcontent([]);
}
var removearticle = function(id){
var content = getAllcontent();
content = $.grep(content, function(value, index) {
return value.id != id;
});
setAllcontent(content);
}
var getTotalQuantity = function(){
var total = 0;
var content = getAllcontent();
$.each(content, function(index, value){
total += value.quantity;
});
return total;
}
objToReturn.getAllcontent = getAllcontent;
objToReturn.updatePoduct = updatePoduct;
objToReturn.setarticle = setarticle;
objToReturn.cleararticle = cleararticle;
objToReturn.removearticle = removearticle;
objToReturn.getTotalQuantity = getTotalQuantity;
return objToReturn;
}());
var loadBookmarkEvent = function(userOptions){
var options = OptionManager.getOptions(userOptions);
var $bookmarkIcon = $("." + options.bookmarkIcon);
var $bookmarkBadge = $("." + options.bookmarkBadge);
var articleQuantity = options.articleQuantity;
var idBookmarkModal = 'cart-modal';
var idbookmarkTable = 'cart-table';
var idEmptyBookmarkMessage = 'cart-empty-message';
var AffixMybookmarkIcon = 'bookmarkIcon-affix';
$bookmarkBadge.text(articleManager.getTotalQuantity());
if(!$("#" + idBookmarkModal).length) {
$('bookmark').append(
'<span class="table-responsive" id="' + idbookmarkTable + '"></span>' 
);
}
var drawTable = function(){
var $bookmarkTable = $("#" + idbookmarkTable);
$bookmarkTable.empty();
var content = articleManager.getAllcontent();
$.each(content, function(){
$bookmarkTable.append(
'<tr class="item" title="' + this.summary + '" data-id="' + this.id + '">' +
'<td class="pThmb"><a class="thmb"><div class="bkmImg" style="background-image:url(' + this.borkimage + ');"></div></a></td>' +
'<td class="itmTtl"><a href="' + this.link + '" class="btn-remove">' + this.title + '</a></td>' +
'<td class="del" title="Remove favorit"><a class="btn-remove"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(3.500000, 2.000000)"><path d="M15.3891429,7.55409524 C15.3891429,15.5731429 16.5434286,19.1979048 8.77961905,19.1979048 C1.01485714,19.1979048 2.19295238,15.5731429 2.19295238,7.55409524"></path><line x1="16.8651429" y1="4.47980952" x2="0.714666667" y2="4.47980952"></line><path d="M12.2148571,4.47980952 C12.2148571,4.47980952 12.7434286,0.714095238 8.78914286,0.714095238 C4.83580952,0.714095238 5.36438095,4.47980952 5.36438095,4.47980952"></path></g></svg></a></td>' +
'</tr>'
);
});
$bookmarkTable.append(content.length ? '':
'<div class="n" role="alert" id="' + idEmptyBookmarkMessage + '"><center><svg class="line" viewBox="0 0 24 24"><g transform="translate(3.650100, 2.749900)"><path d="M16.51,5.55 L10.84,0.15 C10.11,0.05 9.29,0 8.39,0 C2.1,0 -1.95399252e-14,2.32 -1.95399252e-14,9.25 C-1.95399252e-14,16.19 2.1,18.5 8.39,18.5 C14.69,18.5 16.79,16.19 16.79,9.25 C16.79,7.83 16.7,6.6 16.51,5.55 Z"></path><path d="M10.2839,0.0827 L10.2839,2.7437 C10.2839,4.6017 11.7899,6.1067 13.6479,6.1067 L16.5989,6.1067"></path><line class="svgC" x1="10.6623" y1="10.2306" x2="5.7623" y2="10.2306"></line><line class="svgC" x1="8.2131" y1="12.6808" x2="8.2131" y2="7.7808"></line></g></svg><br/><font style="vertical-align: inherit;">' + massgEmpty + '</font></center><a class="button" href="' + link_articleLabel + '"><font style="vertical-align: inherit;">' + articleLabel + '</font></a></font></div>'
);
}
var showModal = function(){
drawTable();
}
/*
EVENT ADD TO BOOKMARK LIST
*/
if(options.affixBookmarkIcon) {
var bookmarkIconBottom = $bookmarkIcon.offset().top * 1 + $bookmarkIcon.css("height").match(/\d+/) * 1;
$(window).scroll(function () {
$(window).scrollTop() >= bookmarkIconBottom ? $bookmarkIcon.addClass(AffixMybookmarkIcon) : $bookmarkIcon.removeClass(AffixMybookmarkIcon);
});
}
$bookmarkIcon.click(function(){
options.showBookmarkModal ? showModal() : options.clickOnbookmarkIcon($bookmarkIcon, articleManager.getAllcontent());
});
$(document).on('keypress', "." + articleQuantity, function(evt){
if(evt.keyCode == 38 || evt.keyCode == 40){
return ;
}
evt.preventDefault();
});
$(document).on({
click: function() {
var $tr = $(this).closest("tr");
var id = $tr.data("id");
$tr.hide(500, function(){
articleManager.removearticle(id);
(document.querySelector("#toastNotif").innerHTML = "<span><i class='del'></i>Removed from Bookmarks</span>");
drawTable();
$bookmarkBadge.text(articleManager.getTotalQuantity());
});
}}, '.btn-remove');
}
$(document).on({
click: function() {
$('#offBkm').prop('checked', true);
return false;
}}, '.open-close');
$(function () {
var goTosharestudyBookmark = function($addTobookmarkBtn){
}
$('.sharestudy-bookmark-btn').sharestudyBookmark({
    'bookmarkIcon': 'open-close',
    'affixBookmarkIcon': !0x0,
    'clickOnAddToBookmark': function (a) {
        goTosharestudyBookmark(a)
    },
    'afterAddOnBookmark': function (a) {
        console.log('afterAddOnBookmark', a)
    },
    'clickOnAddToBookmark': function (a) {
        goTosharestudyBookmark(a)
    }
})
});
var MyBookmark = function (target, userOptions) {
/*
PRIVATE
*/
var $target = $(target);
var options = OptionManager.getOptions(userOptions);
var $bookmarkBadge = $("." + options.bookmarkBadge);
/*
EVENT TARGET ADD TO BOOKMARK
*/
$target.click(function(){
options.clickOnAddToBookmark($target);
var id = $target.data('id');
var title = $target.data('title');
var link = $target.data('link');
var summary = $target.data('summary');
var quantity = $target.data('quantity');
var borkimage = $target.data('borkimage');
articleManager.setarticle(id, title, link, summary, quantity, borkimage);
(document.querySelector("#toastNotif").innerHTML = "<span><i class='check'></i>Added to Bookmarks</span>");
$bookmarkBadge.text(articleManager.getTotalQuantity());
});
}
$.fn.sharestudyBookmark = function (userOptions) {
loadBookmarkEvent(userOptions);
return $.each(this, function () {
new MyBookmark(this, userOptions);
});
}
})(jQuery);

<!-- Theme Switcher -->
$(document).ready(function() {

// on box click 
switchColorTheme();
});

$(window).on('load', function() { 
checkTheme(); 
});

// change theme

function checkTheme() {

const currentThemeColor = localStorage.getItem('theme-color'); 

// set that theme by applying class on body
if (currentThemeColor !== null) {
$(':root').addClass(currentThemeColor);
} else {
  $(':root').addClass("theme-0");
}
}

// switch theme
function switchColorTheme() {

// on item click
$('.cusP span').click(function() {

// select value
const theme = $(this).attr('id');
// make it active
$('.cusP span').removeClass('active');
$(this).addClass('active');
$(this).checked = true;

// remove old theme if stored
removeThemeClasses();
// apply selected theme class to body
$(':root').addClass(theme);
localStorage.setItem('theme-color', theme);
  localStorage.setItem('webMode', 'light');   
  $('body').removeClass('drK');
  $('.drkB').show();
  $('.lgtB').hide();



});

}

// remove all previous classes starting with theme- from body
function removeThemeClasses() {
$(':root').removeClass(function(index, cssName) { 
return (cssName.match(/\btheme-\S+/g) || []).join(' ');
});
}

if (localStorage.getItem("theme-color") === "theme-0") {
 $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#eceff1");
  $('#theme-0').addClass("active");

} else if (localStorage.getItem("theme-color") === "theme-1") {
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#F44336");
  $('#theme-1').addClass("active");

} else if (localStorage.getItem("theme-color") === "theme-2") {
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#00BFA5");
  $('#theme-2').addClass("active");

} else if (localStorage.getItem("theme-color") === "theme-3") {
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#2196F3");
  $('#theme-3').addClass("active");

} else if (localStorage.getItem("theme-color") === "theme-4") {
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#FBC02D");
  $('#theme-4').addClass("active");

} else if (localStorage.getItem("theme-color") === "theme-5") {
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#E91E63");
  $('#theme-5').addClass("active");

} else if (localStorage.getItem("theme-color") === "theme-6") {
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#FF5722");
  $('#theme-6').addClass("active");

} else if (localStorage.getItem("theme-color") === "theme-7") {
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#607D8B");
  $('#theme-7').addClass("active");

} else if (localStorage.getItem("theme-color") === "theme-8") {
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#5D4037");
  $('#theme-8').addClass("active");

} else if (localStorage.getItem("theme-color") === "theme-9") {
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#744D97");
  $('#theme-9').addClass("active");

} else if (localStorage.getItem("theme-color") === "theme-10") {
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#3949AB");
  $('#theme-10').addClass("active");

}

function changeMeta0() {
  $("html").is(".theme-0");
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#eceff1");
}
function changeMeta1() {
  $("html").is(".theme-1");
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#F44336");
}
function changeMeta2() {
  $("html").is(".theme-2");
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#00BFA5");
}
function changeMeta3() {
  $("html").is(".theme-3");
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#2196F3");
}
function changeMeta4() {
  $("html").is(".theme-4");
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#FBC02D");
}
function changeMeta5() {
  $("html").is(".theme-5");
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#E91E63");
}
function changeMeta6() {
  $("html").is(".theme-6");
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#FF5722");
}
function changeMeta7() {
  $("html").is(".theme-7");
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#607D8B");
}
function changeMeta8() {
  $("html").is(".theme-8");
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#5D4037");
}
function changeMeta9() {
  $("html").is(".theme-9");
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#744D97");
}
function changeMeta10() {
  $("html").is(".theme-10");
  $(
    "meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']"
  ).attr("content", "#3949AB");
}
<!-- ToTop -->
$(function () {
  // 1. Set up SVG animation
  // see http://jakearchibald.com/2013/animated-line-drawing-svg/
  var progressPath = document.querySelector(".toTopB .c");
  var pathLength = progressPath.getTotalLength();

  // 2. Define updateProgress function
  var updateProgress = function () {
    // calculate values
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    // update dashOffset
    progressPath.style.strokeDashoffset = progress;
  };

  // 3. trigger updateProgress once on load and then on scroll
  updateProgress();
  $(window).scroll(updateProgress);
});
