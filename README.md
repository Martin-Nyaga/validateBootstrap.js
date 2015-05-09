# validateBootstrap.js
A simple javascript bootstrap validation suite.

#Overview

This is a simple javascript validation suite that works with bootstrap & jQuery. It enables quick and easy front end validation of forms.

#Usage
Download the validateBootstrap.js file and include it in your html __after bootstrap.js and jQuery.js__

In your javascript, use the validation suite on input elements as follows:
```javascript
//replace name_input below with the id of your element

$('#name_input').validate({
  presence : true,
  length : { min:5, max:55 }
});
```

You can also identify your element with it's name as follows
```javascript
$('input[name=email]').validate({
  presence : true,
  email : true
});
```
</pre>
You may use other jquery selectors too.

For the validation  to work, your input elements must be properly wrapped in the bootstrap `<div class="form-gorup">`, and have a blank `<span class="help-block">` within the div.

#Validateable Parameters

| Parameter | Syntax|
|-------|-------|
| Presence  | `presence:true`|
| Length | Either minimum or maximum values (or both) must be provided: `length: { min:value, max:value }` |
| Email | Validates email format: `email:true` |

