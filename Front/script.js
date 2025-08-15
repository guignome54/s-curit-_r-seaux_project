// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const statusEl = document.getElementById('form-status');
    if (!form) return;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      statusEl.textContent = "Démonstration: les données ne sont pas envoyées. Votre demande a été simulée avec succès.";
      form.reset();
    });
  });