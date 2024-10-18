export function addNumbers(numbers: number[]): number {
  return numbers.reduce((total, currentNo) => total + currentNo)
}
