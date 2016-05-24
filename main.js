require(['jquery'], function($){
	$(document).ready(function(){
		// var u = [];
		// var user = {};
		// user.fname = "John";
		// user.lname = "Doe";
		// user.emailid = "john.doe@gmail.com";
		// user.orgname = "Infosys";
		// u[0] = user;
		// user = {};
		// user.fname = "Ketaki";
		// user.lname = "Rao";
		// user.emailid = "john.doe@gmail.com";
		// user.orgname = "Ketu";
		// u[1] = user;
		//localStorage.setItem("Users", JSON.stringify(u));
		//console.log(JSON.parse(localStorage.getItem("Users")));
		var email = /[A-Z0-9.]+@[A-Z0-9]+.[A-Z]{2,4}/i;
		function validateDetails(){
			var emailid = $('input[placeholder="Email Address"]');
			var passwd = $('input[placeholder="Password"]');
			var flag = true;
			var auth = false;
			var e = emailid.val();
			var p = passwd.val();
			var users;
			if(!email.test(e)){
				emailid.css("border-color", "#ff0000");
				flag = false;
			}
			else{
				emailid.css("border-color", "#3498db");
			}
			if(p==""){
				passwd.css("border-color", "#ff0000");
				flag = false;
			}
			else{
				passwd.css("border-color", "#3498db");
			}
			if(flag){
				users = JSON.parse(localStorage.getItem("Users"));
				for(i=0; i<users.length; i++){
					if(users[i].emailid==e && window.atob(users[i].password)==p){
						auth = true;
					}
				}
				if(auth){
					window.location.href = "dashboard.html";
				}
				else{
					alert("Authentication Failed!");
				}
			}

		}
		$('.btn-sm').click(function(e){
			var txt = $(this).text();
			if(txt=="Login"){
				validateDetails();
			}
		});
	});
});