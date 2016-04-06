$(function () {
	'use strict';
	console.log("ready!");

	$('#contact').submit(function (event) {
		$.ajax({
			url: "https://formspree.io/korchanola@gmail.com",
			method: "POST",
			data: {
				name: firstname.value,
				email: email.value,
				message: msg.value
			},
			dataType: "json"
		}).done(function () {
			alert("Your message has been sent successfully");
			$("#firstname").val("");
			$("#email").val("");
			$("#msg").val("");
		});
		event.preventDefault();
	});
});
