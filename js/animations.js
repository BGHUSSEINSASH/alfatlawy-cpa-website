/* ===== alfatlawy Co – Motion & 3D Animation Engine v1.0 ===== */
/* Scroll animations, parallax, tilt, particles, 3D interactions */

(function () {
    'use strict';

    // ───────── Intersection Observer – Scroll Reveal ─────────
    const animObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim-visible');
                // Also trigger existing fade-in
                if (entry.target.classList.contains('fade-in')) {
                    entry.target.classList.add('visible');
                }
                animObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    function initScrollAnimations() {
        // Animate existing fade-in elements with stagger
        document.querySelectorAll('.fade-in').forEach((el, i) => {
            if (!el.classList.contains('anim-ready')) {
                el.classList.add('anim-ready', 'anim-up');
                // Stagger within parent
                const parent = el.parentElement;
                if (parent) {
                    const siblings = Array.from(parent.children).filter(c => c.classList.contains('fade-in'));
                    const idx = siblings.indexOf(el);
                    if (idx > 0 && idx <= 8) {
                        el.classList.add('anim-delay-' + idx);
                    }
                }
            }
            animObserver.observe(el);
        });

        // Animate anim-ready elements
        document.querySelectorAll('.anim-ready:not(.fade-in)').forEach(el => {
            animObserver.observe(el);
        });

        // Animate illust-containers
        document.querySelectorAll('.illust-container').forEach(el => {
            animObserver.observe(el);
        });

        // Animate svg-illustration
        document.querySelectorAll('.svg-illustration').forEach(el => {
            animObserver.observe(el);
        });
    }

    // ───────── 3D Tilt Effect on Cards ─────────
    function initTiltEffect() {
        const tiltElements = document.querySelectorAll('.service-card, .team-card, .value-card, .benefit-card, .stat-item');
        
        tiltElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / centerY * -8;
                const rotateY = (x - centerX) / centerX * 8;
                el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = '';
            });
        });
    }

    // ───────── Parallax on Mouse Move ─────────
    function initParallax() {
        const parallaxSections = document.querySelectorAll('.hero, .cta, .page-hero');
        
        parallaxSections.forEach(section => {
            const shapes = section.querySelectorAll('.floating-3d-object, .shape, .morph-blob');
            
            section.addEventListener('mousemove', (e) => {
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                const rect = section.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                shapes.forEach((shape, i) => {
                    const depth = (i + 1) * 15;
                    const moveX = x * depth;
                    const moveY = y * depth;
                    shape.style.transform = `translate(${moveX}px, ${moveY}px) ${shape.dataset.baseTransform || ''}`;
                });
            });
        });
    }

    // ───────── Particle System Generator ─────────
    function createParticleSystem(container, count, type) {
        if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const frag = document.createDocumentFragment();
        
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = `particle particle-${type}`;
            const size = Math.random() * 6 + 2;
            p.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${Math.random() * 100}%;
                bottom: ${Math.random() * 20 - 10}%;
                animation-duration: ${Math.random() * 8 + 6}s;
                animation-delay: ${Math.random() * 5}s;
            `;
            frag.appendChild(p);
        }
        container.appendChild(frag);
    }

    // ───────── Generate 3D Objects ─────────
    function createCube(className) {
        const cube = document.createElement('div');
        cube.className = `floating-3d-object cube-3d ${className || ''}`;
        cube.innerHTML = `
            <div class="face face-front"></div>
            <div class="face face-back"></div>
            <div class="face face-right"></div>
            <div class="face face-left"></div>
            <div class="face face-top"></div>
            <div class="face face-bottom"></div>
        `;
        return cube;
    }

    function createSphere(className) {
        const sphere = document.createElement('div');
        sphere.className = `floating-3d-object sphere-3d ${className || ''}`;
        return sphere;
    }

    function createRing(className) {
        const ring = document.createElement('div');
        ring.className = `floating-3d-object ring-3d ${className || ''}`;
        return ring;
    }

    function createDiamond(className) {
        const d = document.createElement('div');
        d.className = `floating-3d-object diamond-3d ${className || ''}`;
        return d;
    }

    function createPrism() {
        const prism = document.createElement('div');
        prism.className = 'floating-3d-object prism-3d';
        prism.innerHTML = '<div class="prism-face"></div><div class="prism-face"></div><div class="prism-face"></div>';
        return prism;
    }

    function createMorphBlob(type, size, top, left) {
        const blob = document.createElement('div');
        blob.className = `morph-blob morph-blob-${type}`;
        blob.style.cssText = `width:${size}px;height:${size}px;top:${top};left:${left};`;
        return blob;
    }

    // ───────── Inject 3D Objects into Hero ─────────
    function initHero3D() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const scene = document.createElement('div');
        scene.className = 'hero-3d-scene';

        // 3D objects
        const cube1 = createCube('cube-gold');
        cube1.style.cssText = 'top:15%;left:6%;opacity:0.5;';
        cube1.style.animationDuration = '18s';

        const sphere1 = createSphere('sphere-gold sphere-lg');
        sphere1.style.cssText = 'top:20%;right:8%;opacity:0.4;';

        const ring1 = createRing('ring-lg');
        ring1.style.cssText = 'bottom:25%;left:4%;opacity:0.35;';
        ring1.style.animationDuration = '25s';

        const prism1 = createPrism();
        prism1.style.cssText = 'bottom:18%;right:6%;opacity:0.4;';

        const diamond1 = createDiamond();
        diamond1.style.cssText = 'top:50%;left:15%;opacity:0.35;';

        const sphere2 = createSphere('sphere-sm');
        sphere2.style.cssText = 'top:35%;right:20%;opacity:0.3;';
        sphere2.style.animationDelay = '-4s';

        const cube2 = createCube('cube-lg');
        cube2.style.cssText = 'bottom:35%;right:15%;opacity:0.25;';
        cube2.style.animationDuration = '22s';
        cube2.style.animationDirection = 'reverse';

        scene.append(cube1, sphere1, ring1, prism1, diamond1, sphere2, cube2);

        // Morph blobs
        scene.appendChild(createMorphBlob('accent', 350, '10%', '-5%'));
        scene.appendChild(createMorphBlob('gold', 280, '60%', '75%'));

        hero.insertBefore(scene, hero.firstChild);

        // Particles for hero
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-system';
        hero.appendChild(particleContainer);
        createParticleSystem(particleContainer, 20, 'white');
    }

    // ───────── Inject 3D into Stats Section ─────────
    function initStats3D() {
        const stats = document.querySelector('.stats');
        if (!stats) return;

        const wrap = document.createElement('div');
        wrap.className = 'stats-3d-wrap';

        const cube = createCube('cube-gold');
        cube.style.cssText = 'top:10%;left:5%;opacity:0.2;';
        cube.style.animationDuration = '20s';

        const sphere = createSphere('sphere-sm');
        sphere.style.cssText = 'bottom:15%;right:8%;opacity:0.2;';

        wrap.append(cube, sphere);
        wrap.appendChild(createMorphBlob('gold', 200, '20%', '80%'));

        stats.style.position = 'relative';
        stats.insertBefore(wrap, stats.firstChild);
    }

    // ───────── Inject 3D into About Section ─────────
    function initAbout3D() {
        const about = document.querySelector('.about-preview, .about-grid');
        if (!about) return;

        const section = about.closest('section') || about;
        section.style.position = 'relative';
        section.style.overflow = 'hidden';

        // Add floating shapes
        const shapes = document.createElement('div');
        shapes.className = 'services-3d-shapes';
        shapes.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:0;overflow:hidden;';

        const ring = createRing();
        ring.style.cssText = 'top:10%;right:5%;opacity:0.15;';
        ring.style.animationDuration = '35s';

        const diamond = createDiamond();
        diamond.style.cssText = 'bottom:15%;left:8%;opacity:0.2;';

        shapes.append(ring, diamond);
        shapes.appendChild(createMorphBlob('accent', 250, '60%', '-5%'));
        shapes.appendChild(createMorphBlob('gold', 200, '-5%', '70%'));

        section.insertBefore(shapes, section.firstChild);
    }

    // ───────── Inject 3D into Services Section ─────────
    function initServices3D() {
        const services = document.querySelector('.services-preview');
        if (!services) return;

        services.style.position = 'relative';
        services.style.overflow = 'hidden';

        const shapes = document.createElement('div');
        shapes.className = 'services-3d-shapes';

        const cube = createCube('cube-gold');
        cube.style.cssText = 'top:8%;right:3%;opacity:0.2;';
        cube.style.animationDuration = '16s';

        const sphere = createSphere('sphere-gold sphere-sm');
        sphere.style.cssText = 'bottom:12%;left:5%;opacity:0.2;';

        const ring = createRing();
        ring.style.cssText = 'top:50%;left:2%;opacity:0.12;';
        ring.style.animationDuration = '30s';

        shapes.append(cube, sphere, ring);
        shapes.appendChild(createMorphBlob('primary', 300, '30%', '85%'));
        shapes.appendChild(createMorphBlob('accent', 220, '70%', '-3%'));

        services.insertBefore(shapes, services.firstChild);
    }

    // ───────── Inject 3D into Team Section ─────────
    function initTeam3D() {
        const team = document.querySelector('.team-preview, .team-section');
        if (!team) return;

        team.style.position = 'relative';
        team.style.overflow = 'hidden';

        const shapes = document.createElement('div');
        shapes.className = 'services-3d-shapes';

        const prism = createPrism();
        prism.style.cssText = 'top:10%;left:5%;opacity:0.2;';

        const sphere = createSphere('sphere-sm');
        sphere.style.cssText = 'bottom:5%;right:8%;opacity:0.15;';

        shapes.append(prism, sphere);
        shapes.appendChild(createMorphBlob('gold', 180, '15%', '80%'));

        team.insertBefore(shapes, team.firstChild);
    }

    // ───────── Inject 3D into App Section ─────────
    function initApp3D() {
        const app = document.querySelector('.app-section');
        if (!app) return;

        app.style.position = 'relative';
        app.style.overflow = 'hidden';

        const shapes = document.createElement('div');
        shapes.className = 'services-3d-shapes';

        const cube = createCube();
        cube.style.cssText = 'top:15%;right:5%;opacity:0.15;';
        cube.style.animationDuration = '14s';

        const diamond = createDiamond();
        diamond.style.cssText = 'bottom:20%;left:3%;opacity:0.2;';

        shapes.append(cube, diamond);
        shapes.appendChild(createMorphBlob('accent', 250, '40%', '90%'));

        app.insertBefore(shapes, app.firstChild);
    }

    // ───────── Inject 3D into CTA Section ─────────
    function initCTA3D() {
        const cta = document.querySelector('.cta');
        if (!cta) return;

        const scene = document.createElement('div');
        scene.className = 'cta-3d-shapes';

        const sphere = createSphere('sphere-gold');
        sphere.style.cssText = 'top:15%;left:5%;opacity:0.3;';

        const cube = createCube('cube-gold cube-lg');
        cube.style.cssText = 'bottom:10%;right:5%;opacity:0.25;';
        cube.style.animationDuration = '20s';

        const ring = createRing();
        ring.style.cssText = 'top:40%;right:10%;opacity:0.2;';
        ring.style.animationDuration = '25s';

        scene.append(sphere, cube, ring);
        cta.insertBefore(scene, cta.firstChild);

        // Particles
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-system';
        cta.appendChild(particleContainer);
        createParticleSystem(particleContainer, 15, 'white');
    }

    // ───────── Footer Particles ─────────
    function initFooter3D() {
        const footer = document.getElementById('colophon');
        if (!footer) return;

        const particles = document.createElement('div');
        particles.className = 'footer-particles';
        footer.insertBefore(particles, footer.firstChild);
        createParticleSystem(particles, 10, 'white');
    }

    // ───────── Page Hero 3D (inner pages) ─────────
    function initPageHero3D() {
        const pageHero = document.querySelector('.page-hero');
        if (!pageHero) return;

        const shapes = document.createElement('div');
        shapes.className = 'hero-3d-shapes';

        const cube = createCube('cube-gold');
        cube.style.cssText = 'top:20%;left:8%;opacity:0.35;';
        cube.style.animationDuration = '14s';

        const sphere = createSphere('sphere-sm sphere-gold');
        sphere.style.cssText = 'bottom:20%;right:10%;opacity:0.3;';
        sphere.style.animationDelay = '-3s';

        const ring = createRing();
        ring.style.cssText = 'top:30%;right:5%;opacity:0.2;';
        ring.style.animationDuration = '22s';

        shapes.append(cube, sphere, ring);
        pageHero.insertBefore(shapes, pageHero.firstChild);
    }

    // ───────── SVG Animated Illustrations ─────────
    function injectSVGIllustrations() {
        // About section illustration
        injectAboutIllustration();
        // Services section – floating icons
        injectServicesIllustrations();
        // Stats section – animated chart SVG
        injectStatsIllustration();
        // Team section – connection lines
        injectTeamIllustration();
        // Partnership section
        injectPartnerIllustration();
        // Contact section
        injectContactIllustration();
    }

    function injectAboutIllustration() {
        const aboutImg = document.querySelector('.about-preview .about-img, .about-grid .about-img');
        if (!aboutImg) return;

        const illust = document.createElement('div');
        illust.className = 'illust-container anim-ready anim-scale';
        illust.innerHTML = `
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Building 3D Isometric -->
                <g transform="translate(100, 50)">
                    <!-- Base platform -->
                    <path class="line-draw" d="M100 280 L200 330 L300 280 L200 230 Z" stroke="#d4a843" stroke-width="2" fill="rgba(212,168,67,0.08)"/>
                    <!-- Building body -->
                    <path class="line-draw" d="M120 270 L120 140 L200 100 L280 140 L280 270 L200 310 Z" stroke="#c8102e" stroke-width="2" fill="rgba(200,16,46,0.05)"/>
                    <!-- Building front -->
                    <path class="line-draw" d="M120 270 L200 310 L200 180 L120 140 Z" stroke="#c8102e" stroke-width="1.5" fill="rgba(200,16,46,0.08)"/>
                    <!-- Building side -->
                    <path class="line-draw" d="M200 310 L280 270 L280 140 L200 180 Z" stroke="#1a1f36" stroke-width="1.5" fill="rgba(26,31,54,0.06)"/>
                    <!-- Windows row 1 -->
                    <rect class="fill-reveal" x="140" y="170" width="20" height="25" rx="2" fill="rgba(212,168,67,0.25)" transform="skewY(27)"/>
                    <rect class="fill-reveal" x="170" y="155" width="20" height="25" rx="2" fill="rgba(212,168,67,0.25)" transform="skewY(27)"/>
                    <!-- Windows row 2 -->
                    <rect class="fill-reveal" x="140" y="210" width="20" height="25" rx="2" fill="rgba(212,168,67,0.3)" transform="skewY(27)"/>
                    <rect class="fill-reveal" x="170" y="195" width="20" height="25" rx="2" fill="rgba(212,168,67,0.3)" transform="skewY(27)"/>
                    <!-- Door -->
                    <path class="fill-reveal" d="M155 270 L155 245 L175 235 L175 260 Z" fill="rgba(200,16,46,0.2)"/>
                    <!-- Roof detail -->
                    <path class="line-draw" d="M120 140 L200 100 L280 140" stroke="#d4a843" stroke-width="2.5" stroke-linecap="round"/>
                </g>
                <!-- Decorative circles -->
                <circle class="line-draw" cx="60" cy="80" r="30" stroke="rgba(200,16,46,0.15)" stroke-width="1"/>
                <circle class="line-draw" cx="340" cy="100" r="20" stroke="rgba(212,168,67,0.2)" stroke-width="1"/>
                <circle class="fill-reveal" cx="55" cy="320" r="8" fill="rgba(200,16,46,0.15)"/>
                <circle class="fill-reveal" cx="350" cy="300" r="5" fill="rgba(212,168,67,0.2)"/>
                <!-- Floating lines -->
                <line class="line-draw" x1="30" y1="200" x2="80" y2="180" stroke="rgba(200,16,46,0.1)" stroke-width="1.5"/>
                <line class="line-draw" x1="320" y1="220" x2="370" y2="200" stroke="rgba(212,168,67,0.1)" stroke-width="1.5"/>
            </svg>
        `;
        aboutImg.parentElement.insertBefore(illust, aboutImg);
        illust.style.position = 'absolute';
        illust.style.top = '-20px';
        illust.style.right = '-20px';
        illust.style.width = '200px';
        illust.style.zIndex = '3';
        illust.style.pointerEvents = 'none';
        aboutImg.parentElement.style.position = 'relative';
    }

    function injectServicesIllustrations() {
        const servicesPreview = document.querySelector('.services-preview .services-grid, .services-section .services-detail-grid');
        if (!servicesPreview) return;

        // Inject animated SVG decoration above services grid
        const decoration = document.createElement('div');
        decoration.className = 'svg-illustration anim-ready anim-up';
        decoration.style.cssText = 'position:absolute;top:-30px;right:20px;width:140px;pointer-events:none;z-index:1;opacity:0.6;';
        decoration.innerHTML = `
            <svg viewBox="0 0 150 150" fill="none">
                <circle class="svg-draw" cx="75" cy="75" r="60" stroke="#d4a843" stroke-width="1.5" stroke-dasharray="6 4"/>
                <path class="svg-draw" d="M75 20 L75 130 M20 75 L130 75" stroke="rgba(200,16,46,0.2)" stroke-width="1"/>
                <circle class="svg-draw" cx="75" cy="75" r="35" stroke="rgba(200,16,46,0.15)" stroke-width="1"/>
                <circle cx="75" cy="20" r="4" fill="rgba(212,168,67,0.5)">
                    <animateTransform attributeName="transform" type="rotate" from="0 75 75" to="360 75 75" dur="10s" repeatCount="indefinite"/>
                </circle>
                <circle cx="75" cy="40" r="3" fill="rgba(200,16,46,0.4)">
                    <animateTransform attributeName="transform" type="rotate" from="0 75 75" to="-360 75 75" dur="8s" repeatCount="indefinite"/>
                </circle>
            </svg>
        `;
        const parent = servicesPreview.parentElement;
        if (parent) {
            parent.style.position = 'relative';
            parent.insertBefore(decoration, servicesPreview);
        }
    }

    function injectStatsIllustration() {
        const stats = document.querySelector('.stats');
        if (!stats) return;

        const illust = document.createElement('div');
        illust.className = 'svg-illustration';
        illust.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:90%;max-width:800px;pointer-events:none;z-index:0;opacity:0.08;';
        illust.innerHTML = `
            <svg viewBox="0 0 800 200" fill="none">
                <!-- Animated chart lines -->
                <polyline class="svg-draw" points="0,180 100,140 200,160 300,80 400,100 500,40 600,70 700,20 800,60" stroke="#d4a843" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline class="svg-draw" points="0,190 100,170 200,180 300,120 400,150 500,90 600,110 700,60 800,80" stroke="#c8102e" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="8 4"/>
            </svg>
        `;
        stats.style.position = 'relative';
        stats.insertBefore(illust, stats.firstChild);
    }

    function injectTeamIllustration() {
        const team = document.querySelector('.team-preview, .team-section');
        if (!team) return;

        const illust = document.createElement('div');
        illust.className = 'svg-illustration';
        illust.style.cssText = 'position:absolute;top:50%;right:0;transform:translateY(-50%);width:200px;pointer-events:none;z-index:0;opacity:0.1;';
        illust.innerHTML = `
            <svg viewBox="0 0 200 300" fill="none">
                <!-- Connection network -->
                <circle cx="100" cy="50" r="20" stroke="#c8102e" stroke-width="1.5" fill="none"/>
                <circle cx="40" cy="150" r="15" stroke="#d4a843" stroke-width="1.5" fill="none"/>
                <circle cx="160" cy="150" r="15" stroke="#d4a843" stroke-width="1.5" fill="none"/>
                <circle cx="100" cy="250" r="18" stroke="#c8102e" stroke-width="1.5" fill="none"/>
                <line x1="100" y1="70" x2="40" y2="135" stroke="rgba(200,16,46,0.2)" stroke-width="1"/>
                <line x1="100" y1="70" x2="160" y2="135" stroke="rgba(200,16,46,0.2)" stroke-width="1"/>
                <line x1="40" y1="165" x2="100" y2="232" stroke="rgba(212,168,67,0.2)" stroke-width="1"/>
                <line x1="160" y1="165" x2="100" y2="232" stroke="rgba(212,168,67,0.2)" stroke-width="1"/>
                <!-- Animated dots -->
                <circle r="3" fill="#c8102e" opacity="0.5">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M100,70 L40,135"/>
                </circle>
                <circle r="3" fill="#d4a843" opacity="0.5">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M100,70 L160,135"/>
                </circle>
            </svg>
        `;
        team.style.position = 'relative';
        team.appendChild(illust);
    }

    function injectPartnerIllustration() {
        const partner = document.querySelector('.partner-showcase, .partnership-intro');
        if (!partner) return;

        const section = partner.closest('section') || partner;
        section.style.position = 'relative';
        section.style.overflow = 'hidden';

        const shapes = document.createElement('div');
        shapes.className = 'services-3d-shapes';

        const ring = createRing('ring-lg');
        ring.style.cssText = 'top:10%;left:3%;opacity:0.12;';
        ring.style.animationDuration = '30s';

        const cube = createCube('cube-gold');
        cube.style.cssText = 'bottom:10%;right:5%;opacity:0.15;';
        cube.style.animationDuration = '18s';

        shapes.append(ring, cube);
        shapes.appendChild(createMorphBlob('gold', 200, '40%', '85%'));

        section.insertBefore(shapes, section.firstChild);
    }

    function injectContactIllustration() {
        const contact = document.querySelector('.contact-section, .contact-layout');
        if (!contact) return;

        const section = contact.closest('section') || contact;
        section.style.position = 'relative';
        section.style.overflow = 'hidden';

        const shapes = document.createElement('div');
        shapes.className = 'services-3d-shapes';

        const sphere = createSphere('sphere-gold sphere-sm');
        sphere.style.cssText = 'top:15%;right:5%;opacity:0.2;';

        const diamond = createDiamond();
        diamond.style.cssText = 'bottom:10%;left:5%;opacity:0.15;';

        shapes.append(sphere, diamond);
        shapes.appendChild(createMorphBlob('accent', 180, '50%', '90%'));

        section.insertBefore(shapes, section.firstChild);
    }

    // ───────── Enhanced Counter Animation ─────────
    function initCounterAnimation() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        if (!counters.length) return;

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count'));
                    animateCounter(el, target);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => counterObserver.observe(c));
    }

    function animateCounter(el, target) {
        const duration = 2000;
        const startTime = performance.now();
        const start = 0;

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * eased);
            el.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target;
                // Add a little bounce effect
                el.style.transform = 'scale(1.15)';
                setTimeout(() => { el.style.transform = 'scale(1)'; }, 200);
            }
        }
        requestAnimationFrame(update);
    }

    // ───────── Animated Section Dividers ─────────
    function initAnimatedDividers() {
        document.querySelectorAll('.section-divider').forEach(divider => {
            divider.style.transition = 'width 1s var(--ease-out), opacity 1s var(--ease-out)';
            divider.style.width = '0px';
            divider.style.opacity = '0';

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.width = '50px';
                        entry.target.style.opacity = '1';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(divider);
        });
    }

    // ───────── Magnetic Button Effect ─────────
    function initMagneticButtons() {
        document.querySelectorAll('.btn-primary, .btn-glass').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }

    // ───────── Smooth Reveal for Images ─────────
    function initImageReveal() {
        document.querySelectorAll('.about-img img, .service-card-img, .team-img-wrap img, .timeline-img img, .value-card-img-wrap img, .office-gallery img, .scope-img img').forEach(img => {
            img.style.transition = 'transform 0.8s var(--ease-out), filter 0.8s var(--ease-out)';
            img.style.filter = 'grayscale(20%)';

            img.addEventListener('mouseenter', () => {
                img.style.filter = 'grayscale(0%)';
            });
            img.addEventListener('mouseleave', () => {
                img.style.filter = 'grayscale(20%)';
            });
        });
    }

    // ───────── Animated Background for Alt Sections ─────────
    function initAltBgAnimations() {
        document.querySelectorAll('.alt-bg').forEach(section => {
            const dots = document.createElement('div');
            dots.className = 'dots-grid';
            section.style.position = 'relative';
            section.style.overflow = 'hidden';
            section.insertBefore(dots, section.firstChild);
        });
    }

    // ───────── Section Parallax (slight) ─────────
    function initSectionParallax() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    // Parallax on hero bg
                    const heroBg = document.querySelector('.hero-bg-img');
                    if (heroBg) {
                        heroBg.style.transform = `translateY(${scrollY * 0.25}px) scale(1.1)`;
                    }
                    // Parallax on stats bg
                    const statsBg = document.querySelector('.stats-bg-img');
                    if (statsBg) {
                        const statsTop = statsBg.closest('.stats')?.offsetTop || 0;
                        const diff = scrollY - statsTop;
                        statsBg.style.transform = `translateY(${diff * 0.15}px) scale(1.1)`;
                    }
                    // CTA bg
                    const ctaBg = document.querySelector('.cta-bg-img');
                    if (ctaBg) {
                        const ctaTop = ctaBg.closest('.cta')?.offsetTop || 0;
                        const diff = scrollY - ctaTop;
                        ctaBg.style.transform = `translateY(${diff * 0.15}px) scale(1.1)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // ───────── Timeline Animation ─────────
    function initTimelineAnimation() {
        const items = document.querySelectorAll('.timeline-item');
        if (!items.length) return;

        items.forEach((item, i) => {
            item.classList.add('anim-ready');
            item.classList.add(i % 2 === 0 ? 'anim-left' : 'anim-right');
            if (i > 0) item.classList.add('anim-delay-' + Math.min(i, 4));
            animObserver.observe(item);
        });
    }

    // ───────── Service Detail Cards Animation ─────────
    function initServiceDetailAnim() {
        const details = document.querySelectorAll('.service-detail-card');
        details.forEach((card, i) => {
            card.classList.add('anim-ready', 'anim-up');
            card.classList.add('anim-delay-' + Math.min(i + 1, 6));
            animObserver.observe(card);
        });
    }

    // ───────── Team Members Stagger ─────────
    function initTeamMemberAnim() {
        const members = document.querySelectorAll('.member-card');
        members.forEach((card, i) => {
            card.classList.add('anim-ready', 'anim-scale');
            card.classList.add('anim-delay-' + Math.min((i % 3) + 1, 4));
            animObserver.observe(card);
        });
    }

    // ───────── Initialize Everything ─────────
    function init() {
        // Wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', bootstrap);
        } else {
            bootstrap();
        }
    }

    function bootstrap() {
        // Inject 3D objects
        initHero3D();
        initStats3D();
        initAbout3D();
        initServices3D();
        initTeam3D();
        initApp3D();
        initCTA3D();
        initFooter3D();
        initPageHero3D();

        // Inject SVG illustrations
        injectSVGIllustrations();

        // Init animations
        initScrollAnimations();
        initTiltEffect();
        initParallax();
        initCounterAnimation();
        initAnimatedDividers();
        initMagneticButtons();
        initImageReveal();
        initAltBgAnimations();
        initSectionParallax();
        initTimelineAnimation();
        initServiceDetailAnim();
        initTeamMemberAnim();
    }

    init();
})();
