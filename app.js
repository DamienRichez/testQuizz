const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['d', 'b', 'a', 'b'];
const emoji = ['✔️', '🌟', '👀', '😭', '👎'];
const titreResultat = document.querySelector('.resultats h2');
const texteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    for (i=1; i < 5; i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats) {
    for (let a = 0; a < 4; a++) {
        if(tabResultats[a] === reponses[a]){
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }

    afficherResultat(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

function afficherResultat(tabCheck) {
    const nbDeFautes = tabCheck.filter(el => el !== true).length;

    switch(nbDeFautes){

        case 0:
            titreResultat.innerText = `${emoji[0]} Bravo c'est un sans faute ! ${emoji[0]}`
            aideResultat.innerText = '';
            texteResultat.innerText = '4/4';
        break;

        case 1:
            titreResultat.innerText = `${emoji[1]} Presque ! ${emoji[1]}`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez';
            texteResultat.innerText = '3/4';
        break;

        case 2:
            titreResultat.innerText = `${emoji[2]} C'est moyen ! ${emoji[2]}`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez';
            texteResultat.innerText = '2/4';
        break;

        case 3:
            titreResultat.innerText = `${emoji[3]} Essai encore ! ${emoji[3]}`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez';
            texteResultat.innerText = '1/4';
        break;

        case 4:
            titreResultat.innerText = `${emoji[4]} NUL NUL NUL ${emoji[4]}`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez';
            texteResultat.innerText = '0/5';
        break;

        default:
            'Woops, cas innatendu';
    }
}

function couleursFonction(tabValBool) {
    for (let j = 0; j < tabValBool.length; j++) {
        if (tabValBool[j] === true) {
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() =>{
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }
    }
}

toutesLesQuestions.forEach(item =>{
    item.addEventListener('click', () =>{
        item.style.background = "white";
    })
})