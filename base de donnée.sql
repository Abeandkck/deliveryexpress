-- Table Utilisateurs
CREATE TABLE Utilisateurs (
    utilisateur_id INT AUTO_INCREMENT PRIMARY KEY,
    nom_utilisateur VARCHAR(50) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table Catégories
CREATE TABLE Categories (
    categorie_id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL
);

-- Table Magasins
CREATE TABLE Magasins (
    magasin_id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    logo_url VARCHAR(255)
);

-- Table Produits
CREATE TABLE Produits (
    produit_id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    prix DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    categorie_id INT,
    magasin_id INT,
    FOREIGN KEY (categorie_id) REFERENCES Categories(categorie_id),
    FOREIGN KEY (magasin_id) REFERENCES Magasins(magasin_id)
);
