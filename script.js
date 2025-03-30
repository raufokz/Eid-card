// Show Greeting with Name
function showGreeting() {
    let name = document.getElementById("nameInput").value.trim();
    if (name) {
        let greetingText = document.getElementById("greetingText");
        greetingText.querySelector(".name-text").innerText = name;

        document.querySelector(".input-box").style.display = "none";
        document.getElementById("greetingBox").style.display = "block";

        startLanterns();
    } else {
        alert("⚠️ Please enter your name!");
    }
}

// Floating Lantern Animation
function startLanterns() {
    for (let i = 0; i < 10; i++) {
        let lantern = document.createElement('div');
        lantern.classList.add('lantern');
        document.body.appendChild(lantern);
        lantern.style.left = Math.random() * window.innerWidth + 'px';
        lantern.style.animationDuration = (Math.random() * 4 + 3) + 's';

        setTimeout(() => {
            lantern.remove();
        }, 5000);
    }
}



// Share on WhatsApp
function shareOnWhatsApp() {
    let text = document.getElementById("greetingText").innerText;
    let whatsappUrl = "https://wa.me/?text=" + encodeURIComponent(text);
    window.open(whatsappUrl, "_blank");
}
