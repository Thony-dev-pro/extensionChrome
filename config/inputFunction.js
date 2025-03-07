/**
 * Génère un texte aléatoire de la longueur spécifiée
 * @param {*} length //longueur max
 * @returns 
 */

function generateTexte(length){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

/**
 * Génère un texte aléatoire pour un input
 * @param {*} input 
 */
function generateTexteForInput(input){
    let lengthMax = input.maxLength;
    
    if(lengthMax < 0){
        lengthMax = DEFAULT_LENGHT_INPUT;
    }

    const texteGenerate = generateTexte(lengthMax);
    input.value = texteGenerate;
}

/**
 * Active tous les événements d'un input
 * @param {*} input 
 */
function activeAllEventsInput(input){
    EVENTS.forEach((event) => {
        input.dispatchEvent(event.event);
    });
 }

/**
 * Génère un texte aléatoire pour tous les inputs d'un formulaire
 * @param {*} form 
 */
function generateTexteForAllInputForm(form){
    const inputs = form.querySelectorAll('input[type="text"]');
    inputs.forEach((input) => {
        generateTexteForInput(input);
        activeAllEventsInput(input);
    });
}

/**
 * Génère une valeur aléatoire pour un select
 * @param {*} select 
 */
function getRandomValueSelect(select){
    const options = select.querySelectorAll('option');
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];
    select.value = randomOption.value;
}

/**
 * Génère une valeur aléatoire pour tous les selects d'un formulaire
 * @param {*} form 
 */
function getRandomValueSelectForAllSelect(form){
    const selects = form.querySelectorAll('select');
    selects.forEach((select) => {
        getRandomValueSelect(select);
        activeAllEventsInput(select);
    });
}


