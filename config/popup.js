document.getElementById("btnGValInput").addEventListener("click", async () => {
    // Récupérer l'onglet actif
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // Envoyer un message au content script
    chrome.tabs.sendMessage(tab.id, { action: "generateInputValues" });
});


