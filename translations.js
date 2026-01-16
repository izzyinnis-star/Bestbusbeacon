// Multilingual System - Translation Dictionary
// Supported languages: EN (English), FR (French)

const translations = {
  EN: {
    // Button Labels
    signalBus: "Signal Bus",
    trackBus: "Track Bus",
    settings: "Settings",
    save: "Save",
    cancel: "Cancel",
    confirm: "Confirm",
    back: "Back",
    next: "Next",
    refresh: "Refresh",
    stop: "Stop",
    start: "Start",
    
    // Status Messages
    busArriving: "Bus Arriving",
    busDelayed: "Bus Delayed",
    busOnTime: "Bus On Time",
    noService: "No Service",
    serviceActive: "Service Active",
    connecting: "Connecting...",
    connected: "Connected",
    disconnected: "Disconnected",
    error: "Error",
    success: "Success",
    loading: "Loading...",
    
    // Settings Labels
    language: "Language",
    notifications: "Notifications",
    highContrast: "High Contrast Mode",
    enableNotifications: "Enable Notifications",
    darkMode: "Dark Mode",
    fontSize: "Font Size",
    autoRefresh: "Auto Refresh",
    refreshInterval: "Refresh Interval",
    aboutApp: "About App",
    version: "Version",
    
    // Additional UI Text
    welcomeMessage: "Welcome to Best Bus Beacon",
    selectRoute: "Select Route",
    selectStop: "Select Stop",
    arrivalTime: "Arrival Time",
    busNumber: "Bus Number",
    route: "Route",
    destination: "Destination",
    minutes: "minutes",
    seconds: "seconds"
  },
  
  FR: {
    // Button Labels (Étiquettes de bouton)
    signalBus: "Signaler l'autobus",
    trackBus: "Suivre l'autobus",
    settings: "Paramètres",
    save: "Sauvegarder",
    cancel: "Annuler",
    confirm: "Confirmer",
    back: "Retour",
    next: "Suivant",
    refresh: "Actualiser",
    stop: "Arrêter",
    start: "Démarrer",
    
    // Status Messages (Messages d'état)
    busArriving: "Autobus en approche",
    busDelayed: "Autobus retardé",
    busOnTime: "Autobus à l'heure",
    noService: "Aucun service",
    serviceActive: "Service actif",
    connecting: "Connexion...",
    connected: "Connecté",
    disconnected: "Déconnecté",
    error: "Erreur",
    success: "Succès",
    loading: "Chargement...",
    
    // Settings Labels (Étiquettes de paramètres)
    language: "Langue",
    notifications: "Notifications",
    highContrast: "Mode contraste élevé",
    enableNotifications: "Activer les notifications",
    darkMode: "Mode sombre",
    fontSize: "Taille de police",
    autoRefresh: "Actualisation automatique",
    refreshInterval: "Intervalle d'actualisation",
    aboutApp: "À propos de l'application",
    version: "Version",
    
    // Additional UI Text (Texte d'interface supplémentaire)
    welcomeMessage: "Bienvenue à Best Bus Beacon",
    selectRoute: "Sélectionner l'itinéraire",
    selectStop: "Sélectionner l'arrêt",
    arrivalTime: "Heure d'arrivée",
    busNumber: "Numéro d'autobus",
    route: "Itinéraire",
    destination: "Destination",
    minutes: "minutes",
    seconds: "secondes"
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
