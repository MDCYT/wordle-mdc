export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['¡Bien hecho!', 'Excelente', 'Yuhu!']
export const GAME_COPIED_MESSAGE = 'Juego copiado al portapapeles'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'No hay suficientes letras'
export const WORD_NOT_FOUND_MESSAGE = 'Palabra no encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  '¡El Modo Difícil solo se puede activar al inicio!'
export const HARD_MODE_DESCRIPTION =
  'Cualquier pista revelada debe usarse en palabras posteriores'
export const HIGH_CONTRAST_MODE_DESCRIPTION =
  'Modo de contraste alto, perfecto para gente con problemas de visión'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La palabra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Deberias usar ${guess} en la posicion ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `La palabra contiene ${letter}`
export const ENTER_TEXT = 'Enviar'
export const DELETE_TEXT = 'Borrar'
export const STATISTICS_TITLE = 'Estadisticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribucion de aciertos'
export const NEW_WORD_TEXT = 'Nueva palabra en'
export const SHARE_TEXT = 'Compartir'
export const TOTAL_TRIES_TEXT = 'Intentos totales'
export const SUCCESS_RATE_TEXT = 'Porcentaje de aciertos'
export const CURRENT_STREAK_TEXT = 'Racha actual'
export const BEST_STREAK_TEXT = 'Mejor racha'
