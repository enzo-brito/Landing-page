// Scripts para interatividade
document.addEventListener('DOMContentLoaded', function() {
    // Formulário de contato
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Aqui você pode adicionar código para enviar o formulário (usando fetch, AJAX, etc.)
      // Exemplo simples de validação:
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name && email && message) {
        // Aqui você poderia enviar os dados para o backend
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Mensagem:', message);
        alert('Formulário enviado com sucesso!');
        form.reset();
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    });
  });
  