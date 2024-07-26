
const textContainer = document.getElementById('hero-anim-text');

function updateFontVariation(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const width = (75 + (x * 50));
    const weight = 1000 - (1000 * y);
    
    textContainer.style.fontVariationSettings = `'wdth' ${width}, 'wght' ${weight}`;
}

document.addEventListener('mousemove', updateFontVariation);



gsap.registerPlugin(ScrollTrigger);

const percentageElement = document.getElementById('percentage');

gsap.to(percentageElement, {
    innerHTML: 100,
    duration: 5,
    ease: "none",
    scrollTrigger: {
        trigger: "demo-cta",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    },
    onUpdate: function() {
        percentageElement.innerHTML = Math.round(percentageElement.innerHTML);
    }
});

const images = gsap.utils.toArray('.feature');

images.forEach((image, index) => {
    gsap.set(image, { rotation: 0 }); // Ensure images start at 0 rotation

    ScrollTrigger.create({
        trigger: image,
        start: "top center+=100",
        onEnter: () => {
            gsap.to(image, {
                rotation: index % 2 === 0 ? -5 : 5, // Alternate between -5 and 5
                duration: 0.5,
                ease: "power2.out"
            });
        },
        onLeaveBack: () => {
            gsap.to(image, {
                rotation: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    });
});

const wave = document.getElementById('waveAnimation');

function waveAnimation(e) {
    const x = e.clientX / window.innerWidth;
    
    wave.style.animation = `wave 2s linear infinite`;
    wave.style.animationPlayState = 'paused';
    wave.style.animationDelay = `${-x / 10}s`;

    progressText.textContent = `Animation Progress: ${progress.toFixed(2)}%`;
}

document.addEventListener('mousemove', waveAnimation);