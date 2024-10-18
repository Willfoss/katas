import { describe, expect, test } from 'vitest'
import { ceasar } from './ceasar-solution'

describe('ceasar testing', () => {
  test('returns the string exactly when passed a string and a 0 movement', () => {
    const cypher = 'hello i am Will'
    expect(ceasar(cypher, 0)).toBe('hello i am Will')
  })
  test('returns the string moved by one when passed a string and 1', () => {
    const cypher = 'hello i am Will'
    expect(ceasar(cypher, 1)).toBe('igopt o hu Nswx')
  })
  test('returns the string moved by one when passed a string and 1 and recycles around the alpahbet', () => {
    const cypher = 'z'
    expect(ceasar(cypher, 1)).toBe('a')
  })
  test('works for capital letters', () => {
    const cypher = 'Z'
    expect(ceasar(cypher, 1)).toBe('A')
  })
  test('works with example ', () => {
    const cypher = 'I should have known that you would have a perfect answer for me!!!'
    expect(ceasar(cypher, 1)).toBe(
      'J ukszrk pjfp wacld kztn tkr unumf keak h xnbqqph pdjoxl ako kd!!!'
    )
  })
})
