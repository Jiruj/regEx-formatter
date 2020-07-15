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