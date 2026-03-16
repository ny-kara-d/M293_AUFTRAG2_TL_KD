// Warte, bis das HTML-Dokument vollständig geladen ist
document.addEventListener('DOMContentLoaded', () => {
  // Wähle alle h2 und h3 Elemente aus, die animiert werden sollen
  // Passe den Selektor an, falls du nur bestimmte Überschriften animieren willst
  const titles = document.querySelectorAll('h2, h3');

  // Für jede gefundene Überschrift...
  titles.forEach(title => {
    // Die splitText-Funktion von Anime.js anwenden
    // Sie zerlegt den Text in einzelne Buchstaben (chars) und Wörter (words)
    const split = anime.splitText(title, {
      chars: true,      // Zerlege in Buchstaben
      words: true,      // Zerlege in Wörter (optional, für komplexere Effekte)
      // Die Eigenschaft 'wrapper' ist wichtig: Sie sagt splitText, wie es die neuen Elemente verpacken soll.
      // Einfach 'wrapper: true' erstellt eine unsichtbare Hülle um die originalen Titel.
      // Das ist gut für die Barrierefreiheit.
      wrapper: true 
    });

    // Greife auf die zerlegten Buchstaben zu
    const chars = split.chars;

    // Erstelle eine Animation für die Buchstaben
    anime.createTimeline({
      loop: true,                // Die Animation soll sich wiederholen
      direction: 'alternate',    // Sie soll vor- und zurücklaufen
      duration: 2000,            // Gesamtdauer eines Durchlaufs in Millisekunden
      easing: 'easeInOutQuad',   // Eine sanfte Beschleunigungskurve
      autoplay: true             // Automatisch starten
    })
    .add(chars, {                 // Füge die Buchstaben zur Timeline hinzu
      // Eigenschaften, die animiert werden sollen
      scale: 1.2,                 // Buchstaben werden auf 120% vergrößert
      color: '#ff6b6b',           // Sie ändern ihre Farbe zu einem Hellrot (passe sie an!)
      rotate: '5deg',             // Eine kleine Drehung
    }, 0)                         // Starte die Animation sofort (bei Position 0)
    .add(chars, {                 // Zweite Animation in der gleichen Timeline
      scale: 1.0,                 // Zurück zur Normalgröße
      color: 'currentColor',      // Zurück zur ursprünglichen Farbe
      rotate: '-5deg',            // Leichte Drehung in die andere Richtung
    }, 1000);                      // Starte diese Phase nach 1000ms (1 Sekunde)

    // --- Einfacherer Einstieg: Nur eine einfache, sich wiederholende Animation ---
    // Wenn dir die Timeline zu kompliziert ist, probiere diese einfachere Variante:
    /*
    anime.createAnimation({
      targets: chars,              // Die Buchstaben als Ziel
      scale: [1, 1.2, 1],          // Von 1 auf 1.2 zurück auf 1
      color: ['currentColor', '#ff6b6b', 'currentColor'], // Farbwechsel
      duration: 2000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuad'
    });
    */
  });
});
