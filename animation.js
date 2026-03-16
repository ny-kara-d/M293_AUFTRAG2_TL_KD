// NUR JAVASCRIPT, KEIN CSS HIER!
document.addEventListener('DOMContentLoaded', function() {
    console.log("Animation.js geladen!");
    
    const titles = document.querySelectorAll('h2, h3');
    console.log("Gefundene Titel:", titles.length);
    
    titles.forEach(function(title) {
        try {
            const split = anime.splitText(title, {
                chars: true,
                words: true,
                wrapper: true 
            });
            
            console.log("Split erfolgreich für:", title.textContent);
            
            anime.createAnimation({
                targets: split.chars,
                scale: [1, 1.2, 1],
                color: ['currentColor', '#ff6b6b', 'currentColor'],
                rotate: ['0deg', '5deg', '-5deg', '0deg'],
                duration: 2000,
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutQuad'
            });
        } catch(error) {
            console.error("Fehler bei Titel:", title.textContent, error);
        }
    });
});