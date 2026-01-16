// ============================================
// CRÉATIONS ARTISANALES - JAVASCRIPT
// ============================================

// Gallery data - Données des créations
const galleryData = [
    {
        id: 1,
        name: "Bonnet Douceur d'Hiver",
        category: "bonnets",
        description: "Bonnet chaud et moelleux en laine mérinos, parfait pour les journées d'hiver",
        price: "35€",
        image: "bonnet1.jpg"
    },
    {
        id: 2,
        name: "Écharpe Nuage Pastel",
        category: "echarpes",
        description: "Écharpe légère et douce aux couleurs pastel délicates",
        price: "45€",
        image: "echarpe1.jpg"
    },
    {
        id: 3,
        name: "Plaid Cocooning",
        category: "plaids",
        description: "Grand plaid épais pour des moments de détente chaleureux",
        price: "120€",
        image: "plaid1.jpg"
    },
    {
        id: 4,
        name: "Couronne Murale Bohème",
        category: "decorations",
        description: "Décoration murale en macramé pour une ambiance douce et naturelle",
        price: "55€",
        image: "decoration1.jpg"
    },
    {
        id: 5,
        name: "Bonnet Pompon Enfant",
        category: "bonnets",
        description: "Adorable bonnet avec pompon pour les petits, doux et confortable",
        price: "28€",
        image: "bonnet2.jpg"
    },
    {
        id: 6,
        name: "Sac Cabas Artisanal",
        category: "accessoires",
        description: "Sac cabas robuste et élégant, idéal pour le quotidien",
        price: "65€",
        image: "sac1.jpg"
    },
    {
        id: 7,
        name: "Écharpe Torsadée Classique",
        category: "echarpes",
        description: "Écharpe avec motif torsadé intemporel, chaude et élégante",
        price: "50€",
        image: "echarpe2.jpg"
    },
    {
        id: 8,
        name: "Coussin Décoratif Terracotta",
        category: "decorations",
        description: "Coussin aux tons chauds pour sublimer votre intérieur",
        price: "40€",
        image: "coussin1.jpg"
    },
    {
        id: 9,
        name: "Mitaines Confort",
        category: "accessoires",
        description: "Mitaines pratiques et chaudes, parfaites pour l'automne",
        price: "25€",
        image: "mitaines1.jpg"
    },
    {
        id: 10,
        name: "Plaid Bébé Tendresse",
        category: "plaids",
        description: "Petit plaid tout doux pour bébé, hypoallergénique",
        price: "60€",
        image: "plaid2.jpg"
    },
    {
        id: 11,
        name: "Bonnet Slouchy Moderne",
        category: "bonnets",
        description: "Bonnet oversize tendance, confortable et stylé",
        price: "38€",
        image: "bonnet3.jpg"
    },
    {
        id: 12,
        name: "Suspension Macramé",
        category: "decorations",
        description: "Suspension pour plantes en macramé, style bohème chic",
        price: "35€",
        image: "macrame1.jpg"
    }
];

// ============================================
// NAVIGATION
// ============================================

const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// GALLERY
// ============================================

const galleryGrid = document.getElementById('galleryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Render gallery items
function renderGallery(filter = 'tous') {
    galleryGrid.innerHTML = '';
    
    const filteredData = filter === 'tous' 
        ? galleryData 
        : galleryData.filter(item => item.category === filter);
    
    filteredData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in';
        galleryItem.style.animationDelay = `${index * 0.1}s`;
        
        galleryItem.innerHTML = `
            <div class="gallery-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="gallery-item-overlay">
                    <p style="color: white; font-weight: 500;">Cliquez pour en savoir plus</p>
                </div>
            </div>
            <div class="gallery-item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="gallery-item-price">${item.price}</div>
            </div>
        `;
        
        // Add click event to show more details
        galleryItem.addEventListener('click', () => {
            showItemDetails(item);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter gallery
        const filter = btn.getAttribute('data-filter');
        renderGallery(filter);
    });
});

// Show item details (simple alert for now - can be enhanced with a modal)
function showItemDetails(item) {
    const message = `
${item.name}

${item.description}

Prix: ${item.price}

Pour commander cette création, contactez-moi via le formulaire de contact ou par WhatsApp !
    `;
    
    alert(message);
}

// Initial gallery render
renderGallery();

// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Here you would normally send the data to a server
    // For now, we'll just show a success message
    
    alert(`Merci ${formData.name} ! Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais. 💝`);
    
    // Reset form
    contactForm.reset();
});

// ============================================
// INTERSECTION OBSERVER - Animations on scroll
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// ============================================
// DYNAMIC IMAGE LOADING
// ============================================

// Function to generate placeholder images if actual images don't exist
function handleImageError(img) {
    img.style.background = 'linear-gradient(135deg, #E8DCC4, #D4C5A9)';
    img.style.display = 'flex';
    img.style.alignItems = 'center';
    img.style.justifyContent = 'center';
    img.innerHTML = '<span style="font-size: 3rem;">🧶</span>';
}

// Add error handling to all images
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            handleImageError(img.parentElement);
        });
    });
});

// ============================================
// HERO IMAGE PARALLAX EFFECT
// ============================================

window.addEventListener('scroll', () => {
    const heroImage = document.getElementById('heroImage');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// LOADING ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add debounced scroll listener
const debouncedScroll = debounce(() => {
    // Additional scroll-based animations can be added here
}, 100);

window.addEventListener('scroll', debouncedScroll);

console.log('✨ Créations Artisanales - Site chargé avec succès !');
