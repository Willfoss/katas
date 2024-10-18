export function alphabeticalOrder(strings: string[]) {
  return strings.sort((prev, curr) => (prev > curr ? 1 : -1))
}
