function convertToRoman(num) {
  let romanNum = [...num.toString()].map((num) => parseInt(num))

  const unit = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  const ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  const hundred = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  const thousand = ['M', 'MM', 'MMM']

  const unitLength = romanNum.length === 1
  const tenLength = romanNum.length === 2
  const hundredLength = romanNum.length === 3
  const thousandLength = romanNum.length === 4

  if (unitLength) {
    romanNum.unshift(0, 0, 0)
  }
  if (tenLength) {
    romanNum.unshift(0, 0)
  }
  if (hundredLength) {
    romanNum.unshift(0)
  }

  romanNum[3] = unit[romanNum[3] - 1]
  romanNum[2] = ten[romanNum[2] - 1]
  romanNum[1] = hundred[romanNum[1] - 1]
  romanNum[0] = thousand[romanNum[0] - 1]

  romanNum = romanNum.filter((item) => item).join('')

  return romanNum
}
