const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const logo = document.getElementById('logo-img')
const updatedScore = document.querySelector('.score')
const submitButton = document.querySelector('.submit')
const progressText = document.querySelector('#progressText');
const progressBarFull = document.querySelector('#progressBarFull');
const progressBar = document.querySelector('#progressBar')
let scoreArray = []
var elementState = ''
let score = 0
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  let currentQuestion = currentQuestionIndex + 1
  setNextQuestion()
  showProgress(currentQuestion)
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  score = 0
  setNextQuestion()
  changeLogoSize()
}

function changeLogoSize() {
  logo.classList.add('hide')
  updatedScore.classList.remove('hide')
  progressBar.classList.remove('hide')
  progressText.classList.remove('hide')
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  elementState = ''
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.value) {
      button.dataset.value = answer.value
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
  updateBlockScore(question.block)
}

function showProgress(currentQuestion) {
    progressText.innerText = `Question ${currentQuestion} of ${50}`
    progressBarFull.style.width = `${(currentQuestion/50) * 100}%`
}


function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
function selectAnswer(e) {
  const selectedButton = e.target
  const value = selectedButton.dataset.value
  setStatusClass(document.body, value)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button)
  })
  updateScore(selectedButton, selectedButton.dataset.value)
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Submit'
    startButton.classList.remove('hide')
    startButton.setAttribute("onclick", "showResults()")
  }
  selectedButton.addEventListener('clicked', () => {
    e.target.classList.add('clicked')
  })
}

function setStatusClass(element) {
  clearStatusClass(element)
}

function updateScore(element, number) {
  while (elementState !== 'clicked') {
    element.classList.add('clicked')
    if (number === undefined) {
      let newScore = score
      newScore = score
    } else {
      let newScore = score += parseInt(number)
      newScore = score
    }
    updatedScore.innerHTML = "Score: " + score
    scoreArray.push(score)
    elementState = 'clicked'
  }
}

function updateBlockScore(questionBlock) {
  //console.log(questionBlock)
}

function showResults() {
  let assessment = document.getElementById('assessment')
  let results = document.getElementById('results')
  let finalScore = document.getElementById('final-score')
  assessment.classList.add('hide')
  results.classList.remove('hide')
  finalScore.innerHTML = "Score: " + scoreArray[scoreArray.length - 1]

  let result = scoreArray[scoreArray.length - 1]
  let arrow = document.getElementById('arrow')
  let youAreHere = document.getElementById('result-text')

  if (result >= -122 && result < -102) {
    arrow.style.transform = "translateX(-265px)"
    youAreHere.style.transform = "translateX(-265px)"
  }

  if (result >= -102 && result < -82) {
    arrow.style.transform = "translateX(-220px)"
    youAreHere.style.transform = "translateX(-220px)"
  }

  if (result >= -82 && result < -62) {
    arrow.style.transform = "translateX(-175px)"
    youAreHere.style.transform = "translateX(-175px)"
  }

  if (result >= -62 && result < -42) {
    arrow.style.transform = "translateX(-130px)"
    youAreHere.style.transform = "translateX(-130px)"
  }

  if (result >= -42 && result < -22) {
    arrow.style.transform = "translateX(-85px)"
    youAreHere.style.transform = "translateX(-85px)"
  }

  if (result >= -22 && result < 0) {
    arrow.style.transform = "translateX(-40px)"
    youAreHere.style.transform = "translateX(-40px)"
  }

  if (result === 0) {
    arrow.style.transform = "translateX(0px)"
    youAreHere.style.transform = "translateX(0px)"
  }

  if (result > 0 && result < 22) {
    arrow.style.transform = "translateX(40px)"
    youAreHere.style.transform = "translateX(40px)"
  }

  if (result >= 22 && result < 42) {
    arrow.style.transform = "translateX(85px)"
    youAreHere.style.transform = "translateX(85px)"
  }

  if (result >= 42 && result < 62) {
    arrow.style.transform = "translateX(130px)"
    youAreHere.style.transform = "translateX(130px)"
  }

  if (result >= 62 && result < 82) {
    arrow.style.transform = "translateX(175px)"
    youAreHere.style.transform = "translateX(175px)"
  }

  if (result >= 82 && result < 102) {
    arrow.style.transform = "translateX(220px)"
    youAreHere.style.transform = "translateX(220px)"
  }

  if (result >= 102 && result < 112) {
    arrow.style.transform = "translateX(265px)"
    youAreHere.style.transform = "translateX(265px)"
  }
}

function clearStatusClass(element) {
  element.classList.remove('clicked')
}

