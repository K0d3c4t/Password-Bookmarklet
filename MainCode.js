var password = prompt("Please enter password");  
{ if (password == "test") {
alert("Access Granted" );
window.location.href =  "google.com";} else{ 
if (password != null)  
alert("Access Denied" );}};
/*
function passwordField(){theWindow = window.open('','newwin','width=100,height=100');
if (!theWindow.opener) theWindow.opener=self;Text = '<form ';Text +='onSubmit="var thePassword=this.password.value + \'.html\'; if (thePassword.password.value==test) {
alert(1);
} else {
alert(2);
};self.close();">';
Text += '<input type="password" name="password">';
Text += '<\/form>';    
theWindow.document.open();    
theWindow.document.write(Text);
if (document.getElementById(TEXT).value == "5"){
alert(1);
} else {
alert(2);}
theWindow.document.close();
}
passwordField();
*/



