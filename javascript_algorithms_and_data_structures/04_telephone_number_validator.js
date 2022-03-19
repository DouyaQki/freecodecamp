function telephoneCheck(str) {
  const regEx = /^(1\s?)?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/g

  return str.match(regEx) !== null
}
