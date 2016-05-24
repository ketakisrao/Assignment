require(['jquery'], function($){
	$(document).ready(function(){
		// var u = [];
		// var user = {};
		// localStorage.setItem("Users", JSON.stringify(u));
		var users = JSON.parse(localStorage.getItem("Users"));
		var table = '<table><tr><th>Sl No.</th><th>First Name</th><th>Last Name</th><th>Email address</th><th>Organization</th></tr>';
		var endTable = '</table>';
		if(users.length>0){
			for(i=0; i<users.length; i++){
				var row = "<tr>";
				row+='<td>'+ (i+1) +'</td>';
				row+='<td>'+ users[i].fname +'</td>';
				row+='<td>'+ users[i].lname +'</td>';
				row+='<td>'+ users[i].emailid +'</td>';
				row+='<td>'+ users[i].orgname +'</td>';
				row+='</tr>';
				table+=row;
			}
			table+=endTable;
			$('.table-wrapper').append(table);
		}
		else{
			$('.table-wrapper').append("There are no records to display!");
		}


		$('#del').click(function(){
			var u = {};
			localStorage.setItem("Users", JSON.stringify(u));
			window.location.reload();
		});
	});
});