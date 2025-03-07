document.body.style.backgroundColor = "lightblue";

// Écouter les messages du popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "generateInputValues") {
        const forms = document.querySelectorAll("form");
        forms.forEach(form => {
            generateTexteForAllInputForm(form);
            getRandomValueSelectForAllSelect(form)
        });
    }
});




