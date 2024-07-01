const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Définir le dossier statique pour servir les fichiers HTML, CSS, et JavaScript
const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));

// Middleware pour la gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Middleware pour la gestion des erreurs 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erreur interne du serveur');
});

// Route pour servir le fichier HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'jsks.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
