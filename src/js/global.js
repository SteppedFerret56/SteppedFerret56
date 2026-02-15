function openNavMenu() {
    const nav = document.querySelector('nav');
    nav.style.width = "100%";
}

function closeNavMenu() {
    const nav = document.querySelector('nav');
    nav.style.width = "0";
}

document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const sideNavMenuIcon = document.querySelector(".sideNavMenuIcon");
    if (event.target !== sideNavMenuIcon && nav.style.width === "250px") {
        closeNavMenu();
    }
});

async function Time() {
    const timeText = document.querySelector('.localTime');
    if (!timeText) return;

    const res = await fetch("https://timeapi.io/api/TimeZone/zone?timeZone=Etc/GMT-8");
    const data = await res.json();

    const date = new Date(data.currentLocalTime);

    const formatted = date.toLocaleTimeString('en-AU', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    timeText.textContent = `My Local Time: ${formatted}`;
}

setInterval(Time, 1000);
Time();