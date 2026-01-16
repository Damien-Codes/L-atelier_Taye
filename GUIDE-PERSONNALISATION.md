# 🎨 Guide de Personnalisation Rapide

## 📝 Modifier les Textes

### Dans `index.html` :

**Titre principal (Hero)** - Ligne 31 :
```html
<h1>Créations Artisanales en Crochet & Tricot</h1>
```

**Slogan** - Ligne 32 :
```html
<p class="subtitle">Chaque pièce raconte une histoire, tissée avec amour et patience</p>
```

**Section À Propos** - Lignes 57-75 :
Modifiez le texte pour raconter votre propre histoire.

**Email de contact** - Ligne 196 :
```html
<a href="mailto:contact@creations-artisanales.fr">contact@creations-artisanales.fr</a>
```

**Numéro WhatsApp** - Ligne 203 :
```html
<a href="https://wa.me/33123456789">+33 1 23 45 67 89</a>
```

## 🖼️ Ajouter/Modifier les Créations

### Dans `script.js` - Ligne 6 :

```javascript
const galleryData = [
    {
        id: 1,
        name: "Nom de la création",
        category: "bonnets", // Options: bonnets, echarpes, plaids, decorations, accessoires
        description: "Description courte et attrayante",
        price: "35€",
        image: "nom-fichier.jpg"
    },
    // Ajoutez d'autres créations ici...
];
```

### Catégories disponibles :
- `bonnets` - Pour les bonnets
- `echarpes` - Pour les écharpes
- `plaids` - Pour les plaids et couvertures
- `decorations` - Pour les décorations murales
- `accessoires` - Pour sacs, mitaines, etc.

## 🎨 Changer les Couleurs

### Dans `index.css` - Lignes 5-15 :

```css
:root {
  --color-cream: #FAF7F2;      /* Fond principal */
  --color-beige: #E8DCC4;      /* Beige clair */
  --color-sand: #D4C5A9;       /* Sable */
  --color-terracotta: #C77D58; /* Couleur d'accent principale */
  --color-sage: #9CAF88;       /* Vert sauge */
  --color-charcoal: #3D3D3D;   /* Texte principal */
}
```

**Suggestions de palettes alternatives :**

**Palette Rose Poudré :**
```css
--color-cream: #FFF5F5;
--color-beige: #FFE4E1;
--color-terracotta: #D4A5A5;
--color-sage: #B8A8A8;
```

**Palette Bleu Doux :**
```css
--color-cream: #F5F9FF;
--color-beige: #E3EDF7;
--color-terracotta: #8FA3BF;
--color-sage: #A8C5D1;
```

## 📱 Réseaux Sociaux

### Dans `index.html` - Lignes 211-215 :

```html
<div class="social-links">
    <a href="https://instagram.com/votre-compte" class="social-link">📷</a>
    <a href="https://facebook.com/votre-page" class="social-link">👍</a>
    <a href="https://pinterest.com/votre-profil" class="social-link">📌</a>
</div>
```

Remplacez les `#` par vos vrais liens de réseaux sociaux.

## 🖼️ Remplacer les Images

1. Créez un dossier `images/` dans le dossier du site
2. Ajoutez vos photos avec les noms suivants :
   - `hero-image.jpg` (1920x1080px)
   - `about-image.jpg` (800x800px)
   - Pour chaque produit : `bonnet1.jpg`, `echarpe1.jpg`, etc. (600x600px)

3. Mettez à jour les chemins dans `index.html` :
```html
<!-- Ligne 27 -->
<img src="images/hero-image.jpg" alt="Créations en crochet">

<!-- Ligne 53 -->
<img src="images/about-image.jpg" alt="Artisan au travail">
```

4. Mettez à jour les chemins dans `script.js` :
```javascript
image: "images/bonnet1.jpg"
```

## 🚀 Conseils pour de Belles Photos

1. **Éclairage** : Utilisez la lumière naturelle (près d'une fenêtre)
2. **Fond** : Utilisez un fond neutre (drap blanc, lin beige)
3. **Angle** : Prenez plusieurs angles (face, 3/4, détails)
4. **Mise en scène** : Ajoutez des éléments naturels (branches, fleurs séchées)
5. **Format** : Privilégiez le format carré (600x600px minimum)
6. **Compression** : Utilisez un outil comme TinyPNG pour optimiser

## 📧 Configurer le Formulaire de Contact

Le formulaire actuel affiche juste une alerte. Pour le rendre fonctionnel :

### Option 1 : Utiliser FormSpree (Gratuit)
1. Allez sur https://formspree.io
2. Créez un compte gratuit
3. Créez un nouveau formulaire
4. Copiez votre URL de formulaire
5. Dans `script.js`, ligne 150, remplacez par :

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch('VOTRE_URL_FORMSPREE', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            alert('Merci ! Votre message a été envoyé avec succès. 💝');
            contactForm.reset();
        }
    } catch (error) {
        alert('Une erreur est survenue. Veuillez réessayer.');
    }
});
```

### Option 2 : Lien direct vers email
Dans `index.html`, modifiez le formulaire pour utiliser `mailto:` :

```html
<form class="contact-form" action="mailto:votre-email@exemple.fr" method="post" enctype="text/plain">
```

## 🛒 Ajouter un Système de Paiement (Futur)

Pour évoluer vers une vraie boutique :

1. **Stripe** : Intégration de paiement simple
2. **PayPal** : Boutons de paiement faciles
3. **Etsy** : Créez une boutique et liez les produits
4. **Shopify** : Solution e-commerce complète

## ✅ Checklist Avant Publication

- [ ] Remplacer toutes les images placeholder par vos vraies photos
- [ ] Modifier tous les textes (À propos, descriptions)
- [ ] Mettre à jour les informations de contact
- [ ] Ajouter vos liens de réseaux sociaux
- [ ] Tester le formulaire de contact
- [ ] Vérifier sur mobile (responsive)
- [ ] Optimiser les images (compression)
- [ ] Ajouter un favicon (icône du site)

## 🌐 Publier le Site

### Option 1 : Netlify (Gratuit et Simple)
1. Allez sur https://netlify.com
2. Créez un compte gratuit
3. Glissez-déposez votre dossier
4. Votre site est en ligne !

### Option 2 : GitHub Pages (Gratuit)
1. Créez un compte GitHub
2. Créez un nouveau repository
3. Uploadez vos fichiers
4. Activez GitHub Pages dans les paramètres

### Option 3 : Hébergement traditionnel
Uploadez tous les fichiers via FTP chez votre hébergeur.

---

**Besoin d'aide ?** N'hésitez pas à demander de l'assistance pour toute personnalisation ! 💝
