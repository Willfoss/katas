import { describe, test, expect } from 'vitest'
import { alphabeticalOrder } from './alphabetical-solution'

describe('alphabetical order testing', () => {
  test('returns a single string when passed a single string', () => {
    expect(alphabeticalOrder(['H'])).toEqual(['H'])
  })
  test('returns a sorted list of two strings when passed two strings', () => {
    expect(alphabeticalOrder(['B', 'A'])).toEqual(['A', 'B'])
    expect(alphabeticalOrder(['A', 'B'])).toEqual(['A', 'B'])
  })
  test('returns a sorted list of multiple string swhen passed multiple strings', () => {
    expect(alphabeticalOrder(['B', 'A', 'C', 'Z', 'Y'])).toEqual(['A', 'B', 'C', 'Y', 'Z'])
    expect(alphabeticalOrder(['A', 'B', 'Z'])).toEqual(['A', 'B', 'Z'])
  })
})
