function grab(e) {
  return document.getElementById(e);
}

const menu = document.getElementById('burger');
// const options = document.querySelectorAll('option');

menu.addEventListener('click', () => {
  grab('open').style.display = 'none';
  grab('closed').style.display = 'block';
  grab('nav--mobile').style.display = 'block';
});

grab('closed').addEventListener('click', () => {
  grab('open').style.display = 'block';
  grab('closed').style.display = 'none';
  grab('nav--mobile').style.display = 'none';
});
