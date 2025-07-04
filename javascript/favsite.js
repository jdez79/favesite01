// 1. Toggle Dark/Light Mode
function toggleDarkMode() {
    document.body.classList.toggle('bg-secondary');
    document.body.classList.toggle('bg-light');
    document.body.classList.toggle('text-white');
    document.body.classList.toggle('text-dark');
  }
  
  // 2. Form Validation Alert
  function validateFormSubmission(event) {
    const inputs = document.querySelectorAll('form input[required], form select[required]');
    for (let input of inputs) {
      if (!input.value.trim()) {
        alert("Please fill out all required fields.");
        event.preventDefault();
        return;
      }
    }
    alert("Thank you for subscribing!");
  }
  
  // 3. Filter Cards by Keyword
  function filterArtCards(keyword) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const title = card.querySelector('.card-title')?.innerText.toLowerCase();
      card.style.display = title.includes(keyword.toLowerCase()) ? 'block' : 'none';
    });
  }
  
  // 4. Highlight Sold-Out Items
  function highlightOutOfStock() {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const statusCell = row.querySelector('td:last-child');
      if (statusCell?.innerText.includes("Out of Stock")) {
        row.classList.add('table-danger');
      }
    });
  }
  
  // 5. Scroll to Top Button
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Example event binding
  window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) form.addEventListener('submit', validateFormSubmission);
  
    highlightOutOfStock();
  });