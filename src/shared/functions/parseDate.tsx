export const parseDate = (dateString: string): Date | null => {
  const parts = dateString.split('/')
  if (parts.length !== 3) {
    return null // Formato de fecha inválido
  }

  const day = parseInt(parts[0])
  const month = parseInt(parts[1]) - 1 // Los meses en JavaScript son indexados desde 0
  const year = parseInt(parts[2])

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return null // Formato de fecha inválido
  }

  return new Date(year, month, day)
}