function breakdownResults() {
  let assessment = document.getElementById('assessment')
  let results = document.getElementById('results')
  let breakdown = document.getElementById('breakdown')
  let body = document.getElementById('body')
  body.classList.add('body-auto')
  results.classList.add('hide')
  breakdown.classList.remove('hide')

  boundariesScore = scoreArray[4]
  communicationScore = scoreArray[9] - scoreArray[4]
  trustScore = scoreArray[14] - scoreArray[9]
  freedomScore = scoreArray[19] - scoreArray[14]
  conflictResolutionScore = scoreArray[24] - scoreArray[19]
  compatibilityScore = scoreArray[29] - scoreArray[24]
  respectScore = scoreArray[34] - scoreArray[29]
  honestyScore = scoreArray[39] - scoreArray[34]
  safetyScore = scoreArray[44] - scoreArray[39]
  understandingScore = scoreArray[49] - scoreArray[44]

  showBoundariesResults(boundariesScore)
  showCommunicationResults(communicationScore)
  showTrustResults(trustScore)
  showFreedomResults(freedomScore)
  showConflictResolutionResults(conflictResolutionScore)
  showCompatibilityResults(compatibilityScore)
  showRespectResults(respectScore)
  showHonestyResults(honestyScore)
  showSafetyResults(safetyScore)
  showUnderstandingResults(understandingScore)

  console.log(boundariesScore)
  console.log(communicationScore)
  console.log(trustScore)
  console.log(freedomScore)
  console.log(conflictResolutionScore)
  console.log(compatibilityScore)
  console.log(respectScore)
  console.log(honestyScore)
  console.log(safetyScore)
  console.log(understandingScore)

  let result = scoreArray[scoreArray.length - 1]
  let overallText = document.querySelector('#overall-text')
  let arrow = document.querySelector('.result-arrow')
  let youAreHere = document.querySelector('.result-text')

  if (result >= -122 && result < -102) {
    overallText.style.transform = "translateX(-500px)"
    arrow.style.transform = "translateX(-500px)"
    youAreHere.style.transform = "translateX(-500px)"
  }

  if (result >= -102 && result < -82) {
    overallText.style.transform = "translateX(-417px)"
    arrow.style.transform = "translateX(-417px)"
    youAreHere.style.transform = "translateX(-417px)"
  }

  if (result >= -82 && result < -62) {
    overallText.style.transform = "translateX(-334px)"
    arrow.style.transform = "translateX(-334px)"
    youAreHere.style.transform = "translateX(-334px)"
  }

  if (result >= -62 && result < -42) {
    overallText.style.transform = "translateX(-251px)"
    arrow.style.transform = "translateX(-251px)"
    youAreHere.style.transform = "translateX(-251px)"
  }

  if (result >= -42 && result < -22) {
    overallText.style.transform = "translateX(-168px)"
    arrow.style.transform = "translateX(-168px)"
    youAreHere.style.transform = "translateX(-168px)"
  }

  if (result >= -22 && result < 0) {
    overallText.style.transform = "translateX(-85px)"
    arrow.style.transform = "translateX(-85px)"
    youAreHere.style.transform = "translateX(-85px)"
  }

  if (result === 0) {
    overallText.style.transform = "translateX(0px)"
    arrow.style.transform = "translateX(0px)"
    youAreHere.style.transform = "translateX(0px)"
  }

  if (result > 0 && result < 22) {
    overallText.style.transform = "translateX(85px)"
    arrow.style.transform = "translateX(85px)"
    youAreHere.style.transform = "translateX(85px)"
  }

  if (result >= 22 && result < 42) {
    overallText.style.transform = "translateX(168px)"
    arrow.style.transform = "translateX(168px)"
    youAreHere.style.transform = "translateX(168px)"
  }

  if (result >= 42 && result < 62) {
    overallText.style.transform = "translateX(251px)"
    arrow.style.transform = "translateX(251px)"
    youAreHere.style.transform = "translateX(251px)"
  }

  if (result >= 62 && result < 82) {
    overallText.style.transform = "translateX(334px)"
    arrow.style.transform = "translateX(334px)"
    youAreHere.style.transform = "translateX(334px)"
  }

  if (result >= 82 && result < 102) {
    overallText.style.transform = "translateX(417px)"
    arrow.style.transform = "translateX(417px)"
    youAreHere.style.transform = "translateX(417px)"
  }

  if (result >= 102 && result < 112) {
    overallText.style.transform = "translateX(500px)"
    arrow.style.transform = "translateX(500px)"
    youAreHere.style.transform = "translateX(500px)"
  }
}

function showBoundariesResults(boundariesScore) {
  let arrow = document.getElementById('boundaries-mini-arrow')
  let youAreHere = document.getElementById('boundaries-result-text')
  let blockTitle = document.getElementById('boundaries-text')
  if (boundariesScore >= 10 || boundariesScore === 9) {
    arrow.style.transform = "translateX(180px)"
    youAreHere.style.transform = "translateX(180px)"
    blockTitle.style.transform = "translateX(180px)"
  }
  if (boundariesScore === 8 || boundariesScore === 7) {
    arrow.style.transform = "translateX(135px)"
    youAreHere.style.transform = "translateX(135px)"
    blockTitle.style.transform = "translateX(135px)"
  }
  if (boundariesScore === 6 || boundariesScore === 5) {
    arrow.style.transform = "translateX(100px)"
    youAreHere.style.transform = "translateX(100px)"
    blockTitle.style.transform = "translateX(100px)"
  }
  if (boundariesScore === 4 || boundariesScore === 3) {
    arrow.style.transform = "translateX(65px)"
    youAreHere.style.transform = "translateX(65px)"
    blockTitle.style.transform = "translateX(65px)"
  }
  if (boundariesScore === 2 || boundariesScore === 1) {
    arrow.style.transform = "translateX(32px)"
    youAreHere.style.transform = "translateX(32px)"
    blockTitle.style.transform = "translateX(32px)"
  }
  if (boundariesScore === 0) {
    arrow.style.transform = "translateX(0px)"
    youAreHere.style.transform = "translateX(0px)"
    blockTitle.style.transform = "translateX(0px)"
  }
  if (boundariesScore === -1 || boundariesScore === -2) {
    arrow.style.transform = "translateX(-32px)"
    youAreHere.style.transform = "translateX(-32px)"
    blockTitle.style.transform = "translateX(-32px)"
  }
  if (boundariesScore === -3 || boundariesScore === -4) {
    arrow.style.transform = "translateX(-65px)"
    youAreHere.style.transform = "translateX(-65px)"
    blockTitle.style.transform = "translateX(-65px)"
  }
  if (boundariesScore === -5 || boundariesScore === -6 || boundariesScore === -7) {
    arrow.style.transform = "translateX(-100px)"
    youAreHere.style.transform = "translateX(-100px)"
    blockTitle.style.transform = "translateX(-100px)"
  }
  if (boundariesScore === -8 || boundariesScore === -9 || boundariesScore === -10) {
    arrow.style.transform = "translateX(-135px)"
    youAreHere.style.transform = "translateX(-135px)"
    blockTitle.style.transform = "translateX(-135px)"
  }
  if (boundariesScore === -11 || boundariesScore <= -12) {
    arrow.style.transform = "translateX(-180px)"
    youAreHere.style.transform = "translateX(-180px)"
    blockTitle.style.transform = "translateX(-180px)"
  }
}

