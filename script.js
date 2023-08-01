const text = document.querySelector('.text-change');

text.addEventListener('mouseenter', function() {
    text.textContent = 'Dolorit sit';
});

text.addEventListener('mouseleave', function() {
  text.textContent = 'Lorem Ipsum';
});
