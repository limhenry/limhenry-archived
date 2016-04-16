var app = document.querySelector('#app');
var toast = document.querySelector('#toast')


app.addItem = function(event){
	event.preventDefault();
	var studentID = app.studentID;
	var password = app.password;
	if(!isNaN(parseFloat(studentID)) && isFinite(studentID) && studentID.length == 10 && password != ""){
		var codeFirst = 'javascript:(function(){operatorType = document.getElementsByName("id_type")[0].setAttribute("id", "operatorType");document.getElementById("operatorType").selectedIndex = 4;fmOperatorsUsername = document.getElementsByName("fmOperatorsUsername")[0].setAttribute("id", "fmOperatorsUsername");document.getElementById("fmOperatorsUsername").value = "';
		var codeSecond = '";fmOperatorsPswd = document.getElementsByName("fmOperatorsPswd")[0].setAttribute("id", "fmOperatorsPswd");document.getElementById("fmOperatorsPswd").value = "';
		var codeThird = '";fmOperator_tnc = document.getElementsByName("fmOperator_tnc")[0].setAttribute("id", "fmOperator_tnc");document.getElementById("fmOperator_tnc").checked = true;document.getElementsByClassName("form-group")[17].setAttribute("class", "form-group has-success");document.getElementsByClassName("checkbox")[3].setAttribute("id", "checkbox");document.getElementsByClassName("btn btn-block btn-warning mt-5")[4].click();})();'
		this.$.code.innerHTML = codeFirst + studentID + ".mmu" + codeSecond + password + codeThird;
		app.codeforbookmark = codeFirst + studentID + ".mmu" + codeSecond + password + codeThird;
		this.$.copyToClipboard.disabled = false;
		this.$.DragToBookmark.disabled = false;
	}
	else{
		this.$.errorToast.text = "Invalid Student ID or password. Try again.";
		this.$.errorToast.show();
	}
};

app.copyToClipboard = function(event){
	var emailLink = document.getElementById("code");
	var range = document.createRange();  
	range.selectNode(emailLink);
	window.getSelection().addRange(range);    

	try {  
		var successful = document.execCommand('copy');  
		var msg = successful ? 'successful' : 'unsuccessful';  
		this.$.errorToast.text = "Copied to clipboard";
		this.$.errorToast.show();		
	} catch(err) {  
		this.$.errorToast.text = "Oops, unable to copy";
		this.$.errorToast.show();				
	}  

	window.getSelection().removeAllRanges();
}

app.displayInstalledToast = function() {
	if (!document.querySelector('platinum-sw-cache').disabled) {
		this.$.errorToast.text = "Caching complete! This app will work offline.";
		this.$.errorToast.show();
}

app.dontClickHere = function(){
	this.$.errorToast.text = "Don't click here. Drag this to bookmark";
	this.$.errorToast.show();
}
};