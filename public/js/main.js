let verreManquant = document.querySelectorAll(".petitVerre")
let grandVerre = document.querySelector(".grandVerre")


function miseaJourQuantite() {
    let verresBu = document.querySelectorAll(".verreBu")
    let quantiteManquante = document.querySelector(".quantiteManquante")
    let eauRestante = 2 - (0.25 * verresBu.length)  //! Multiplie 0.25 fois le nombre de verres (= 2L) => ensuite le 2 - le résultat pour avoir la quantité d'eau restante
    let hauteurManquant = 100
    let resultatManquant = hauteurManquant - (12.5 * verresBu.length) //! Calcule 100 - (12.5 * (1,2,3 ... 8 'la longueur de verreBu qui est de 8)) => 100 - (12.5 * 2) => 100 - 25 => 75
    quantiteManquante.style.height = `${resultatManquant}%` //! On stock le resultat dans une variable pour pouvoir l'utiliser dans le If
    quantiteManquante.innerText = `${eauRestante}L \n Remained` //! Change la quantité d'eau restante
    if (resultatManquant == 0) {
        quantiteManquante.innerText = ""
    }

    let maxHauteur = 250 //! la hauteur max est égale a celle du '.grandVerre'
    let hauteur = maxHauteur * (1 - eauRestante / 2) //! On calcule d'abord '(1 - 2 Litres /2) => 1 - 1 => 0, Ensuite 250 * 0 => 0 (Si le verre est plein), (1 - 1 Litres / 2) => 1 - 0.5 => 0.5 , ensuite 250 * 0.5 => 125
    document.querySelector(".eauVerre").style.height = `${hauteur}px` //! On se sert de la valeur de 'hauteur' pour donner la hauteur a la div avec les verres d'eau bu
    let pourcentage = 0
    document.querySelector(".eauVerre").innerText = `${pourcentage + (12.5 * verresBu.length)} %`
    if (document.querySelector(".eauVerre").innerText == "0 %"){
        document.querySelector(".eauVerre").innerText = ""
    }
}

verreManquant.forEach(element => {  //! On cible chaque element de verreManquant et on lance la fonction dans chaque verre
    element.addEventListener("click", () => {
        element.classList.toggle("verreBu")
        miseaJourQuantite()
    })
});
