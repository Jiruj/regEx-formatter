var phoneNumberString = "49212312222221";

function formatPhoneNumber(phoneNumberString) {

  alert(phoneNumberString);
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

  if (phoneNumberString.match(/\D/g)) {
    return false;
  }
  if (match) {
    var intlCode = match[1] ? "49" : "";
    return [intlCode, match[2], match[3], match[4]].join("");
  }
  if (phone.length >= 17) {
    return false;
  }
  return null;
}

formatPhoneNumber();

Version 2:

function normalize(phone) {
  //normalize string and remove all unnecessary characters
  phone = phone.replace(/[^\d]/g, "");

  //check if number length equals to 10
  if (phone.length >= 17) {
    //reformat and return phone number
    return false
  } else {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1$2$3");

  }

  return null;
}

var phone = '(123)456781195345';
phone = normalize(phone);
alert(phone);
