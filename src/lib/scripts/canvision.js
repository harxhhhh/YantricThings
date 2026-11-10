/**
 * canvision page script, run from onMount().
 *
 * The page only has a #toast element and a #contactBtn button; the demo dashboard that
 * used to live in this file targeted panels that don't exist on the page (and crashed on
 * load), so it was removed — see git history if it is ever needed.
 */
export function initCanvision() {
  const toast = document.getElementById("toast");

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add("show");
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
  }
  window.showToast = showToast;

  document.getElementById("contactBtn")?.addEventListener("click", () => showToast("Contact section ready for your real contact link"));
}
