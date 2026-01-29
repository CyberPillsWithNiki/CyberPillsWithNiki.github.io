// Example: simple alert for demo
console.log("Portfolio loaded successfully!");

// You can later add interactivity, e.g., filter projects by type (Cyber / AI / Data)
const cards = document.querySelectorAll('.topic-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.style.transform = 'translateY(0)');
        card.style.transform = 'translateY(-15px)';
        card.style.boxShadow = '0 15px 25px rgba(88,166,255,0.5)';
    });
});
