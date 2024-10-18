export function ceasar(cypher: string, move: number): string {
  const arrayOfChars: string[] = cypher.split('')
  let counter: number = 0
  const convertedCharsArray = arrayOfChars.map(char => {
    const regex = /[a-zA-Z]/g

    if (!regex.test(char)) return char
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      let newCharIndex: number = char.charCodeAt(0) + move + counter
      if (newCharIndex > 122) {
        newCharIndex = 97 + newCharIndex - 123 + counter
      }
      if (move > 0) counter++
      return String.fromCharCode(newCharIndex)
    }
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      let newCharIndex: number = char.charCodeAt(0) + move + counter
      if (newCharIndex > 90) {
        newCharIndex = 65 + newCharIndex - 91 + counter
      }
      if (move > 0) counter++
      return String.fromCharCode(newCharIndex)
    }
  })

  return convertedCharsArray.join('')
}
