export function redirectTo(url, delay) {
    setTimeout(() => {
        window.location.href = url;
    }, delay);
}