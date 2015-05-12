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
	var div=el.parents('div.form-group');
	div.removeClass("has-error");
	var span=div.find('.help-block.bs-validate-errors');
	span.html('');
}

function show_errors(el,errors){
	var div=el.parents('div.form-group');
	div.addClass("has-error");
	if (div.children('.help-block.bs-validate-errors').length===0){
		var span=$("<span class='help-block bs-validate-errors'></span>").appendTo(div)
	} else {
		var span=div.find('.help-block.bs-validate-errors');
	}
	errors.forEach(function(i){
		span.append(i);
	})
}

$.fn.validate = function(obj){
	remove_errors(this);
	var val=this.val();
	var errors=[];

	if (obj.hasOwnProperty("presence")){
		var res=validate_presence(val);
		if (res==false){
			var err= "<li>".concat(capitalize(this[0].name)," must be filled</li>")
			errors.push(err);
		}
	}

	if ((obj.hasOwnProperty("length")) && (val.length>0)){
		var len=obj.length;

		if (len.hasOwnProperty("min")){
			var min=len.min;
		} else {
			var min=0;
		}

		if (len.hasOwnProperty("max")){
			var max=len.max;
		} else {
			var max=1000000000;
		}

		res=validate_length(val,min,max);
		if (res==false){
			if (min==0){
				err=  "<li>".concat(capitalize(this[0].name)," must be shorter than ",max," characters</li>")
			} else if (max==1000000000){
				err= "<li>".concat(capitalize(this[0].name)," must be longer than ",min," characters</li>")
			} else {
				err= "<li>".concat(capitalize(this[0].name)," must be longer than ",min," and shorter than ",max," characters</li>")	
			}
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

$.fn.valid = function(){
	var spans=this.find('.bs-validate-errors');
	var valid=true;
	spans.each(function(i){
		var s=$(spans[i]);
		if (!(s.html()=='')){
			valid= false;
			return false;
		}
	});
	return valid;
}