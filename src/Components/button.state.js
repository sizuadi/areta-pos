export function buttonStateLoading(buttonId) {
  let button = document.querySelector(buttonId);
  let spinner = document.createElement('span');
  spinner.classList.add("spinner-border");
  spinner.classList.add("spinner-border-sm");
  button.classList.add('disabled');
  button.removeChild(button.childNodes[0]);
  button.appendChild(spinner);
}

export function buttonStateComplete(buttonId, text) {
  let button = document.querySelector(buttonId);

  if (button === null) {
    return;
  }
  
  button.removeChild(button.childNodes[0]);
  button.classList.remove('disabled');
  button.innerHTML = text;
}
