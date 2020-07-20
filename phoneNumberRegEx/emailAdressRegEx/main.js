function normalize(email) {
  
if (email.match(/^[\w-]+@([\w-]+\.)+[\w-]+/)) {
   return email; 
} else {
  return false; 
  }

}
var email = 'blubbl@ubweb.de';
email = normalize(email);
alert(email);
