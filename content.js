window.addEventListener('keyup', doKeyPress, false);

let search = document.getElementById('search');
search.addEventListener('focus', clearField);

// Something overwrites the focus handler if applied on load,
// so I wait 250ms before blowing whatever that something is.
setTimeout(() => {
  console.log('Triggered timeout')
  let quantityFields = document.getElementsByClassName('quantity');
  for (field of quantityFields) {
    field.addEventListener('focus', clearField);
  }
}, 250);

searchKey = 83; // s
function doKeyPress(e){
  if (e.altKey && e.keyCode == searchKey){
    search.focus();
  }

  if (e.altKey && e.shiftKey && e.keyCode > 48 && e.keyCode < 57) {
    let index = e.keyCode - 49;
    let forms = document.querySelectorAll('form.addToTrolleyForm');
    document.querySelector(`#${forms[index].id} input[type=submit]`).click();
  }
}

function clearField(e) {
  e.target.value = '';
}
