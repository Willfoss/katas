import { addNumbers } from './add-all-numbers-solution'
import { describe, test, expect } from 'vitest'

describe('AddNumbersTests', () => {
  test('returns the number when passed just one number', () => {
    expect(addNumbers([4])).toBe(4)
  })
  test('returns the sum of two numbers when passed two numbers', () => {
    expect(addNumbers([4, 6])).toBe(10)
  })
  test('returns the sum of numbers when passed multiple numbers', () => {
    expect(addNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(66)
  })
})
