<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ma_base_de_donnees";

// Créer une connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connexion échouée: " . $conn->connect_error);
}

// Récupérer les données du formulaire
$nom_utilisateur = $_POST['username'];
$mot_de_passe = $_POST['password'];

// Vérifier les informations de connexion
$sql = "SELECT * FROM Utilisateurs WHERE nom_utilisateur='$nom_utilisateur' AND mot_de_passe='$mot_de_passe'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "Connexion réussie";
} else {
    echo "Nom d'utilisateur ou mot de passe incorrect";
}

$conn->close();
?>
