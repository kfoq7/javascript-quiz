import { Button } from '@mui/material'
import { useQuestionStore } from '../store/question'

const LIMIT_QUESTIONS = 10

export default function Start() {
  const fetchQuestions = useQuestionStore(state => state.fetchQuestions)

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS)
  }

  return (
    <Button onClick={handleClick} variant="contained">
      Get start!
    </Button>
  )
}
