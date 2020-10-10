function displayShippingAddress() {
  // get the shipping address div
  var shippingAddress = document.getElementById('shippingAddressBox');

  // get the current value of the shipping address div's display property
  var displaySetting = shippingAddress.style.display;

  // display shipping address div depending on current state
  if (displaySetting == 'none') {
    shippingAddress.style.display = 'block';
  }
  else {
    shippingAddress.style.display = 'none';
  }
}

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})()