function formatPhoneNumber(phoneNumberString) {
	var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
	var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
	if (match) {
	  var intlCode = (match[1] ? '49' : '')
	  return [intlCode, match[2], match[3], match[4]].join('')
	}
	return null
  }
  
phonenumberlength:

	if (phone.length >= 17 || cleaned.match(/\D/g)) {

        return false;
	}
	
