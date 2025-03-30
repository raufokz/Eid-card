document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nameInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            showGreeting();
        }
    });
});

function showGreeting() {
    let nameInput = document.getElementById("nameInput");
    let name = nameInput.value.trim();

    if (name) {
        document.querySelector(".name-text").innerText = name.toUpperCase();
        document.querySelector(".input-box").style.display = "none";
        document.getElementById("greetingBox").style.display = "block";
        startLanterns();
    } else {
        alert("⚠️ Please enter your name!");
    }
}

// Floating Lantern Animation
function startLanterns() {
    setInterval(() => {
        let lantern = document.createElement('div');
        lantern.classList.add('lantern');
        document.body.appendChild(lantern);

        lantern.style.left = Math.random() * window.innerWidth + 'px';
        lantern.style.width = Math.random() * 15 + 30 + 'px';
        lantern.style.height = Math.random() * 20 + 40 + 'px';
        lantern.style.animationDuration = (Math.random() * 4 + 3) + 's';

        setTimeout(() => {
            lantern.remove();
        }, 6000);
    }, 1000);
}

// Share on WhatsApp
function shareOnWhatsApp() {
    let name = document.querySelector(".name-text").innerText;
    let message = `🌙 Eid Mubarak ${name}! 🎉 May your Eid be filled with blessings and joy.`;
    let whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}%0A${encodeURIComponent(`Check out this greeting card! ${window.location.href}`)}`;
    window.open(whatsappUrl, "_blank");
}

