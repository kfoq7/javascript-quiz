import { useQuestionStore } from '../store/question'

export function useQuestionsData() {
  const questions = useQuestionStore(state => state.questions)

  let correct = 0
  let incorrect = 0
  let unanswered = 0

  questions.forEach(question => {
    const { userSelectedAnswer, correctAnswer } = question

    if (userSelectedAnswer === undefined) unanswered++
    else if (userSelectedAnswer === correctAnswer) correct++
    else incorrect++
  })

  return { correct, incorrect, unanswered }
}