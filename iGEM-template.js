/*global $, document, window*/

$(window).on("load", function () {

  //restores the currently selected dropdown from cookies
  restoreMenu();

  //Wiederverwendbare Bezeichner (muss nicht mehr im DOM gesucht werden)
  var showNav = $("#show_nav");
  var navigation = $("#navigation");
  var contentMenu = $("#content_menu_wrapper");
  var sideMenuTimeout;

  $(".dropdown_button")
    .click(function () {

      var button = $(this);

      if (button.hasClass("is-sidebar-active")) {
        button
          .next()
          .slideUp({
            duration: 500,
          });
        button
          .removeClass("is-sidebar-active");

        document.cookie = "button_active=;"
      } else {
        $(".is-sidebar-active")
          .removeClass("is-sidebar-active");
        button
          .next()
          .slideDown({
            duration: 500,
          });
        button
          .addClass("is-sidebar-active");

        document.cookie = "button_active=" + button.html() + ";";
      }
    });

  $("#show_nav").click(function () {
    var nav = $("#navigation");
    if (!nav.hasClass("is-nav-active")) {
      nav.fadeIn(500);
      nav.addClass("is-nav-active");
    }
  });

  $(document).click(function (event) {
    var nav = $("#navigation");
    //kleiner Hack, damit wirklich nur ein Anklicken irgendwo außer im Menü dieses verschwidnen lässt
    if (nav.hasClass("is-nav-active") && nav.find(event.target).length == 0 && event.target != $("#show_nav").get(0)) {
      nav.fadeOut(500);
      nav.removeClass("is-nav-active");
    }
  })

  //Macht die Navigations-Leiste "sticky", da dies mit CSS nicht möglich ist (zumindest nicht so wie wir es gerne hätten)
  $(window).scroll(function () {
    var scrollTop = $(document).scrollTop();

    var contentOffSet = contentMenu.offset();
    var footerOffSet = $("#footer").offset();

    var igemMenuHeight = $("#top_menu_14").outerHeight(true);
    var navHeight = navigation.outerHeight(true);

    //Zeigt den Top-Scroll an oder versteckt ihn
    calcTopScrollVisibility(scrollTop);

    /*Bei unter 600px soll das mobile Menü sichtbar sein und sich immer 20px vom content-Rand entfernt befinden*/
    if ($(window).width() <= 600) {
      // sobald zum content gescrollt wurde, muss das mobile Menü nach unten bewegt werden
      moveMobileMenu(scrollTop, contentOffSet["top"], igemMenuHeight);

      /* bei über 600px soll das Seiten-Menü sichtbar sein und beim Scrollen mitbewegt werden*/
    } else {

      window.clearTimeout(sideMenuTimeout);

      sideMenuTimeout = window.setTimeout(function () {
        moveSideMenu(scrollTop, contentOffSet["top"], igemMenuHeight, navHeight, footerOffSet["top"]);
      }, 250);

    }
  });

  function calcTopScrollVisibility(scrollTop) {
    if (scrollTop > 20) {
      $("#top-scroll").fadeIn(500);
    } else {
      $("#top-scroll").fadeOut(500);
    }
  }

  function moveMobileMenu(scrollTop, contentOffsetTop, igemMenuHeight) {
    if (scrollTop >= contentOffsetTop) {
      navigation.css("top",
        scrollTop - contentOffsetTop + igemMenuHeight);
      showNav.css("top", scrollTop - contentOffsetTop + igemMenuHeight + 20);
    }

    //andernfalls bleibt das menü bei top 0 und der menü-button bei 20
    else {
      navigation.css("top", 0);
      showNav.css("top", 20);
    }
  }

  function moveSideMenu(scrollTop, contentOffsetTop, igemMenuHeight, navHeight, footerOffsetTop) {
    var navMarginBottom = Number.parseInt(navigation.css("marginBottom"));
    var navHeightNoMargin = navigation.outerHeight(false);

    if (scrollTop <= contentOffsetTop - igemMenuHeight) {
      navigation.animate({
        "marginTop": 0,
      }, "slow");
    } else if (scrollTop + navHeightNoMargin + navMarginBottom > footerOffsetTop) {
      navigation.animate({
        "marginTop": footerOffsetTop - contentOffsetTop - navHeightNoMargin - navMarginBottom,
      })
    } else {
      navigation.animate({
        "marginTop": scrollTop - contentOffsetTop + igemMenuHeight
      }, "slow");
    }
  }

  //ein wenig jQuery magie zum Hochscrollen der Seite
  $("#top-scroll").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
  });
});

//Funktion zum Auslesen eines Cookies, der durch cname spezifiert ist
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Wiederherstellen des angeklickten Menü-Punkts, damit die Übersicht gewahrt ist
function restoreMenu() {
  var openDropDown = getCookie("button_active");

  //nur wenn es überhaupt einen Cookie gibt, soll dieser genutzt werden
  if (openDropDown !== "") {
    $(".dropdown_button").each(function () {
      var button = $(this);
      if (button.html() == openDropDown) {
        button
          .next()
          .slideDown({
            duration: 500,
          });
        button
          .addClass("is-sidebar-active");
      }
    })
  }
}
