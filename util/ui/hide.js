export default function hide(selector) {
    const element = document.querySelector(selector);
    element.style.display = "none";
}