AOS.init();

// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    700
  );
});

//Hamburger

let menu = $(".navigation_mobile");
let hamb = $(".hamburger_menu");
let body = $("body");

hamb.click(function() {
  menu.toggleClass("open");
  body.toggleClass("menu_open");

  if (hamb.hasClass("close_menu")) {
    closeMenu();
  } else {
    openMenu();
  }
});

$(window).resize(function() {
  let curWidth = $(window).width();

  if (curWidth >= 1550) {
    closeMenu();
  }
});

$(".navigation_mobile li").click(function() {
  closeMenu();
});

function openMenu() {
  hamb.addClass("close_menu");
}

function closeMenu() {
  body.removeClass("menu_open");
  menu.removeClass("open");
  hamb.removeClass("close_menu");
}
