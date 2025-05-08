function openNavmenu() {
    document.querySelector(".sideNavContainer").style.width = "100%";
}

function closeNavMenu() {
    document.querySelector(".sideNavContainer").style.width = "0";
}

document.addEventListener('click', function(event) {
    const sideNavContainer = document.querySelector(".sideNavContainer");
    const sideNavMenuIcon = document.querySelector(".sideNavMenuIcon");
    if (event.target !== sideNavMenuIcon && sideNavContainer.style.width === "250px") {
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