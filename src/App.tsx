import './App.css'
import { Container, Stack, Typography } from '@mui/material'
import { JavaScriptLogo } from './components/icons/JavaScriptLogo'
import Start from './components/Start'
import Game from './components/Game'
import { useQuestionStore } from './store/question'

function App() {
  const questions = useQuestionStore(state => state.questions)

  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography variant="h2" component="h1">
            JavaScript Quizz
          </Typography>
        </Stack>
        {questions.length > 0 ? <Game /> : <Start />}
      </Container>
    </main>
  )
}

export default App
