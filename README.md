# 🧶 Créations Artisanales - Site Web

Un site web moderne, élégant et chaleureux pour présenter et vendre des créations artisanales en crochet et tricot.

## ✨ Caractéristiques

- **Design moderne et chaleureux** avec palette de couleurs naturelles
- **Responsive** - fonctionne parfaitement sur mobile, tablette et desktop
- **Galerie interactive** avec filtres par catégorie
- **Animations fluides** et effets de parallaxe
- **Formulaire de contact** intégré
- **SEO optimisé** avec métadonnées appropriées

## 🎨 Palette de Couleurs

- Crème : `#FAF7F2`
- Beige : `#E8DCC4`
- Sable : `#D4C5A9`
- Terracotta : `#C77D58`
- Sauge : `#9CAF88`
- Charbon : `#3D3D3D`

## 📁 Structure du Projet

```
CreationWeb/
├── index.html          # Page principale
├── index.css           # Styles et design system
├── script.js           # Interactivité et animations
├── README.md           # Ce fichier
└── images/             # Dossier pour vos images (à créer)
```

## 🖼️ Ajout de vos Images

Le site nécessite des images pour être complet. Créez un dossier `images/` et ajoutez vos photos :

### Images principales :
- `hero-image.jpg` - Image de fond pour la section hero (1920x1080px recommandé)
- `about-image.jpg` - Photo pour la section "À propos" (800x800px recommandé)

### Images de la galerie :
Pour chaque création dans la galerie, ajoutez une image (600x600px recommandé) :
- `bonnet1.jpg`, `bonnet2.jpg`, `bonnet3.jpg`
- `echarpe1.jpg`, `echarpe2.jpg`
- `plaid1.jpg`, `plaid2.jpg`
- `decoration1.jpg`
- `coussin1.jpg`
- `sac1.jpg`
- `mitaines1.jpg`
- `macrame1.jpg`

### Conseils pour les photos :
- Utilisez un bon éclairage naturel
- Fond neutre et épuré (beige, blanc cassé, lin)
- Photos nettes et de haute qualité
- Format carré ou paysage
- Optimisez les images pour le web (compression)

## 🚀 Lancement du Site

### Option 1 : Ouvrir directement
Double-cliquez sur `index.html` pour ouvrir le site dans votre navigateur.

### Option 2 : Serveur local (recommandé)
Pour un meilleur rendu, utilisez un serveur local :

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (si npx est installé)
npx serve

# Avec PHP
php -S localhost:8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

## 📝 Personnalisation

### Modifier les créations de la galerie
Éditez le fichier `script.js` et modifiez le tableau `galleryData` :

```javascript
const galleryData = [
    {
        id: 1,
        name: "Nom de votre création",
        category: "bonnets", // ou "echarpes", "plaids", "decorations", "accessoires"
        description: "Description de votre création",
        price: "35€",
        image: "nom-image.jpg"
    },
    // Ajoutez vos créations ici
];
```

### Modifier les informations de contact
Dans `index.html`, section `#contact`, modifiez :
- L'adresse email
- Le numéro WhatsApp
- Les liens des réseaux sociaux

### Modifier les couleurs
Dans `index.css`, modifiez les variables CSS dans `:root` :

```css
:root {
  --color-cream: #FAF7F2;
  --color-terracotta: #C77D58;
  /* etc. */
}
```

## 🛒 Évolution vers E-commerce

Le site est conçu pour évoluer facilement vers une boutique en ligne complète. Options :

1. **Intégration Stripe/PayPal** - Ajoutez un système de paiement
2. **WooCommerce** - Convertir en WordPress + WooCommerce
3. **Shopify** - Migrer vers Shopify pour une solution clé en main
4. **Etsy** - Lier les créations à une boutique Etsy existante

## 📱 Réseaux Sociaux

N'oubliez pas de :
- Créer une page Instagram pour vos créations
- Créer une page Facebook professionnelle
- Créer un compte Pinterest pour l'inspiration
- Mettre à jour les liens dans la section contact

## 🔧 Support Navigateurs

Le site fonctionne sur :
- Chrome/Edge (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Licence

Ce site est créé pour un usage personnel. Toutes les créations présentées sont protégées par le droit d'auteur.

## 💝 Fait avec amour

Chaque ligne de code a été écrite avec soin pour mettre en valeur vos magnifiques créations artisanales.

---

**Besoin d'aide ?** N'hésitez pas à me contacter pour toute question ou personnalisation supplémentaire !
