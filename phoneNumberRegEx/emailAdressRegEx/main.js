function formatMailAdress(mailAdressString) {
	var match = cleaned.match(/[\w\-.]+@([\w-]+\.)+[\w-\.]+/)
	if (match) {
	  var intlCode = (match[1] ? '49' : '')
	  return [intlCode, match[2], match[3], match[4]].join('')
	}
	return null
  }
  
mailAdresslength:

	if (phone.length >= 17 || cleaned.match(/\D/g)) {

        return false;
	}
	
