document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("nameInput");
    nameInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            showGreeting();
        }
    });
});

function showGreeting() {
    const name = document.getElementById("nameInput").value.trim();
    if (name) {
        const greetingText = document.getElementById("greetingText");
        greetingText.innerHTML = `Eid Mubarak!`;
        document.querySelector(".input-box").style.display = "none";
        document.getElementById("greetingBox").style.display = "block";
        startLanterns();

        // Send Name to Email (Formspree)
        const formSpreeEndpoint = "https://formspree.io/f/mrbpaywj"; // Replace with your Formspree endpoint
        fetch(formSpreeEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        })
        .then(response => response.json())
        .then(data => console.log("Name Sent to Email:", data))
        .catch(error => console.error("Error:", error));
    } else {
        alert("Please enter your name!");
    }
}

// Floating Lantern Animation
function startLanterns() {
    const lanternInterval = setInterval(() => {
        const lantern = document.createElement('div');
        lantern.classList.add('lantern');
        document.body.appendChild(lantern);

        lantern.style.left = `${Math.random() * window.innerWidth}px`;
        lantern.style.width = `${Math.random() * 15 + 30}px`;
        lantern.style.height = `${Math.random() * 20 + 40}px`;
        lantern.style.animationDuration = `${Math.random() * 4 + 3}s`;

        setTimeout(() => {
            lantern.remove();
        }, 6000);
    }, 1000);

    // Clear interval when not needed
    document.getElementById("greetingBox").addEventListener("mouseleave", () => {
        clearInterval(lanternInterval);
    });
}

// Share on WhatsApp
function shareOnWhatsApp() {
    const greetingTextElement = document.getElementById("greetingText");
    if (greetingTextElement) {
        const name = greetingTextElement.innerText.replace("Eid Mubarak, ", "").trim();
        const message = `Eid Mubarak, ${name}! May your Eid be filled with blessings and joy.`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}%0A${encodeURIComponent(`Check out this greeting card! ${window.location.href}`)}`;
        window.open(whatsappUrl, "_blank");
    }
}

