export function numberToMonth(monthNumber: number): string | null {
  const months = [
    'ENE',
    'FEB',
    'MAR',
    'ABR',
    'MAY',
    'JUN',
    'JUL',
    'AGO',
    'SEP',
    'OCT',
    'NOV',
    'DIC',
  ]

  if (monthNumber < 1 || monthNumber > 12) {
    return null // Número de mes inválido
  }

  return months[monthNumber - 1]
}
