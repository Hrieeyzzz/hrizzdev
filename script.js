document.addEventListener('DOMContentLoaded', () => {
    // Custom Pixel Cursor
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
        // Pixel-perfect snapping (optional, but looks cool)
        // const x = Math.round(e.clientX / 4) * 4;
        // const y = Math.round(e.clientY / 4) * 4;
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Retro Typing Effect
    const typingText = document.getElementById('typing-text');
    const phrases = ["GAMES / SAMP / WEB CODER", "SYSTEM: Hrieeyzzz.lvl.99", "QUEST: INNOVATION", "READY PLAYER ONE"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.innerHTML = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.innerHTML = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();

    // Smooth scroll for retro links
    const navLinks = document.querySelectorAll('.nav-links a, .pixel-btn');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop - 120,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Flickering Effect for Retro feel
    const retroBox = document.querySelector('.retro-box');
    setInterval(() => {
        if (Math.random() < 0.05) {
            retroBox.style.opacity = '0.8';
            setTimeout(() => {
                retroBox.style.opacity = '1';
            }, 50);
        }
    }, 1000);

    // Interactive cursor scaling
    const interactiveElements = document.querySelectorAll('a, .pixel-card, button');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = '#ff00ff';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = '#00ffff';
        });
    });
});
