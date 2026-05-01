function IsValidNumber(phoneNumber) {
    const digitsOnly = phoneNumber.replace(/\D/g, "");

    if (phoneNumber.startsWith("+7") && digitsOnly.length === 11) {
        return true;
    } else {
        return false;
    }
}

console.log(IsValidNumber("+71234567890"));