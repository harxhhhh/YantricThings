/**
 * vehicleiq-web/login: app.js (sign-in form) and the inline mobile-menu script,
 * wrapped in init functions for onMount(). Logic and variable names unchanged.
 */

import { defaultApiBase, login } from '#lib/api/api.js';
import { clearSession, saveSession } from '#lib/api/session.js';

/** vehicleiq-web/login/app.js */
export function initLogin() {
    clearSession();

  const form = document.getElementById("loginForm");
  const errorMsg = document.getElementById("errorMsg");
  const submitBtn = document.getElementById("submitBtn");
  const apiBaseInput = document.getElementById("apiBase");

  // Always use this site's /api — do not show URL in UI
  const defaultBase = defaultApiBase();
  apiBaseInput.value = defaultBase;

  function setBusy(busy) {
    submitBtn.disabled = busy;
    submitBtn.querySelector(".btn-label").hidden = busy;
    submitBtn.querySelector(".btn-busy").hidden = !busy;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorMsg.hidden = true;
    setBusy(true);

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    try {
      const data = await login(username, password);
      saveSession({
        apiBase: defaultBase,
        token: data.token,
        username: data.username || username,
        role: data.role || "",
      });
      window.location.href = "../portal/";
    } catch (err) {
      errorMsg.textContent = err.message || "Unable to sign in";
      errorMsg.hidden = false;
    } finally {
      setBusy(false);
    }
  });
}

/** vehicleiq-web/login/index.html inline script (mobile menu) */
export function initLoginNav() {
      const navToggle = document.querySelector(".login-nav-toggle");
      const nav = document.querySelector(".login-nav");

      if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
          nav.classList.toggle("open");
          navToggle.classList.toggle("open");
        });
      }
  
}