function showCommunicationResults(communicationScore) {
  let arrow = document.getElementById('communication-mini-arrow')
  let youAreHere = document.getElementById('communication-result-text')
  let blockTitle = document.getElementById('communication-text')
  if (communicationScore >= 10 || communicationScore === 9) {
    arrow.style.transform = "translateX(180px)"
    youAreHere.style.transform = "translateX(180px)"
    blockTitle.style.transform = "translateX(180px)"
  }
  if (communicationScore === 8 || communicationScore === 7) {
    arrow.style.transform = "translateX(135px)"
    youAreHere.style.transform = "translateX(135px)"
    blockTitle.style.transform = "translateX(135px)"
  }
  if (communicationScore === 6 || communicationScore === 5) {
    arrow.style.transform = "translateX(100px)"
    youAreHere.style.transform = "translateX(100px)"
    blockTitle.style.transform = "translateX(100px)"
  }
  if (communicationScore === 4 || communicationScore === 3) {
    arrow.style.transform = "translateX(65px)"
    youAreHere.style.transform = "translateX(65px)"
    blockTitle.style.transform = "translateX(65px)"
  }
  if (communicationScore === 2 || communicationScore === 1) {
    arrow.style.transform = "translateX(32px)"
    youAreHere.style.transform = "translateX(32px)"
    blockTitle.style.transform = "translateX(32px)"
  }
  if (communicationScore === 0) {
    arrow.style.transform = "translateX(0px)"
    youAreHere.style.transform = "translateX(0px)"
    blockTitle.style.transform = "translateX(0px)"
  }
  if (communicationScore === -1 || communicationScore === -2) {
    arrow.style.transform = "translateX(-32px)"
    youAreHere.style.transform = "translateX(-32px)"
    blockTitle.style.transform = "translateX(-32px)"
  }
  if (communicationScore === -3 || communicationScore === -4) {
    arrow.style.transform = "translateX(-65px)"
    youAreHere.style.transform = "translateX(-65px)"
    blockTitle.style.transform = "translateX(-65px)"
  }
  if (communicationScore === -5 || communicationScore === -6) {
    arrow.style.transform = "translateX(-100px)"
    youAreHere.style.transform = "translateX(-100px)"
    blockTitle.style.transform = "translateX(-100px)"
  }
  if (communicationScore === -7 || communicationScore === -8) {
    arrow.style.transform = "translateX(-135px)"
    youAreHere.style.transform = "translateX(-135px)"
    blockTitle.style.transform = "translateX(-135px)"
  }
  if (communicationScore === -9 || communicationScore <= -10) {
    arrow.style.transform = "translateX(-180px)"
    youAreHere.style.transform = "translateX(-180px)"
    blockTitle.style.transform = "translateX(-180px)"
  }
}

function showTrustResults(trustScore) {
  let arrow = document.getElementById('trust-mini-arrow')
  let youAreHere = document.getElementById('trust-result-text')
  let blockTitle = document.getElementById('trust-text')
  if (trustScore >= 10 || trustScore === 9) {
    arrow.style.transform = "translateX(180px)"
    youAreHere.style.transform = "translateX(180px)"
    blockTitle.style.transform = "translateX(180px)"
  }
  if (trustScore === 8 || trustScore === 7) {
    arrow.style.transform = "translateX(135px)"
    youAreHere.style.transform = "translateX(135px)"
    blockTitle.style.transform = "translateX(135px)"
  }
  if (trustScore === 6 || trustScore === 5) {
    arrow.style.transform = "translateX(100px)"
    youAreHere.style.transform = "translateX(100px)"
    blockTitle.style.transform = "translateX(100px)"
  }
  if (trustScore === 4 || trustScore === 3) {
    arrow.style.transform = "translateX(65px)"
    youAreHere.style.transform = "translateX(65px)"
    blockTitle.style.transform = "translateX(65px)"
  }
  if (trustScore === 2 || trustScore === 1) {
    arrow.style.transform = "translateX(32px)"
    youAreHere.style.transform = "translateX(32px)"
    blockTitle.style.transform = "translateX(32px)"
  }
  if (trustScore === 0) {
    arrow.style.transform = "translateX(0px)"
    youAreHere.style.transform = "translateX(0px)"
    blockTitle.style.transform = "translateX(0px)"
  }
  if (trustScore === -1 || trustScore === -2) {
    arrow.style.transform = "translateX(-32px)"
    youAreHere.style.transform = "translateX(-32px)"
    blockTitle.style.transform = "translateX(-32px)"
  }
  if (trustScore === -3 || trustScore === -4) {
    arrow.style.transform = "translateX(-65px)"
    youAreHere.style.transform = "translateX(-65px)"
    blockTitle.style.transform = "translateX(-65px)"
  }
  if (trustScore === -5 || trustScore === -6) {
    arrow.style.transform = "translateX(-100px)"
    youAreHere.style.transform = "translateX(-100px)"
    blockTitle.style.transform = "translateX(-100px)"
  }
  if (trustScore === -7 || trustScore === -8) {
    arrow.style.transform = "translateX(-135px)"
    youAreHere.style.transform = "translateX(-135px)"
    blockTitle.style.transform = "translateX(-135px)"
  }
  if (trustScore === -9 || trustScore <= -10) {
    arrow.style.transform = "translateX(-180px)"
    youAreHere.style.transform = "translateX(-180px)"
    blockTitle.style.transform = "translateX(-180px)"
  }
}

