// ValidateBootstrap.js 
// v0.9 Beta
// Martin Nyaga
// martinnyaga.com

function capitalize(a){
	return (a.charAt(0).toUpperCase() + a.substring(1));
}

function validate_presence(s){
	if (s.length===0||s===""||s==" "){
		return false;
	} else{
		return true;
	}
}

function validate_length(s, min, max){
	if (s.length<min||s.length>max){
		return false;
	} else{
		return true;
	}
}

function validate_email_format(s){
	var re = /\S+@\S+\.\S+/;
   	return re.test(s);
}

function remove_errors(el){
	div=el.parents('div.form-group');
	div.removeClass("has-error");
	span=div.find('.help-block');
	span.html('');
}

function show_errors(el,errors){
	console.log(errors);
	div=el.parents('div.form-group');
	div.addClass("has-error");
	span=div.find('.help-block');
	errors.forEach(function(i){
		span.append(i);
	})
}

$.fn.validate = function(obj){
	remove_errors(this);
	val=this.val();
	console.log(val.length);
	errors=[];

	if (obj.hasOwnProperty("presence")){
		res=validate_presence(val);
		if (res==false){
			err= "<li>".concat(capitalize(this[0].name)," must be filled</li>")
			errors.push(err);
		}
	}

	if ((obj.hasOwnProperty("length")) && (val.length>0)){
		len=obj.length;

		if (len.hasOwnProperty("min")){
			min=len.min;
		} else {
			min=0;
		}
		if (len.hasOwnProperty("max")){
			max=len.max;
		} else {
			max=1000000000;
		}

		res=validate_length(val,min,max);
		if (res==false){
			err= "<li>".concat(capitalize(this[0].name)," must be longer than ",min," and shorter than ",max," characters</li>")
			errors.push(err);
		}
	}

	if ((obj.hasOwnProperty("email")) && (val.length>0)){
		res=validate_email_format(val);
		if (res==false){
			err= "<li>".concat(capitalize(this[0].name)," must be correctly formatted</li>")
			errors.push(err);
		}
	}

	if (errors.length>0){
		show_errors(this,errors);
		return false;
	}
	return true;
}
