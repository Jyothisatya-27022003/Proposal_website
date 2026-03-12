// Run everything after page loads
document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("bgMusic");
    const noBtn = document.getElementById("noBtn");

    /* Envelope Open */

    window.openEnvelope = function () {

        document.getElementById("envelopePage").style.display = "none";
        document.getElementById("messagePage").style.display = "flex";

        if (music) {
            music.play().catch(() => {
                console.log("Autoplay blocked until user interaction");
            });
        }

        typeMessage();
    };

    /* Typing Effect */

    const text = "From the moment you came into my life, everything became more beautiful. You are my happiness, my peace, my forever ❤️";
    let i = 0;

    function typeMessage() {

        const typingElement = document.getElementById("typingText");

        if (i < text.length && typingElement) {

            typingElement.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeMessage, 40);
        }
    }

    /* Navigation */

    window.nextSection = function () {

        document.getElementById("messagePage").style.display = "none";
        document.getElementById("storyPage").style.display = "flex";

    };

    window.openGallery = function () {

        document.getElementById("storyPage").style.display = "none";
        document.getElementById("galleryPage").style.display = "flex";

    };

    window.openProposal = function () {

        document.getElementById("galleryPage").style.display = "none";
        document.getElementById("proposalPage").style.display = "flex";

    };

    /* YES Button */

    window.sayYes = function () {

        document.getElementById("proposalPage").style.display = "none";
        document.getElementById("celebration").style.display = "flex";

        // Confetti celebration
        if (typeof confetti === "function") {
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#ff0000', '#ffafcc', '#ff4d6d', '#ffffff']
            });
        }

    };

    /* NO Button Runs Away */

    if (noBtn) {

        noBtn.addEventListener("mouseover", function () {

            const maxX = window.innerWidth - noBtn.clientWidth - 20;
            const maxY = window.innerHeight - noBtn.clientHeight - 20;

            const x = Math.random() * maxX;
            const y = Math.random() * maxY;

            noBtn.style.position = "absolute";
            noBtn.style.left = x + "px";
            noBtn.style.top = y + "px";

        });

    }

});