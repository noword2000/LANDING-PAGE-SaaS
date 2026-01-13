/**********************************************************
    
        Gestion de l'état actif de la navigation

**********************************************************/

//Recupération des liens de navigation
let liens_navigation = document.querySelectorAll(".nav-link");

//Je parcoure les liens de navigation à l'aide d'une boucle
liens_navigation.forEach((lien_navigation)=>{
    //J'ajoute à chaque lien un EventListener qui s'attend à un click
    lien_navigation.addEventListener("click", (event)=>{
        //Ajoute au lien cliqué la classe active
        event.target.classList.add("active");
        //On parcoure à nouveau la liste des liens
        liens_navigation.forEach((lien_navigation)=>{
            //Enlève la classe active des autres liens de navigation
            if(lien_navigation !== event.target){
                lien_navigation.classList.remove("active");
            }
        });
    });
});
