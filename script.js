window.addEventListener('load', function () {
  renderCookieCounter();
});

function cookieClicked() {
  let count = localStorage.getItem('click');
  let integerCount = parseInt(count, 10);
  integerCount = integerCount + 1;
  let countToString = integerCount.toString();
  animateCookie();
  storeCounter(countToString);
  renderCookieCounter();
}

function renderCookieCounter() {
  document.querySelector('#cookie-clicked-n-times').innerHTML =
    localStorage.getItem('click');
}

function storeCounter(countToString) {
  localStorage.setItem('click', countToString);
}

function clearClicked() {
  localStorage.setItem('click', '0');
  renderCookieCounter();
}

function animateCookie() {
  // Extra
  // implement animation
}
