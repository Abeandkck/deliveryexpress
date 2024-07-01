function ajouterAuPanier(nomProduit, prixProduit) {
  // Vérifie si le panier existe déjà dans le stockage local
  var panier = JSON.parse(localStorage.getItem('panier')) || [];
  
  // Ajoute le nouvel article au panier
  var nouvelArticle = { nom: nomProduit, prix: prixProduit };
  panier.push(nouvelArticle);

  // Convertit le panier en JSON et le stocke dans le stockage local
  localStorage.setItem('panier', JSON.stringify(panier));

  // Redirige vers la page du panier
  window.location.href = 'panier.html';
}


// Code pour récupérer les articles du panier et les afficher dans la page panier
window.onload = function() {
  var articleJson = localStorage.getItem('article');
  if (articleJson) {
      var article = JSON.parse(articleJson);
      var listePanier = document.getElementById('liste-panier');
      var totalPanier = document.getElementById('total-panier');

      var newItem = document.createElement('li');
      newItem.textContent = article.nom + ' - ' + article.prix + '$';
      listePanier.appendChild(newItem);

      var totalActuel = parseFloat(totalPanier.textContent.split(': ')[1]);
      var nouveauTotal = totalActuel + parseFloat(article.prix);
      totalPanier.textContent = 'Total: ' + nouveauTotal + '$';
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.toggle-btn');
  const dropdownContent = document.querySelector('.dropdown-content');

  toggleBtn.addEventListener('mouseenter', function() {
      dropdownContent.style.display = 'block';
  });

  toggleBtn.addEventListener('mouseleave', function() {
      setTimeout(() => {
          if (!dropdownContent.matches(':hover')) {
              dropdownContent.style.display = 'none';
          }
      }, 300);
  });

  dropdownContent.addEventListener('mouseleave', function() {
      dropdownContent.style.display = 'none';
  });

  dropdownContent.addEventListener('mouseenter', function() {
      dropdownContent.style.display = 'block';
  });
})
;document.getElementById('search-btn').addEventListener('click', function() {
  var searchBar = document.getElementById('search-bar');
  searchBar.classList.toggle('active');
  if (searchBar.classList.contains('active')) {
      searchBar.focus();
  }
});

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
document.addEventListener('DOMContentLoaded', function() {
  const searchIcon = document.getElementById('search-icon');
  const searchContainer = document.getElementById('search-container');

  searchIcon.addEventListener('click', function() {
      if (searchContainer.style.display === 'block') {
          searchContainer.style.display = 'none';
      } else {
          searchContainer.style.display = 'block';
      }
  });

  document.addEventListener('click', function(event) {
      if (!searchContainer.contains(event.target) && event.target !== searchIcon) {
          searchContainer.style.display = 'none';
      }
  });
});

