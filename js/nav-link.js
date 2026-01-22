/**********************************************************
    
        Gestion de l'état actif de la navigation

**********************************************************/

//Recupération des liens de navigation
const liens_navigation = document.querySelectorAll(".nav-link");

//Je parcoure les liens de navigation à l'aide d'une boucle
liens_navigation.forEach((lien_navigation) => {
  //J'ajoute à chaque lien un EventListener qui s'attend à un click
  lien_navigation.addEventListener("click", (event) => {
    //Ajoute au lien cliqué la classe active
    event.target.classList.add("active");
    //On parcoure à nouveau la liste des liens
    liens_navigation.forEach((lien_navigation) => {
      //Enlève la classe active des autres liens de navigation
      if (lien_navigation !== event.target) {
        lien_navigation.classList.remove("active");
      }
    });
  });
});

/**********************************************************
    
        Gestion de l'état actif de la navigation(Scroll Spy)

**********************************************************/

//Recupération des sections
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  section.addEventListener("mouseenter", () => {
    //Si la souris est sur la section présentation
    if (section.id === "section-presentation") {
      liens_navigation.forEach((lien_navigation) => {
        if (lien_navigation.id === "link-presentation") {
          lien_navigation.classList.add("active");
        } else {
          lien_navigation.classList.remove("active");
        }
      });
    }
    //Si la souris est sur la section features
    if (section.id === "section-features") {
      liens_navigation.forEach((lien_navigation) => {
        if (lien_navigation.id === "link-features") {
          lien_navigation.classList.add("active");
        } else {
          lien_navigation.classList.remove("active");
        }
      });
    }
    //Si la souris est sur la section pricing
    if (section.id === "section-pricing") {
      liens_navigation.forEach((lien_navigation) => {
        if (lien_navigation.id === "link-pricing") {
          lien_navigation.classList.add("active");
        } else {
          lien_navigation.classList.remove("active");
        }
      });
    }
    //Si la souris est sur la section testimonials
    if (section.id === "section-testimonials") {
      liens_navigation.forEach((lien_navigation) => {
        if (lien_navigation.id === "link-testimonials") {
          lien_navigation.classList.add("active");
        } else {
          lien_navigation.classList.remove("active");
        }
      });
    }
    //Si la souris est sur la section faq
    if (section.id === "section-faq") {
      liens_navigation.forEach((lien_navigation) => {
        if (lien_navigation.id === "link-faq") {
          lien_navigation.classList.add("active");
        } else {
          lien_navigation.classList.remove("active");
        }
      });
    }
  });
});
