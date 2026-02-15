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

function Time() {
    const utcTimeText = document.querySelector('.localTime');
    let utcString = new Date().toLocaleTimeString('en-AU', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    utcTimeText.textContent = `My local time: ${utcString}`;
}

setInterval(Time, 1000);