document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const answer = item.querySelector('.faq-answer');
    
    item.addEventListener('click', () => {
      item.classList.toggle('active');
      
      // Toggle the display of the answer
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
});