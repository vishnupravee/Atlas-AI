// utils/speak.js
export const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.pitch = 1.2
  utterance.rate = 1.0
  utterance.voice = speechSynthesis.getVoices()[0]
  speechSynthesis.speak(utterance)
}