function showFreedomResults(freedomScore) {
  let arrow = document.getElementById('freedom-mini-arrow')
  let youAreHere = document.getElementById('freedom-result-text')
  let blockTitle = document.getElementById('freedom-text')
  if (freedomScore >= 10 || freedomScore === 9) {
    arrow.style.transform = "translateX(180px)"
    youAreHere.style.transform = "translateX(180px)"
    blockTitle.style.transform = "translateX(180px)"
  }
  if (freedomScore === 8 || freedomScore === 7) {
    arrow.style.transform = "translateX(135px)"
    youAreHere.style.transform = "translateX(135px)"
    blockTitle.style.transform = "translateX(135px)"
  }
  if (freedomScore === 6 || freedomScore === 5) {
    arrow.style.transform = "translateX(100px)"
    youAreHere.style.transform = "translateX(100px)"
    blockTitle.style.transform = "translateX(100px)"
  }
  if (freedomScore === 4 || freedomScore === 3) {
    arrow.style.transform = "translateX(65px)"
    youAreHere.style.transform = "translateX(65px)"
    blockTitle.style.transform = "translateX(65px)"
  }
  if (freedomScore === 2 || freedomScore === 1) {
    arrow.style.transform = "translateX(32px)"
    youAreHere.style.transform = "translateX(32px)"
    blockTitle.style.transform = "translateX(32px)"
  }
  if (freedomScore === 0) {
    arrow.style.transform = "translateX(0px)"
    youAreHere.style.transform = "translateX(0px)"
    blockTitle.style.transform = "translateX(0px)"
  }
  if (freedomScore === -1 || freedomScore === -2) {
    arrow.style.transform = "translateX(-32px)"
    youAreHere.style.transform = "translateX(-32px)"
    blockTitle.style.transform = "translateX(-32px)"
  }
  if (freedomScore === -3 || freedomScore === -4) {
    arrow.style.transform = "translateX(-65px)"
    youAreHere.style.transform = "translateX(-65px)"
    blockTitle.style.transform = "translateX(-65px)"
  }
  if (freedomScore === -5 || freedomScore === -6 || freedomScore === -7) {
    arrow.style.transform = "translateX(-100px)"
    youAreHere.style.transform = "translateX(-100px)"
    blockTitle.style.transform = "translateX(-100px)"
  }
  if (freedomScore === -8 || freedomScore === -9 || freedomScore === -10) {
    arrow.style.transform = "translateX(-135px)"
    youAreHere.style.transform = "translateX(-135px)"
    blockTitle.style.transform = "translateX(-135px)"
  }
  if (freedomScore === -11 || freedomScore <= -12) {
    arrow.style.transform = "translateX(-180px)"
    youAreHere.style.transform = "translateX(-180px)"
    blockTitle.style.transform = "translateX(-180px)"
  }
}

function showConflictResolutionResults(conflictResolutionScore) {
  let arrow = document.getElementById('conflict-resolution-mini-arrow')
  let youAreHere = document.getElementById('conflict-resolution-result-text')
  let blockTitle = document.getElementById('conflict-resolution-text')
  if (conflictResolutionScore >= 10 || conflictResolutionScore === 9) {
    arrow.style.transform = "translateX(180px)"
    youAreHere.style.transform = "translateX(180px)"
    blockTitle.style.transform = "translateX(180px)"
  }
  if (conflictResolutionScore === 8 || conflictResolutionScore === 7) {
    arrow.style.transform = "translateX(135px)"
    youAreHere.style.transform = "translateX(135px)"
    blockTitle.style.transform = "translateX(135px)"
  }
  if (conflictResolutionScore === 6 || conflictResolutionScore === 5) {
    arrow.style.transform = "translateX(100px)"
    youAreHere.style.transform = "translateX(100px)"
    blockTitle.style.transform = "translateX(100px)"
  }
  if (conflictResolutionScore === 4 || conflictResolutionScore === 3) {
    arrow.style.transform = "translateX(65px)"
    youAreHere.style.transform = "translateX(65px)"
    blockTitle.style.transform = "translateX(65px)"
  }
  if (conflictResolutionScore === 2 || conflictResolutionScore === 1) {
    arrow.style.transform = "translateX(32px)"
    youAreHere.style.transform = "translateX(32px)"
    blockTitle.style.transform = "translateX(32px)"
  }
  if (conflictResolutionScore === 0) {
    arrow.style.transform = "translateX(0px)"
    youAreHere.style.transform = "translateX(0px)"
    blockTitle.style.transform = "translateX(0px)"
  }
  if (conflictResolutionScore === -1 || conflictResolutionScore === -2) {
    arrow.style.transform = "translateX(-32px)"
    youAreHere.style.transform = "translateX(-32px)"
    blockTitle.style.transform = "translateX(-32px)"
  }
  if (conflictResolutionScore === -3 || conflictResolutionScore === -4) {
    arrow.style.transform = "translateX(-65px)"
    youAreHere.style.transform = "translateX(-65px)"
    blockTitle.style.transform = "translateX(-65px)"
  }
  if (conflictResolutionScore === -5 || conflictResolutionScore === -6) {
    arrow.style.transform = "translateX(-100px)"
    youAreHere.style.transform = "translateX(-100px)"
    blockTitle.style.transform = "translateX(-100px)"
  }
  if (conflictResolutionScore === -7 || conflictResolutionScore === -8) {
    arrow.style.transform = "translateX(-135px)"
    youAreHere.style.transform = "translateX(-135px)"
    blockTitle.style.transform = "translateX(-135px)"
  }
  if (conflictResolutionScore === -9 || conflictResolutionScore <= -10) {
    arrow.style.transform = "translateX(-180px)"
    youAreHere.style.transform = "translateX(-180px)"
    blockTitle.style.transform = "translateX(-180px)"
  }
}

