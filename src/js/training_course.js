AOS.init();

window.addEventListener("DOMContentLoaded", event => {
  $("#description_btn").addClass("underline");
});

// Hide / show description

$("#description_btn").on("click", function() {
  $("#programme_description_holder").removeClass("hide");
  $("#programme_holder").addClass("hide");
  $("#description_btn").addClass("underline");
  $("#programme_btn").removeClass("underline");
});

$("#programme_btn").on("click", function() {
  $("#programme_description_holder").addClass("hide");
  $("#programme_holder").removeClass("hide");
  $("#programme_btn").addClass("underline");
  $("#description_btn").removeClass("underline");
});
