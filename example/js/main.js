$(function(){

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

})