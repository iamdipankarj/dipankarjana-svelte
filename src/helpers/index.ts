export const getExperienceYears = () => {
  const d1: number = new Date('10/3/2016').getTime()
  const d2: number = new Date().getTime()
  const diffTime = Math.abs(d2 - d1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) / 365
  return diffDays.toFixed(1)
}
