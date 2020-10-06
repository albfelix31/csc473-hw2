function displayShippingAddress() {
    // get shippingAddress
    var shippingAddress = document.getElementById('shippingAddressBox');

    // get the current value of the shipping address div's display property
    var displaySetting = shippingAddress.style.display;

    // also get the address checkbox value, so we can change what it says
    var addressCheck = document.getElementById('addressCheck');

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'none') {
      // clock is visible. hide it
      shippingAddress.style.display = 'block';
    }
    else {
      // clock is hidden. show it
      shippingAddress.style.display = 'none';
    }
  }

  function validate() {
    var msg= "", fields = document.getElementById("checkout").getElementsByTagName("input");

    for (var i=0; i < fields.length; i++){
      if (fields[i].value == "") 
        msg += fields[i].title + ' is required. \n';
    }

    if(msg) {
      alert(msg);
      return false;
    }
    else
      return true;
}