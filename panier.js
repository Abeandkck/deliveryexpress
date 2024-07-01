// Tableau pour stocker les produits dans le panier
var cartItems = [];

// Fonction pour afficher les articles dans le panier
function displayCart() {
    var cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = ""; // Effacer le contenu actuel

    // Boucler à travers les articles dans le panier et les afficher
    cartItems.forEach(function(item) {
        var itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");

        var itemName = document.createElement("span");
        itemName.textContent = item.title;
        itemElement.appendChild(itemName);

        var itemQuantity = document.createElement("input");
        itemQuantity.type = "number";
        itemQuantity.value = item.quantity;
        itemQuantity.addEventListener("change", function(event) {
            item.quantity = parseInt(event.target.value);
            updateTotal();
        });
        itemElement.appendChild(itemQuantity);

        var removeButton = document.createElement("button");
        removeButton.textContent = "Retirer";
        removeButton.addEventListener("click", function() {
            removeItemFromCart(item);
        });
        itemElement.appendChild(removeButton);

        cartItemsContainer.appendChild(itemElement);
    });

    updateTotal();
}

// Fonction pour ajouter un produit au panier
function addItemToCart(product) {
    var existingItem = cartItems.find(item => item.title === product.title);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({...product, quantity: 1});
    }

    displayCart();
}

// Fonction pour retirer un produit du panier
function removeItemFromCart(item) {
    var itemIndex = cartItems.indexOf(item);
    cartItems.splice(itemIndex, 1);
    displayCart();
}

// Fonction pour mettre à jour le total des achats
function updateTotal() {
    var totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
}

// Initialiser l'affichage du panier
displayCart();
