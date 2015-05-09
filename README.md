# validateBootstrap.js
A simple javascript bootstrap validation suite.

#Overview

This is a simple javascript validation suite that works with bootstrap & jQuery. It enables quick and easy front end validation of forms.

#Usage
Download the validateBootstrap.js file and include it in your html <b>after bootstrap.js and jQuery.js</b>

In your javascript, use the validation suite on input elements as follows:
<pre>
//replace name_input below with the id of your element

$('#name_input').validate({
  presence : true,
  length : { min:5, max:55 }
});

//you can also identify your element with it's name as follows

$('input[name=email]').validate({
  presence : true,
  email : true
});
</pre>
