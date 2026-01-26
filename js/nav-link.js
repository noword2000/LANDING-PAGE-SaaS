/**********************************************************
    
        Gestion de l'état actif de la navigation

**********************************************************/

$(".nav-link").on("click", (event) => {
  $(".nav-link").removeClass("active");
  $(event.target).addClass("active");
});

/**********************************************************
    
        Gestion de l'état actif de la navigation(Scroll Spy)

**********************************************************/

$("section").on("mouseenter", (event) => {
  if (event.currentTarget.id === "section-presentation") {
    $(".nav-link").removeClass("active");
    $("#link-presentation").addClass("active");
  }
  if (event.currentTarget.id === "section-features") {
    $(".nav-link").removeClass("active");
    $("#link-features").addClass("active");
  }
  if (event.currentTarget.id === "section-pricing") {
    $(".nav-link").removeClass("active");
    $("#link-pricing").addClass("active");
  }
  if (event.currentTarget.id === "section-testimonials") {
    $(".nav-link").removeClass("active");
    $("#link-testimonials").addClass("active");
  }
  if (event.currentTarget.id === "section-faq") {
    $(".nav-link").removeClass("active");
    $("#link-faq").addClass("active");
  }
});
