function rot13(str) {
  let newStr = []

  str = [...str]

  let arr = [
    ['A', 'N'],
    ['B', 'O'],
    ['C', 'P'],
    ['D', 'Q'],
    ['E', 'R'],
    ['F', 'S'],
    ['G', 'T'],
    ['H', 'U'],
    ['I', 'V'],
    ['J', 'W'],
    ['K', 'X'],
    ['L', 'Y'],
    ['M', 'Z'],
    ['N', 'A'],
    ['O', 'B'],
    ['P', 'C'],
    ['Q', 'D'],
    ['R', 'E'],
    ['S', 'F'],
    ['T', 'G'],
    ['U', 'H'],
    ['V', 'I'],
    ['W', 'J'],
    ['X', 'K'],
    ['Y', 'L'],
    ['Z', 'M'],
    [' ', ' '],
    ['!', '!'],
    ['?', '?'],
    ['.', '.'],
  ]

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (str[i] === arr[j][1]) {
        newStr.push(arr[j][0])
      }
    }
  }

  return newStr.join('')
}