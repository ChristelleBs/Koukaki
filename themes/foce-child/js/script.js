document.addEventListener("DOMContentLoaded", function() {
  // Sélectionne les sections à animer
  const sectionsToAnimate = document.querySelectorAll('.banner, .story, #studio');

  // Ajoute la classe 'show' à chaque section avec un délai progressif
  sectionsToAnimate.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add('show');
    }, index * 200); // Délai pour l'effet de décalage
  });
});
 