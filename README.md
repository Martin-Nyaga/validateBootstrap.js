#validateBootstrap.js
A simple javascript + bootstrap validation suite.

#Overview

This is a simple javascript validation suite that works with bootstrap & jQuery. It enables quick and easy front end validation of forms.

#Usage
Download the validateBootstrap.js file and include it in your html __after bootstrap.js and jQuery.js__

In your javascript, use the validation suite on input elements as follows:
```javascript
//replace name_input below with the id of your element

$('#name_input').validate({
  presence : { message:'This field is required'},
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

You may use other jquery selectors too.

For the validation  to work, your input elements must be properly wrapped in the bootstrap `<div class="form-gorup">`.

#Validateable Parameters

| Parameter | Syntax|
|-------|-------|
| Presence  | `presence:true`|
| Length | Either minimum or maximum values (or both) must be provided: `length: { min:value, max:value }` |
| Email | Validates email format: `email:true` |

For each parameter, a `message` option may be passed. For parameters which take a 'true' value, the message alone may be given e.g.
```javascript

$('#name_input').validate({

  //presence:true has been replaced with the message
  presence : { message:'This field is required' },
  length : { min:5, max:55, message:'Length is invalid' }
});

```
##Form.valid()

validateBootstrap.js provides a valid() function to check whether a form is valid. This should be called after all individual 
inputs have been validated.

```javascript
$('#myForm').valid(); //returns true or false
```

#Example Usage

```javascript

	$("#validate").submit(function(event){

		$("[name=name]").validate({
			presence: { message:"You must fill in your name" },
			length:{ min:2 }
		});

		$("[name=email]").validate({
			presence:true,
			length: { min:2, max:55 },
			email: { message: "Your email address must be correctly formatted" }
		});

		$("[name=textarea]").validate({
			presence: { message:"This field is required" },
			length: { min:2, max:5, message:"Must be between 2 and 5 characters" }
		});

		if($("#validate").valid()){
			return true;
		} else {
			event.preventDefault();
		}

	});
	
```