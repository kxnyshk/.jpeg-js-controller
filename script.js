// JS
const inputs = document.querySelectorAll(".controls .inputs");

inputs.forEach(input => input.addEventListener("input", handleUpdates));
function handleUpdates() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}