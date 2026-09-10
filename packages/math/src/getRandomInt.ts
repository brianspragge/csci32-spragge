export function getRandomInt({ lowRange, highRange }: { lowRange: number; highRange: number }) {
  lowRange = Math.ceil(lowRange)
  highRange = Math.floor(highRange)
  return Math.floor(Math.random() * (highRange - lowRange + 1)) + lowRange
}
