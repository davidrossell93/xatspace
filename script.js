document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById("autoplayAudio");

    // Función para intentar reproducir el audio
    const tryAutoPlay = () => {
        audio.play().then(() => {
            console.log('Reproducción automática exitosa');
            removeInteractionEvents();
        }).catch(error => {
            console.log('Reproducción automática bloqueada', error);
        });
    };

    // Eventos de interacción
    const addInteractionEvents = () => {
        document.addEventListener('click', tryAutoPlay);
        document.addEventListener('touchstart', tryAutoPlay);
    };

    const removeInteractionEvents = () => {
        document.removeEventListener('click', tryAutoPlay);
        document.removeEventListener('touchstart', tryAutoPlay);
    };

    addInteractionEvents();

    // Manejo de la imagen ampliada
    const profileImage = document.getElementById('profileImage');
    const fullScreenContainer = document.getElementById('fullScreenContainer');
    const closeButton = document.querySelector('.close-button');

    profileImage.addEventListener('click', () => {
        fullScreenContainer.style.display = 'flex';
        profileImage.classList.toggle('clicked');
        playClickSound();
    });

    function playClickSound() {
        const clickSound = new Audio('https://raw.githubusercontent.com/davidrossell93/xatspace/main/ampliada.mp3');
        clickSound.play();
    }

    closeButton.addEventListener('click', () => {
        fullScreenContainer.style.display = 'none';
        profileImage.classList.remove('clicked');
    });

    fullScreenContainer.addEventListener('click', (event) => {
        if (event.target === fullScreenContainer) {
            fullScreenContainer.style.display = 'none';
            profileImage.classList.remove('clicked');
        }
    });

    // Configuración de partículas
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
                density: { enable: true, value_area: 800 }
            },
            color: { value: '#ffffff' },
            shape: {
                type: 'circle',
                stroke: { width: 0, color: '#000000' }
            },
            opacity: {
                value: 0.5,
                random: false,
            },
            size: {
                value: 3,
                random: true,
            },
                      line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: { opacity: 1 }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});