function showCompatibilityResults(compatibilityScore) {
  let arrow = document.getElementById('compatibility-mini-arrow')
  let youAreHere = document.getElementById('compatibility-result-text')
  let blockTitle = document.getElementById('compatibility-text')
  if (compatibilityScore >= 10 || compatibilityScore === 9) {
    arrow.style.transform = "translateX(180px)"
    youAreHere.style.transform = "translateX(180px)"
    blockTitle.style.transform = "translateX(180px)"
  }
  if (compatibilityScore === 8 || compatibilityScore === 7) {
    arrow.style.transform = "translateX(135px)"
    youAreHere.style.transform = "translateX(135px)"
    blockTitle.style.transform = "translateX(135px)"
  }
  if (compatibilityScore === 6 || compatibilityScore === 5) {
    arrow.style.transform = "translateX(100px)"
    youAreHere.style.transform = "translateX(100px)"
    blockTitle.style.transform = "translateX(100px)"
  }
  if (compatibilityScore === 4 || compatibilityScore === 3) {
    arrow.style.transform = "translateX(65px)"
    youAreHere.style.transform = "translateX(65px)"
    blockTitle.style.transform = "translateX(65px)"
  }
  if (compatibilityScore === 2 || compatibilityScore === 1) {
    arrow.style.transform = "translateX(31px)"
    youAreHere.style.transform = "translateX(32px)"
    blockTitle.style.transform = "translateX(32px)"
  }
  if (compatibilityScore === 0) {
    arrow.style.transform = "translateX(0px)"
    youAreHere.style.transform = "translateX(0px)"
    blockTitle.style.transform = "translateX(0px)"
  }
  if (compatibilityScore === -1 || compatibilityScore === -2) {
    arrow.style.transform = "translateX(-32px)"
    youAreHere.style.transform = "translateX(-32px)"
    blockTitle.style.transform = "translateX(-32px)"
  }
  if (compatibilityScore === -3 || compatibilityScore === -4) {
    arrow.style.transform = "translateX(-65px)"
    youAreHere.style.transform = "translateX(-65px)"
    blockTitle.style.transform = "translateX(-65px)"
  }
  if (compatibilityScore === -5 || compatibilityScore === -6) {
    arrow.style.transform = "translateX(-100px)"
    youAreHere.style.transform = "translateX(-100px)"
    blockTitle.style.transform = "translateX(-100px)"
  }
  if (compatibilityScore === -7 || compatibilityScore === -8) {
    arrow.style.transform = "translateX(-135px)"
    youAreHere.style.transform = "translateX(-135px)"
    blockTitle.style.transform = "translateX(-135px)"
  }
  if (compatibilityScore === -9 || compatibilityScore <= -10) {
    arrow.style.transform = "translateX(-180px)"
    youAreHere.style.transform = "translateX(-180px)"
    blockTitle.style.transform = "translateX(-180px)"
  }
}

function showRespectResults(respectScore) {
  let arrow = document.getElementById('respect-mini-arrow')
  let youAreHere = document.getElementById('respect-result-text')
  let blockTitle = document.getElementById('respect-text')
  if (respectScore >= 10 || respectScore === 9) {
    arrow.style.transform = "translateX(180px)"
    youAreHere.style.transform = "translateX(180px)"
    blockTitle.style.transform = "translateX(180px)"
  }
  if (respectScore === 8 || respectScore === 7) {
    arrow.style.transform = "translateX(135px)"
    youAreHere.style.transform = "translateX(135px)"
    blockTitle.style.transform = "translateX(135px)"
  }
  if (respectScore === 6 || respectScore === 5) {
    arrow.style.transform = "translateX(100px)"
    youAreHere.style.transform = "translateX(100px)"
    blockTitle.style.transform = "translateX(100px)"
  }
  if (respectScore === 4 || respectScore === 3) {
    arrow.style.transform = "translateX(65px)"
    youAreHere.style.transform = "translateX(65px)"
    blockTitle.style.transform = "translateX(65px)"
  }
  if (respectScore === 2 || respectScore === 1) {
    arrow.style.transform = "translateX(31px)"
    youAreHere.style.transform = "translateX(32px)"
    blockTitle.style.transform = "translateX(32px)"
  }
  if (respectScore === 0) {
    arrow.style.transform = "translateX(0px)"
    youAreHere.style.transform = "translateX(0px)"
    blockTitle.style.transform = "translateX(0px)"
  }
  if (respectScore === -1 || respectScore === -2) {
    arrow.style.transform = "translateX(-32px)"
    youAreHere.style.transform = "translateX(-32px)"
    blockTitle.style.transform = "translateX(-32px)"
  }
  if (respectScore === -3 || respectScore === -4) {
    arrow.style.transform = "translateX(-65px)"
    youAreHere.style.transform = "translateX(-65px)"
    blockTitle.style.transform = "translateX(-65px)"
  }
  if (respectScore === -5 || respectScore === -6) {
    arrow.style.transform = "translateX(-100px)"
    youAreHere.style.transform = "translateX(-100px)"
    blockTitle.style.transform = "translateX(-100px)"
  }
  if (respectScore === -7 || respectScore === -8) {
    arrow.style.transform = "translateX(-135px)"
    youAreHere.style.transform = "translateX(-135px)"
    blockTitle.style.transform = "translateX(-135px)"
  }
  if (respectScore === -9 || respectScore <= -10) {
    arrow.style.transform = "translateX(-180px)"
    youAreHere.style.transform = "translateX(-180px)"
    blockTitle.style.transform = "translateX(-180px)"
  }
}

function showHonestyResults(honestyScore) {
  let arrow = document.getElementById('honesty-mini-arrow')
  let youAreHere = document.getElementById('honesty-result-text')
  let blockTitle = document.getElementById('honesty-text')
  if (honestyScore >= 10 || honestyScore === 9) {
    arrow.style.transform = "translateX(180px)"
    youAreHere.style.transform = "translateX(180px)"
    blockTitle.style.transform = "translateX(180px)"
  }
  if (honestyScore === 8 || honestyScore === 7) {
    arrow.style.transform = "translateX(135px)"
    youAreHere.style.transform = "translateX(135px)"
    blockTitle.style.transform = "translateX(135px)"
  }
  if (honestyScore === 6 || honestyScore === 5) {
    arrow.style.transform = "translateX(100px)"
    youAreHere.style.transform = "translateX(100px)"
    blockTitle.style.transform = "translateX(100px)"
  }
  if (honestyScore === 4 || honestyScore === 3) {
    arrow.style.transform = "translateX(65px)"
    youAreHere.style.transform = "translateX(65px)"
    blockTitle.style.transform = "translateX(65px)"
  }
  if (honestyScore === 2 || honestyScore === 1) {
    arrow.style.transform = "translateX(31px)"
    youAreHere.style.transform = "translateX(32px)"
    blockTitle.style.transform = "translateX(32px)"
  }
  if (honestyScore === 0) {
    arrow.style.transform = "translateX(0px)"
    youAreHere.style.transform = "translateX(0px)"
    blockTitle.style.transform = "translateX(0px)"
  }
  if (honestyScore === -1 || honestyScore === -2) {
    arrow.style.transform = "translateX(-32px)"
    youAreHere.style.transform = "translateX(-32px)"
    blockTitle.style.transform = "translateX(-32px)"
  }
  if (honestyScore === -3 || honestyScore === -4) {
    arrow.style.transform = "translateX(-65px)"
    youAreHere.style.transform = "translateX(-65px)"
    blockTitle.style.transform = "translateX(-65px)"
  }
  if (honestyScore === -5 || honestyScore === -6) {
    arrow.style.transform = "translateX(-100px)"
    youAreHere.style.transform = "translateX(-100px)"
    blockTitle.style.transform = "translateX(-100px)"
  }
  if (honestyScore === -7 || honestyScore === -8) {
    arrow.style.transform = "translateX(-135px)"
    youAreHere.style.transform = "translateX(-135px)"
    blockTitle.style.transform = "translateX(-135px)"
  }
  if (honestyScore === -9 || honestyScore <= -10) {
    arrow.style.transform = "translateX(-180px)"
    youAreHere.style.transform = "translateX(-180px)"
    blockTitle.style.transform = "translateX(-180px)"
  }
}

