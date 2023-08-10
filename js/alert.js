import { form } from "./form.js";

export function showErrorAlert(msg) {
  const alert = document.querySelector(".alert");
  if (!alert) {
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.innerHTML = `<span>${msg}</span>`;
    form.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}
