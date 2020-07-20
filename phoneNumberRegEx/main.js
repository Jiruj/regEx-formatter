function normalize(phone, prefix) {

if (phone.match(/^\+.*/)){
    // ersetze plus an erster stelle durch leeren string
    phone = phone.substring(1);
    }

// check auf non digits wenn welche drin return false
if( phone.match(/[^\s\d]/)){
    return false;
    }

if( phone.match(/^00.*/) ){    
  phone = phone.substr(2); // lösche erste zwei zeichen
 }
else if( phone.match(/^(0{1}[^0])(.*)/) ) {
  phone = phone.substr(1); // lösche erstes zeichen
  phone = prefix + phone; // prepend prefix
 }

if (phone.length >= 17) {
   return false;
} else {
  return phone;  
  }
}
var phone = '491523456781235';
phone = normalize(phone);
alert(phone);
