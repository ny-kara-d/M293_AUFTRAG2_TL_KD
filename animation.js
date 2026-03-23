document.addEventListener('DOMContentLoaded', function() {
    console.log("Animation.js geladen!");
    
    // Wähle alle h2 und h3 Elemente
    const titles = document.querySelectorAll('h2, h3');
    console.log("Gefundene Titel:", titles.length);
    
    if(titles.length === 0) {
        console.error("Keine h2/h3 Elemente gefunden!");
        return;
    }
    
    // Für jeden Titel
    titles.forEach(function(title, index) {
        // Speichere den Originaltext
        const originalText = title.textContent;
        
        // Erstelle einen Container für die Buchstaben
        const container = document.createElement('span');
        container.style.display = 'inline-block';
        
        // Leere den Titel und füge den Container ein
        title.innerHTML = '';
        title.appendChild(container);
        
        // Zerlege den Text in einzelne Buchstaben
        const chars = originalText.split('');
        const charElements = [];
        
        // Erstelle für jeden Buchstaben ein span-Element
        chars.forEach(function(char) {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            span.style.transition = 'all 0.3s ease';
            container.appendChild(span);
            charElements.push(span);
        });
        
        console.log(`Titel ${index} in ${charElements.length} Buchstaben zerlegt`);
        
        // Animation mit anime.js
        anime.createAnimation({
            targets: charElements,
            scale: [1, 1.3, 1],
            color: ['#ffffff', '#ff6b6b', '#ffffff'],
            rotate: ['0deg', '5deg', '-5deg', '0deg'],
            duration: 2000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad',
            delay: function(el, i) {
                return i * 50; // Gestaffelte Animation
            }
        });
    });
});