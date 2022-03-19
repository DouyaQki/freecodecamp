let unidadMonetaria = {
  'ONE HUNDRED': 10000,
  TWENTY: 2000,
  TEN: 1000,
  FIVE: 500,
  ONE: 100,
  QUARTER: 25,
  DIME: 10,
  NICKEL: 5,
  PENNY: 1,
}

function checkCashRegister(price, cash, cid) {
  const base = 100

  let vuelto = cash * base - price * base

  let vueltoTotal = vuelto
  let cidTotal = 0

  let status = ''
  let change = []

  let dineroEnCaja = cid.filter((num) => num[1] !== 0).reverse()

  dineroEnCaja.forEach((elem) => {
    let uniMon = elem[0]
    let valUniMon = Math.round(elem[1] * base)

    cidTotal += valUniMon

    let monto = 0
    while (vuelto >= unidadMonetaria[uniMon] && valUniMon > 0) {
      monto += unidadMonetaria[uniMon]

      vuelto -= unidadMonetaria[uniMon]
      valUniMon -= unidadMonetaria[uniMon]
    }
    if (monto !== 0) {
      change.push([uniMon, monto / base])
    }
  })

  if (vuelto > 0) {
    status = 'INSUFFICIENT_FUNDS'
    change = []
  } else if (vuelto === 0 && vueltoTotal === cidTotal) {
    status = 'CLOSED'
    change = cid
  } else {
    status = 'OPEN'
  }
  return { status: status, change: change }
}
