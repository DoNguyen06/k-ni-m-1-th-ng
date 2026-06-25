// Phase 1: Fog Overlay with Canvas Brushing
const fogOverlay = document.getElementById('fogOverlay');
const fogCanvas = document.getElementById('fogCanvas');
const ctx = fogCanvas.getContext('2d');

let isDrawing = false;
let clearedPercentage = 0;

// Set canvas size
function resizeCanvas() {
    fogCanvas.width = window.innerWidth;
    fogCanvas.height = window.innerHeight;
    drawFog();
}

// Draw fog with branches/dust particles
function drawFog() {
    ctx.fillStyle = 'rgba(26, 26, 46, 0.95)';
    ctx.fillRect(0, 0, fogCanvas.width, fogCanvas.height);
    
    // Draw branches/dust particles
    for (let i = 0; i < 200; i++) {
        const x = Math.random() * fogCanvas.width;
        const y = Math.random() * fogCanvas.height;
        const size = Math.random() * 30 + 10;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 100, 120, ${Math.random() * 0.3 + 0.1})`;
        ctx.fill();
    }
    
    // Draw some branch-like shapes
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * fogCanvas.width;
        const y = Math.random() * fogCanvas.height;
        const length = Math.random() * 100 + 50;
        const angle = Math.random() * Math.PI * 2;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
        ctx.strokeStyle = `rgba(80, 80, 100, ${Math.random() * 0.2 + 0.1})`;
        ctx.lineWidth = Math.random() * 3 + 1;
        ctx.stroke();
    }
}

// Brush away fog
function brushFog(x, y) {
    const brushSize = 80;
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    
    // Calculate cleared percentage
    const imageData = ctx.getImageData(0, 0, fogCanvas.width, fogCanvas.height);
    let transparentPixels = 0;
    
    for (let i = 3; i < imageData.data.length; i += 4) {
        if (imageData.data[i] < 100) {
            transparentPixels++;
        }
    }
    
    clearedPercentage = (transparentPixels / (imageData.data.length / 4)) * 100;
    
    // If 60% cleared, remove overlay
    if (clearedPercentage > 60) {
        fogOverlay.classList.add('hidden');
        setTimeout(() => {
            fogOverlay.style.display = 'none';
        }, 800);
    }
}

// Mouse events
fogOverlay.addEventListener('mousedown', (e) => {
    isDrawing = true;
    brushFog(e.clientX, e.clientY);
});

fogOverlay.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        brushFog(e.clientX, e.clientY);
    }
});

fogOverlay.addEventListener('mouseup', () => {
    isDrawing = false;
});

fogOverlay.addEventListener('mouseleave', () => {
    isDrawing = false;
});

// Touch events for mobile
fogOverlay.addEventListener('touchstart', (e) => {
    isDrawing = true;
    const touch = e.touches[0];
    brushFog(touch.clientX, touch.clientY);
});

fogOverlay.addEventListener('touchmove', (e) => {
    if (isDrawing) {
        const touch = e.touches[0];
        brushFog(touch.clientX, touch.clientY);
    }
});

fogOverlay.addEventListener('touchend', () => {
    isDrawing = false;
});

// Initialize canvas
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

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
    
    // Start hearts animation for Phase 2
    createHearts();
    
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

// Create floating hearts for Phase 2
function createHearts() {
    const heartsBackground = document.getElementById('heartsBackground');
    heartsBackground.innerHTML = '';
    
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    
    // Create hearts
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
        heart.style.fontSize = (Math.random() * 30 + 30) + 'px';
        heartsBackground.appendChild(heart);
    }
    
    // Create flowers
    const flowerSymbols = ['🌸', '🌺', '🌹', '🌷', '💐', '🏵️'];
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDelay = Math.random() * 15 + 's';
        flower.style.animationDuration = (Math.random() * 8 + 10) + 's';
        flower.style.fontSize = (Math.random() * 25 + 25) + 'px';
        heartsBackground.appendChild(flower);
    }
    
    // Start fireworks
    startFireworks();
}

// Fireworks effect
function startFireworks() {
    const heartsBackground = document.getElementById('heartsBackground');
    
    // Create fireworks periodically
    setInterval(() => {
        if (!document.getElementById('phase2').classList.contains('active')) return;
        
        createFirework(heartsBackground);
    }, 2000);
}

function createFirework(container) {
    const colors = ['#ff6b6b', '#ff9ff3', '#feca57', '#ff9f43', '#54a0ff', '#5f27cd'];
    const x = Math.random() * 100;
    const y = Math.random() * 60 + 20;
    
    // Create explosion center
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = x + '%';
    firework.style.top = y + '%';
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(firework);
    
    // Create particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (Math.PI * 2 / 30) * i;
        const distance = Math.random() * 100 + 50;
        const duration = Math.random() * 0.5 + 0.5;
        
        particle.style.animation = `particleExplode ${duration}s ease-out forwards`;
        particle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
        particle.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
        
        // Add custom animation for this particle
        particle.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'ease-out'
        });
        
        container.appendChild(particle);
        
        // Remove after animation
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
    
    // Remove firework after animation
    setTimeout(() => {
        firework.remove();
    }, 1500);
}
