function userLanguageInFiveCharacters() {
  return window.navigator.language
}

function userLanguageInTwoCharacters() {
  var lang = userLanguage()
  var twoCharacters = lang.match(/^.{2}/g)[0]
  return twoCharacters
}

var synth = window.speechSynthesis
var voices = synth.getVoices()

function Speak(languageInFiveCharacters, text) {
  for (var voice of voices) {
    if (voice.lang === language) {
      var utterance = new SpeechSynthesisUtterance(text)
      utterance.voice = voice
      synth.speak(utterance)
    }
  }
}
