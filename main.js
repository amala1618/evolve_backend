document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name=getInputVal('name');
  var company=getInputVal('company');
  var email=getInputVal('email');
  var phone=getInputVal('phone');
  var message=getInputVal('message');

  console.log(name);
}

function getInputVal(id){
  return document.getElementById(id).value;
}