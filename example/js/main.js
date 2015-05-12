$(function(){

	$("#validate").submit(function(event){
		event.preventDefault();

		$("[name=name]").validate({
			presence:true,
			length:{ min:2 }
		});

		$("[name=email]").validate({
			presence:true,
			length:{ max:2 }
		});

		$("[name=textarea]").validate({
			presence:true,
			length: { min:2, max:5 }
		});

		console.log($("#validate").valid());
	});

})