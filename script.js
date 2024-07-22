//DOM
//Mise en relation des elements du dom avec js
const touches = [...document.querySelectorAll('.boutton')];
console.log(touches);
//récup la liste des touches
const listeKeyCode = touches.map(touche => touche.dataset.key);
console.log(listeKeyCode);
//récupe la div écran
const ecran = document.querySelector('.calculatrice__screen');
//fonction ecoute
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
});

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
});
//fonction calcule, on verifie avec la methode include, 
//si les touches presser sont bien dans la calculatrice
const calculer = (valeur) => {
     if (listeKeyCode.includes(valeur)) {
        switch (valeur) {
            case '8':
               ecran.textContent = "";
               break;

            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;

            default:
                const indexKeyCode = listeKeyCode.indexOf(valeur);
                const touche = touches[indexKeyCode]
                ecran.textContent += touche.innerHTML;
        }
     }     
    
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcule !' + e.message);
})