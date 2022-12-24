// The steps we follow are:
// 1. Converts a number(integer) to a string.
// 2. Reverses the string.
// 3. Replace the reversed string to a new string with the Regex
// 4. Reverses the new string to get what we want.

// This method is use to reverse a string.
function reverseString(str) {
  return str.split('').reverse().join('')
}

/**
 * @param {string | number}
 */
function GroupDigital(num) {
  const emptyStr = ''
  const group_regex = /\d{3}/g

  // delete extra comma by regex replace.
  const trimComma = (str) => str.replace(/^[,]+|[,]+$/g, emptyStr)

  const str = num + emptyStr
  const [integer, decimal] = str.split('.')

  const conversed = reverseString(integer)

  const grouped = trimComma(
    reverseString(conversed.replace(/\d{3}/g, (match) => `${match},`))
  )

  return !decimal ? grouped : `${grouped}.${decimal}`
}

export default GroupDigital

//console.log(groupDigital(1234567890.1234)) // 1,234,567,890.1234
//console.log(groupDigital(123456)) // 123,456
//console.log(groupDigital('12.000000001')) // 12.000000001
