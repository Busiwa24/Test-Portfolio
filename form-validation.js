function validation() {
  const form = document.getElementById('form');
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const comment = form.elements.comment.value;
  const message = document.getElementById('message');
  message.innerHTML = '';

