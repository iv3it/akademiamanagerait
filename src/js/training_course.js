AOS.init();

window.addEventListener("DOMContentLoaded", event => {
  $("#description_btn").addClass("underline");
});

// Hide / show description

$("#description_btn").on("click", function() {
  $("#programme_description_holder").removeClass("hide");
  $("#programme_holder").addClass("hide");
  $("#instructor_holder").addClass("hide");
  $("#description_btn").addClass("underline");
  $("#programme_btn").removeClass("underline");
  $("#instructor_btn").removeClass("underline");
  AOS.refresh();
});

$("#programme_btn").on("click", function() {
  $("#programme_holder").removeClass("hide");
  $("#programme_description_holder").addClass("hide");
  $("#instructor_holder").addClass("hide");
  $("#programme_btn").addClass("underline");
  $("#description_btn").removeClass("underline");
  $("#instructor_btn").removeClass("underline");
  AOS.refresh();
});

$("#instructor_btn").on("click", function() {
  $("#instructor_holder").removeClass("hide");
  $("#programme_description_holder").addClass("hide");
  $("#programme_holder").addClass("hide");
  $("#instructor_btn").addClass("underline");
  $("#description_btn").removeClass("underline");
  $("#programme_btn").removeClass("underline");
  AOS.refresh();
});
