const popStart = 7331129715
const growthRate = 1.1
const startDate = '5 Apr 2015 09:00:00'
const startDateSecs = Date.parse(startDate)
const msPerYear = 365.25 * 24 * 60 * 60 * 1000 // 31 557 600 000

const numberFormat = n => {
  // thanks to Val Todorov for this function http://www.irt.org/script/8.htm
  let arr = new Array('0')
  let i = 0
  while (n > 0) {
    arr[i] = '' + (n % 1000)
    n = Math.floor(n / 1000)
    i++
  }
  arr = arr.reverse()
  for (var j in arr)
    if (j > 0)
      // padding zeros
      while (arr[j].length < 3) arr[j] = '0' + arr[j]
  return arr.join()
}

export const newPeoplePerSec =
  Math.round((1000 * popStart * growthRate) / 3153600000) / 1000

export const popNow = () => {
  const now = new Date()
  const timeInt = Math.round(now.getTime() - startDateSecs)
  const growthRatePerc = growthRate / 100
  const population = Math.round(
    popStart * Math.pow(1 + growthRatePerc / msPerYear, timeInt)
  )
  return numberFormat(population)
}
