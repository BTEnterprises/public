// <li><a href="${INSTAGRAM_URL}" class="icon brands fa-instagram"><span class="label">LABEL</span></a></li>
// <li><a href="${INSTAGRAM_URL}" class="icon brands fa-instagram"><span class="label">LABEL</span></a></li>

// socialIcons.js
const SOCIALS = {
    "fa-x-twitter": {"label": "X", "url": "/redirect?url=https://x.com/Infinitu_Game"},
    "fa-twitch": {"label": "Twitch", "url": "/redirect?url=https://twitch.tv/Infinitum_COD"},
    "fa-facebook": {"label": "Facebook", "url": "/redirect?url=https://facebook.com/"},
    "fa-tiktok": {"label": "TikTok", "url": "/redirect?url=https://www.tiktok.com/@infinitum_gaming?_t=ZP-8wAT5kTxZyJ&_r=1"},
    "fa-instagram": {"label": "Instagram", "url": "/redirect?url=https://www.instagram.com/infinitumgaming1/"},
    "fa-discord": {"label": "Discord", "url": "/redirect?url=https://discord.gg/9FMFwayXNJ"},
};

function renderSocialIcons() {
    return Object.entries(SOCIALS).map(([iconClass, { label, url }]) => {
        return `
            <li><a href="${url}" class="icon brands ${iconClass}"><span class="label">${label}</span></a></li>
        `;
    }).join('');
}


// Function to insert the icons into a specific element
function insertSocialIcons(targetElementId) {
    const targetElement = document.querySelector('.icons');
    if (targetElement) {
        targetElement.innerHTML = renderSocialIcons();
    } else {
        console.error("Element with class 'icons' not found.");
    }
}