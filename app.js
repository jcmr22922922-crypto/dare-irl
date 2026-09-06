const dareCard = document.getElementById("dareCard");
const username = document.getElementById("username");
const dareText = document.getElementById("dareText");
const status = document.getElementById("status");

function showDare(name, dare) {
    username.textContent = `@${name}`;
    dareText.textContent = dare;

    dareCard.classList.remove("show");

    // Restart animation
    void dareCard.offsetWidth;

    dareCard.classList.add("show");

    setTimeout(() => {
        dareCard.classList.remove("show");
    }, 10000);
}


// Temporary connection indicator
function setOnline() {
    status.textContent = "ONLINE";
    status.classList.add("online");
}


// TEST DARE
// We'll remove this once Twitch is connected.
setTimeout(() => {

    setOnline();

    showDare(
        "TestViewer",
        "This is a test dare!"
    );

}, 1000);