function showSafetyResults(safetyScore) {
  let arrow = document.getElementById('safety-mini-arrow')
  let youAreHere = document.getElementById('safety-result-text')
  let blockTitle = document.getElementById('safety-text')
  if (safetyScore >= 12 || safetyScore === 11) {
    arrow.style.transform = "translateX(180px)"
    youAreHere.style.transform = "translateX(180px)"
    blockTitle.style.transform = "translateX(180px)"
  }
  if (safetyScore === 10 || safetyScore === 9 || safetyScore === 8) {
    arrow.style.transform = "translateX(135px)"
    youAreHere.style.transform = "translateX(135px)"
    blockTitle.style.transform = "translateX(135px)"
  }
  if (safetyScore === 7 || safetyScore === 6 || safetyScore === 5) {
    arrow.style.transform = "translateX(100px)"
    youAreHere.style.transform = "translateX(100px)"
    blockTitle.style.transform = "translateX(100px)"
  }
  if (safetyScore === 4 || safetyScore === 3) {
    arrow.style.transform = "translateX(65px)"
    youAreHere.style.transform = "translateX(65px)"
    blockTitle.style.transform = "translateX(65px)"
  }
  if (safetyScore === 2 || safetyScore === 1) {
    arrow.style.transform = "translateX(31px)"
    youAreHere.style.transform = "translateX(32px)"
    blockTitle.style.transform = "translateX(32px)"
  }
  if (safetyScore === 0) {
    arrow.style.transform = "translateX(0px)"
    youAreHere.style.transform = "translateX(0px)"
    blockTitle.style.transform = "translateX(0px)"
  }
  if (safetyScore === -1 || safetyScore === -2 || safetyScore === -3) {
    arrow.style.transform = "translateX(-32px)"
    youAreHere.style.transform = "translateX(-32px)"
    blockTitle.style.transform = "translateX(-32px)"
  }
  if (safetyScore === -4 || safetyScore === -5 || safetyScore === -6) {
    arrow.style.transform = "translateX(-65px)"
    youAreHere.style.transform = "translateX(-65px)"
    blockTitle.style.transform = "translateX(-65px)"
  }
  if (safetyScore === -7 || safetyScore === -8 || safetyScore === -9) {
    arrow.style.transform = "translateX(-100px)"
    youAreHere.style.transform = "translateX(-100px)"
    blockTitle.style.transform = "translateX(-100px)"
  }
  if (safetyScore === -10 || safetyScore === -11 || safetyScore === -12) {
    arrow.style.transform = "translateX(-135px)"
    youAreHere.style.transform = "translateX(-135px)"
    blockTitle.style.transform = "translateX(-135px)"
  }
  if (safetyScore === -13 || safetyScore === -14 || safetyScore <= -15) {
    arrow.style.transform = "translateX(-180px)"
    youAreHere.style.transform = "translateX(-180px)"
    blockTitle.style.transform = "translateX(-180px)"
  }
}

function showUnderstandingResults(understandingScore) {
  let arrow = document.getElementById('understanding-mini-arrow')
  let youAreHere = document.getElementById('understanding-result-text')
  let blockTitle = document.getElementById('understanding-text')
  if (understandingScore >= 10 || understandingScore === 9) {
    arrow.style.transform = "translateX(180px)"
    youAreHere.style.transform = "translateX(180px)"
    blockTitle.style.transform = "translateX(180px)"
  }
  if (understandingScore === 8 || understandingScore === 7) {
    arrow.style.transform = "translateX(135px)"
    youAreHere.style.transform = "translateX(135px)"
    blockTitle.style.transform = "translateX(135px)"
  }
  if (understandingScore === 6 || understandingScore === 5) {
    arrow.style.transform = "translateX(100px)"
    youAreHere.style.transform = "translateX(100px)"
    blockTitle.style.transform = "translateX(100px)"
  }
  if (understandingScore === 4 || understandingScore === 3) {
    arrow.style.transform = "translateX(65px)"
    youAreHere.style.transform = "translateX(65px)"
    blockTitle.style.transform = "translateX(65px)"
  }
  if (understandingScore === 2 || understandingScore === 1) {
    arrow.style.transform = "translateX(31px)"
    youAreHere.style.transform = "translateX(32px)"
    blockTitle.style.transform = "translateX(32px)"
  }
  if (understandingScore === 0) {
    arrow.style.transform = "translateX(0px)"
    youAreHere.style.transform = "translateX(0px)"
    blockTitle.style.transform = "translateX(0px)"
  }
  if (understandingScore === -1 || understandingScore === -2) {
    arrow.style.transform = "translateX(-32px)"
    youAreHere.style.transform = "translateX(-32px)"
    blockTitle.style.transform = "translateX(-32px)"
  }
  if (understandingScore === -3 || understandingScore === -4) {
    arrow.style.transform = "translateX(-65px)"
    youAreHere.style.transform = "translateX(-65px)"
    blockTitle.style.transform = "translateX(-65px)"
  }
  if (understandingScore === -5 || understandingScore === -6) {
    arrow.style.transform = "translateX(-100px)"
    youAreHere.style.transform = "translateX(-100px)"
    blockTitle.style.transform = "translateX(-100px)"
  }
  if (understandingScore === -7 || understandingScore === -8) {
    arrow.style.transform = "translateX(-135px)"
    youAreHere.style.transform = "translateX(-135px)"
    blockTitle.style.transform = "translateX(-135px)"
  }
  if (understandingScore === -9 || understandingScore <= -10) {
    arrow.style.transform = "translateX(-180px)"
    youAreHere.style.transform = "translateX(-180px)"
    blockTitle.style.transform = "translateX(-180px)"
  }
}

