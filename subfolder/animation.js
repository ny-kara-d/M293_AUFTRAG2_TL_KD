// Warte, bis das HTML-Dokument vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {
    console.log("Animation.js geladen!"); // Test: Siehst du das in der Konsole?
    
    // Wähle alle h2 und h3 Elemente aus
    const titles = document.querySelectorAll('h2, h3');
    console.log("Gefundene Titel:", titles.length); // Wie viele Titel wurden gefunden?
    
    // Für jede gefundene Überschrift...
    titles.forEach(function(title) {
        try {
            // Text mit splitText aufteilen
            const split = anime.splitText(title, {
                chars: true,
                words: true,
                wrapper: true 
            });
            
            console.log("Split erfolgreich für:", title.textContent);
            
            // Animation erstellen (einfache Version ohne Timeline)
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
