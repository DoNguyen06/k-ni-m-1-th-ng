// Phase 1: Movie Ticket Envelope
const envelope1 = document.getElementById('envelope1');
const envelopeContainer1 = document.getElementById('envelopeContainer1');
const ticketContainer1 = document.getElementById('ticketContainer1');
const nextBtn1 = document.getElementById('nextBtn1');

envelope1.addEventListener('click', function() {
    if (!this.classList.contains('open')) {
        this.classList.add('open');
        
        // Hide envelope and show ticket after animation
        setTimeout(() => {
            envelopeContainer1.style.display = 'none';
            ticketContainer1.style.display = 'flex';
            nextBtn1.style.display = 'block';
        }, 600);
    }
});

// Phase 2: Love Letter Envelope
const envelope2 = document.getElementById('envelope2');
const envelopeContainer2 = document.getElementById('envelopeContainer2');
const letterContainer1 = document.getElementById('letterContainer1');
const finishBtn = document.getElementById('finishBtn');

envelope2.addEventListener('click', function() {
    if (!this.classList.contains('open')) {
        this.classList.add('open');
        
        // Hide envelope and show letter after animation
        setTimeout(() => {
            envelopeContainer2.style.display = 'none';
            letterContainer1.style.display = 'flex';
            finishBtn.style.display = 'block';
        }, 600);
    }
});

// Navigation between phases
nextBtn1.addEventListener('click', function() {
    const phase1 = document.getElementById('phase1');
    const phase2 = document.getElementById('phase2');
    
    phase1.classList.remove('active');
    phase2.classList.add('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Finish button
finishBtn.addEventListener('click', function() {
    const phase2 = document.getElementById('phase2');
    const completion = document.getElementById('completion');
    
    phase2.classList.remove('active');
    completion.classList.add('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add some sparkle effects
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add sparkle effect on click for envelopes
envelope1.addEventListener('click', function(e) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const offsetX = (Math.random() - 0.5) * 100;
            const offsetY = (Math.random() - 0.5) * 100;
            createSparkle(e.clientX + offsetX, e.clientY + offsetY);
        }, i * 100);
    }
});

envelope2.addEventListener('click', function(e) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const offsetX = (Math.random() - 0.5) * 100;
            const offsetY = (Math.random() - 0.5) * 100;
            createSparkle(e.clientX + offsetX, e.clientY + offsetY);
        }, i * 100);
    }
});

// Add sparkle styles dynamically
const style = document.createElement('style');
style.textContent = `
    .sparkle {
        position: fixed;
        width: 10px;
        height: 10px;
        background: radial-gradient(circle, #ff6b6b, transparent);
        border-radius: 50%;
        pointer-events: none;
        animation: sparkle 1s ease-out forwards;
    }
    
    @keyframes sparkle {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
