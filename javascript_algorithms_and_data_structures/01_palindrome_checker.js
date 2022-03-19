function palindrome(str) {
  const regEx = /[a-z\d]+/gi
  let newStr = [...str.toLowerCase().match(regEx)]
    .join("")
    .split("")
    .reverse()
    .join("")

  let newStr2 = [...str.toLowerCase().match(regEx)]
    .join("")

  return newStr === newStr2
}
