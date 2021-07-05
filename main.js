document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  console.log(name);
}

function getInputVal(id) {
  try {
    console.log(document.getElementById(id).value);
  } catch (e) {
    console.log(e);
    document.getElementById('errormsg').style.display = 'block';
    return null;
  }
}