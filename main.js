require(['jquery'], function($){
	$(document).ready(function(){
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
					if(users[i].emailid.toUpperCase()==e.toUpperCase() && window.atob(users[i].password)==p){
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
			else{
				alert("Enter apropriate values");
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