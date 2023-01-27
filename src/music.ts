type TMusicCharFullTone = 'A'|'B'|'C'|'D'|'E'|'F'|'G'
type TMusicCharSharp = TMusicCharFullTone|'A#'|'C#'|'D#'|'F#'|'G#'
type TMusicCharBemole = TMusicCharFullTone|'Ab'|'Bb'|'Db'|'Eb'|'Gb'
type TMusicChar<T = ''> = T extends '#' ? TMusicCharSharp : T extends 'b' ? TMusicCharBemole : TMusicCharSharp|TMusicCharBemole
type TMusicPlain = `${TMusicChar}${TMusicOctave}`
type TMusicOctave = 1|2|3|4|5|6|7|8 | `${''|1|2|3|4|5|6|7|8}`
type TMusicVelocity = number|`${1|0}.${number}`
type TMusicDuration = `${1|2|3|4|5|6|7|8|'.'|'+'}${''|'n'|'b'|'w'|'t'}`
type TMusicNote = {
  plain: TMusicPlain
  char: TMusicChar,
  halftone: TMusicChar,
  octave: TMusicOctave,
  velocity: TMusicVelocity,
  duration: TMusicDuration,
}

const MUSIC_CHARS = ['A','B','C','D','E','F','G']

const isMusicChar = (s: string) => MUSIC_CHARS.includes(s)
const indexOfMusicChar = (s: string) => MUSIC_CHARS.indexOf(s)
const getHalfTone = (char: string) => char + ([0,2,3,5,6].includes(indexOfMusicChar(char)) ? '#' : isMusicChar(char) ? 'b' : '')
const matchPlain = (plain: string): plain is TMusicPlain  => /^[A-G]?[b|#]?[1-8]$/.test(plain)
const matchOctave = (plain: string) => (plain.match(/.+(1-8)$/) || 4) as TMusicOctave
const matchChar = (plain: string) => (plain.match(/^([A-G])/i) || '') as TMusicChar
const INITIAL_NOTE: Partial<TMusicNote> = { octave: 4, duration: '4n', velocity: 1 }


const MUSIC_NOTES = MUSIC_CHARS
  .reduce((acc: any, char) => [...acc, { plain: char, char, halftone: getHalfTone(char), ...INITIAL_NOTE }], []) as TMusicNote[]
