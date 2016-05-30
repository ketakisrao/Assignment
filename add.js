require(['jquery'], function($){
	var alpha = /^[a-z]*$/i;
	var alphaspace = /^[a-z ]*$/i;
	var email = /^[A-Z0-9._]*@[A-Z0-9]*\.[A-Z]{2,4}$/i;
	var password = /[^a-z0-9]/i;
	var num = /^[0-9]{6,10}$/;
	var fname = $('input[placeholder="First Name"]');
	var lname = $('input[placeholder="Last Name"]');
	var emailid = $('input[placeholder="Email Address"]');
	var passwd = $('input[placeholder="Password"]');
	var mob = $('input[placeholder="Mobile Phone"]');
	var landline = $('input[placeholder="Landline"]');
	var addr = $('textarea[placeholder="Postal Address"]');
	var orgname = $('input[placeholder="Organization Name"]');
	var cnum = $('input[placeholder="Contact Number"]');
	var orgaddr = $('textarea[placeholder="Org Postal Address"]');
	$(document).ready(function(){
		function saveData(){
			var user = {};
			var u;
			user.fname = fname.val();
			user.lname = lname.val();
			user.emailid = emailid.val();
			user.password = window.btoa(passwd.val());
			user.mobile = mob.val();
			user.landline = landline.val();
			user.address = addr.val();
			user.orgname = orgname.val();
			user.companynumber = cnum.val();
			user.orgaddress = orgaddr.val();
			var t = localStorage.getItem("Users");
			if(t=="{}"||t==""||t==null){
				u=[];
				u[0] = user;

			}
			else{
				u = JSON.parse(t);
				var newLen = u.length;
				u[newLen] = user;
			}
			localStorage.setItem("Users", JSON.stringify(u));
			alert("User saved successfully!");
			window.location.href = "dashboard.html";
			
		}
		function validateUserDetails(){
			var flag= true;
			if(!alpha.test(fname.val())){
				fname.css("border-color", "#ff0000");
				flag = false;
			}
			else{
				fname.css("border-color", "#3498db");
			}
			if(!alpha.test(lname.val())){
				lname.css("border-color", "#ff0000");
				flag = false;
			}
			else{
				lname.css("border-color", "#3498db");
			}
			if(!email.test(emailid.val())){
				emailid.css("border-color", "#ff0000");
				flag = false;
			}
			else{
				emailid.css("border-color", "#3498db");
			}
			var p = passwd.val();
			if(!(/^[a-zA-Z0-9- ]*$/.test(p)) || p==""){
				passwd.css("border-color", "#ff0000");
				flag = false;
			}
			else{
				passwd.css("border-color", "#3498db");
			}
			if(flag){
				$('#userdetails').css("display", "none");
				$('#contactdetails').css("display", "block");
			}
			else{
				alert("Please enter appropriate values!");
			}
		}
		function validateContactDetails(){
			
			var flag= true;
			if(!num.test(mob.val())){
				mob.css("border-color", "#ff0000");
				flag = false;
			}
			else{
				mob.css("border-color", "#3498db");
			}
			if(!num.test(landline.val())){
				landline.css("border-color", "#ff0000");
				flag = false;
			}
			else{
				landline.css("border-color", "#3498db");
			}
			if(addr.val()==""){
				addr.css("border-color", "#ff0000");
				flag = false;
			}
			else{
				addr.css("border-color", "#3498db");
			}
			if(flag){
				$('#contactdetails').css("display", "none");
				$('#companydetails').css("display", "block");
			}
			else{
				alert("Please enter appropriate values!");
			}
		}
		function validateCompanyDetails(){
			var flag= true;
			if(!alphaspace.test(orgname.val())){
				orgname.css("border-color", "#ff0000");
				flag = false;
			}
			else{
				orgname.css("border-color", "#3498db");
			}
			if(!num.test(cnum.val())){
				cnum.css("border-color", "#ff0000");
				flag = false;
			}
			else{
				cnum.css("border-color", "#3498db");
			}
			if(orgaddr.val()==""){
				orgaddr.css("border-color", "#ff0000");
				flag = false;
			}
			else{
				orgaddr.css("border-color", "#3498db");
			}
			if(flag){
				saveData();
			}
			else{
				alert("Please enter appropriate values!");
			}
		}
		$('.btn-sm').click(function(e){
			var txt = $(this).text();
			if($(this).parent().parent().parent().attr("id")=="userdetails"){
				validateUserDetails();
			}
			else if($(this).parent().parent().parent().attr("id")=="contactdetails" && txt=="Next"){
				validateContactDetails();
			}
			else if($(this).parent().parent().parent().attr("id")=="contactdetails" && txt=="Prev"){
				$('#contactdetails').css("display", "none");
				$('#userdetails').css("display", "block");
			}
			else if($(this).parent().parent().parent().attr("id")=="companydetails" && txt=="Save"){
					validateCompanyDetails();
			}
			else if($(this).parent().parent().parent().attr("id")=="companydetails" && txt=="Prev"){
				$('#companydetails').css("display", "none");
				$('#contactdetails').css("display", "block");
			}
		});
	});
});