const questions = [
  //Boundaries
  {
    block: "Boundaries",
    question: "It is okay for me to look through my partner's private belongings without them knowing.",
    answers: [
      { text: 'Strongly Agree', value: -3 },
      { text: 'Somewhat Agree', value: -2 },
      { text: 'Somewhat Disagree', value: 0},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  {
    block: "Boundaries",
    question: "I am comfortable telling my partner that I don’t like something or that I don’t like being spoken to in a certain way.",
    answers: [
      { text: 'Strongly Agree', value: 3 },
      { text: 'Somewhat Agree', value: 2 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Boundaries",
    question: "I set sexual boundaries and understand when my partner doesn’t want to have sex.",
    answers: [
      { text: 'Strongly Agree', value: 3 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -2},
      { text: 'Strongly Disagree', value: -3}
    ]
  },
  {
    block: "Boundaries",
    question: "When I need time alone...",
    answers: [
      { text: 'I avoid or don’t respond to my partner.', value: -3 },
      { text: 'I tell my partner that I need some time alone and why.', value: 2 },
      { text: 'I keep spending time with my partner.', value: -2},
      { text: 'I lie to my partner and say that I’m busy.', value: -2}
    ]
  },
  {
    block: "Boundaries",
    question: "I put my partner’s wants and needs above my own in order to keep my partner happy.",
    answers: [
      { text: 'Strongly Agree', value: -2 },
      { text: 'Somewhat Agree', value: -1 },
      { text: 'Somewhat Disagree', value: 1},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  //Communication
  {
    block: "Communication",
    question: "When I am upset with my partner, I raise my voice or call them names.",
    answers: [
      { text: 'Strongly Agree', value: -3 },
      { text: 'Somewhat Agree', value: -2 },
      { text: 'Somewhat Disagree', value: 0},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  {
    block: "Communication",
    question: "When I disagree with my partner, I criticize their perspective.",
    answers: [
      { text: 'Strongly Agree', value: -2 },
      { text: 'Somewhat Agree', value: -1 },
      { text: 'Somewhat Disagree', value: 1},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  {
    block: "Communication",
    question: "I can have an open and honest conversation with my partner when we are in disagreement.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Communication",
    question: "When my partner does something that upsets me, I don’t say anything because I would rather not get into an argument.",
    answers: [
      { text: 'Strongly Agree', value: -2 },
      { text: 'Somewhat Agree', value: -1 },
      { text: 'Somewhat Disagree', value: 1},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  {
    block: "Communication",
    question: "I interrupt my partner or try to finish their sentences for them.",
    answers: [
      { text: 'Strongly Agree', value: -2 },
      { text: 'Somewhat Agree', value: -1 },
      { text: 'Somewhat Disagree', value: 0},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  //Trust
  {
    block: "Trust",
    question: "If my partner shares something private with me, I make sure to keep it between us unless I have permission to share. ",
    answers: [
      { text: 'Strongly Agree', value: 3 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -2},
      { text: 'Strongly Disagree', value: -3}
    ]
  },
  {
    block: "Trust",
    question: "Sometimes I am scared of telling my partner things because I don’t want to be judged by them.",
    answers: [
      { text: 'Strongly Agree', value: -2 },
      { text: 'Somewhat Agree', value: -1 },
      { text: 'Somewhat Disagree', value: 1},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  {
    block: "Trust",
    question: "I make promises that I later don’t follow through with.",
    answers: [
      { text: 'Strongly Agree', value: -2 },
      { text: 'Somewhat Agree', value: -1 },
      { text: 'Somewhat Disagree', value: 1},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  {
    block: "Trust",
    question: "I am faithful to my partner when they’re not around.",
    answers: [
      { text: 'Strongly Agree', value: 3 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -2},
      { text: 'Strongly Disagree', value: -3}
    ]
  },
  {
    block: "Trust",
    question: "My words match with my actions, and vice versa.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  //Freedom
  {
    block: "Freedom",
    question: "If my partner ends the relationship, I would...",
    answers: [
      { text: 'Try to understand or see if there’s a resolution.', value: 1 },
      { text: 'Threaten them, hurt them/myself, or damage their property.', value: -4 },
      { text: 'Keep trying to gain access to them.', value: -2},
      { text: 'Stop talking to them', value: 0}
    ]
  },
  {
    block: "Freedom",
    question: "My partner needs to ask me permission in order to see their friends and family, or go somewhere.",
    answers: [
      { text: 'Strongly Agree', value: -3 },
      { text: 'Somewhat Agree', value: -2 },
      { text: 'Somewhat Disagree', value: 0},
      { text: 'Strongly Disagree', value: 3}
    ]
  },
  {
    block: "Freedom",
    question: "I support my partner to explore their interests even if they differ from mine.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Freedom",
    question: "My partner can spend their money as they wish.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 0 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Freedom",
    question: "I keep track of who my partner communicates with.",
    answers: [
      { text: 'Strongly Agree', value: -2 },
      { text: 'Somewhat Agree', value: -1 },
      { text: 'Somewhat Disagree', value: 0},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  //Conflict Resolution
  {
    block: "Conflict Resolution",
    question: "My partner and I are arguing about where to go for date night. How do you resolve this issue?",
    answers: [
      { text: 'I argue until I win.', value: -2 },
      { text: 'I let my partner decide, but I am not happy with the decision.', value: -2 },
      { text: 'I’m okay with going where my partner wants this time and saving my option for another time.', value: 1},
      { text: 'I cancel date night.', value: -2}
    ]
  },
  {
    block: "Conflict Resolution",
    question: "When my partner and I disagree about something, I am more likely to yell at them rather than have a calm discussion.",
    answers: [
      { text: 'Strongly Agree', value: -2 },
      { text: 'Somewhat Agree', value: -1 },
      { text: 'Somewhat Disagree', value: 0},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  {
    block: "Conflict Resolution",
    question: "I try to understand my partner’s perspective without getting defensive.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Conflict Resolution",
    question: "After a conflict, I check in with my partner to see how they’re feeling.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Conflict Resolution",
    question: "When my partner says that I hurt them,...",
    answers: [
      { text: 'I acknowledge the impact of my actions, apologize, and try to never hurt them again.', value: 3 },
      { text: 'I say that I understand, but that I had good intentions.', value: 1 },
      { text: 'I tell them that they’re being sensitive.', value: -3},
      { text: 'I quickly apologize to move away from the conflict.', value: -2}
    ]
  },
  //Compatibility
  {
    block: "Compatibility",
    question: "I am attracted to my partner.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -2},
      { text: 'Strongly Disagree', value: -3}
    ]
  },
  {
    block: "Compatibility",
    question: "I support my partner’s relationships with their friends and family.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Compatibility",
    question: "I respect my partner’s core values, even if I don't agree with them",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Compatibility",
    question: "I enjoy learning about my partner and their passions.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Compatibility",
    question: "I help my partner grow and am a positive influence on their behavior.",
    answers: [
      { text: 'Strongly Agree', value: 3 },
      { text: 'Somewhat Agree', value: 2 },
      { text: 'Somewhat Disagree', value: -2},
      { text: 'Strongly Disagree', value: -3}
    ]
  },
  //Respect
  {
    block: "Respect",
    question: "I appreciate my partner’s efforts and I constantly show them my appreciation.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Respect",
    question: "I understand my own value and will not let my partner treat me or speak to me in a way that is demeaning.",
    answers: [
      { text: 'Strongly Agree', value: 3 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -2},
      { text: 'Strongly Disagree', value: -3}
    ]
  },
  {
    block: "Respect",
    question: "I view my partner as my equal.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 0 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Respect",
    question: "I understand when my partner is busy and I try to lighten their load.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Respect",
    question: "I neglect my partner when I’m around my friends.",
    answers: [
      { text: 'Strongly Agree', value: -3 },
      { text: 'Somewhat Agree', value: -2 },
      { text: 'Somewhat Disagree', value: 0},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  //Honesty
  {
    block: "Honesty",
    question: "I clearly express my intentions and feelings to my partner",
    answers: [
      { text: 'Strongly Agree', value: 3 },
      { text: 'Somewhat Agree', value: 2 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Honesty",
    question: "I encourage my partner to be honest about their feelings rather than sugarcoat them in order to protect my feelings.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Honesty",
    question: "I lie/have lied to my partner.",
    answers: [
      { text: 'Strongly Agree', value: -2 },
      { text: 'Somewhat Agree', value: -1 },
      { text: 'Somewhat Disagree', value: 1},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  {
    block: "Honesty",
    question: "If you cheat on your partner, how do you tell them?",
    answers: [
      { text: 'I tell them as soon as I can.', value: 2 },
      { text: 'I wait until it’s the right time to tell them.', value: 1 },
      { text: 'I don’t tell them because I don’t want them to leave me.', value: -2},
      { text: 'I don’t tell them because I’m scared they will hurt me.', value: -3}
    ]
  },
  {
    block: "Honesty",
    question: "I make excuses when I say/do things that make my partner upset/uncomfortable.",
    answers: [
      { text: 'Strongly Agree', value: -3 },
      { text: 'Somewhat Agree', value: -2 },
      { text: 'Somewhat Disagree', value: 1},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  //Safety
  {
    block: "Safety",
    question: "I let my partner know that I like/love them.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Safety",
    question: "I allow my partner to be their most authentic self.",
    answers: [
      { text: 'Strongly Agree', value: 3 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -3}
    ]
  },
  {
    block: "Safety",
    question: "I have...",
    answers: [
      { text: 'Hit my partner once.', value: -4 },
      { text: 'Hit my partner multiple times.', value: -4 },
      { text: 'Never hit my partner.', value: 3},
      { text: 'Almost hit my partner.', value: -2}
    ]
  },
  {
    block: "Safety",
    question: "I always want the best for my partner.",
    answers: [
      { text: 'Strongly Agree', value: 3 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -2},
      { text: 'Strongly Disagree', value: -3}
    ]
  },
  {
    block: "Safety",
    question: "I criticize my partner or try to change them to fit my image of beauty.",
    answers: [
      { text: 'Strongly Agree', value: -3 },
      { text: 'Somewhat Agree', value: -2 },
      { text: 'Somewhat Disagree', value: 1},
      { text: 'Strongly Disagree', value: 2}
    ]
  },
  //Understanding
  {
    block: "Understanding",
    question: "I share my feelings with my partner and encourage my partner to do the same.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Understanding",
    question: "I am there for my partner when they feel sad, anxious, confused, etc.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Understanding",
    question: "I ask my partner what they want or need instead of assuming.",
    answers: [
      { text: 'Strongly Agree', value: 3 },
      { text: 'Somewhat Agree', value: 2 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  },
  {
    block: "Understanding",
    question: "I try to put myself in my partner’s shoes to better understand what they are feeling.",
    answers: [
      { text: 'Strongly Agree', value: 3 },
      { text: 'Somewhat Agree', value: 2 },
      { text: 'Somewhat Disagree', value: -2},
      { text: 'Strongly Disagree', value: -3}
    ]
  },
  {
    block: "Understanding",
    question: "I don’t make conclusions about my partner until I completely understand them and their feelings.",
    answers: [
      { text: 'Strongly Agree', value: 2 },
      { text: 'Somewhat Agree', value: 1 },
      { text: 'Somewhat Disagree', value: -1},
      { text: 'Strongly Disagree', value: -2}
    ]
  }
]