import { useEffect, useState } from "react"
import { QuizItem } from "./types"
import Input from "@components/Input"
import Button from "@components/Button"
import { v4 as uuidv4 } from 'uuid'
import styled from "@emotion/styled"
import Segment from "@components/Segment"
import Typography from "@components/Text"
import { useTheme } from "@emotion/react"

export const QuizBuilder = () => {

  const [gameName, setGameName] = useState<string>('')
  const [quizData, setQuizData] = useState<QuizItem[]>([])
  const [quizItem, setQuizItem] = useState<QuizItem>({
    id: "",
    q: "",
    choices: [],
    answer: 0
  })

  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    console.log(quizItem)
  }, [quizItem])

  const handleAddQuestion = () => {

    if(quizItem.q.length < 5) return setErrorMessage('Please Enter a Question with at least 5 characters.')

    if(quizItem.q.length < 5) return setErrorMessage('Please Enter a Question with at least 5 characters.')
    if(quizItem.choices.length < 2) return setErrorMessage('You need at least 2 choices.')

    for(let i = 0; i < quizItem.choices.length; i++) {
      if(quizItem.choices[i].length < 1) return setErrorMessage('Please fill out all choices.')
    }

    setQuizData([...quizData, { ...quizItem, id: uuidv4() }])
    setQuizItem({
      id: "",
      q: "",
      choices: [],
      answer: 0
    })
    setErrorMessage('');
  }

  const handleAddChoice = () => {
    if(quizItem.choices.length > 3) return setErrorMessage('You can only have a maximum 4 choices.')
    setQuizItem({ ...quizItem, choices: [...quizItem.choices, ""] })
  }

  const handleExportQuizData = () => {
    if(gameName.length < 1) return setErrorMessage('Please enter a game name.')
    if(quizData.length < 1) return setErrorMessage('Please add at least 1 question.')

    // remove id from every quiz item
    const quizDataWithoutId = quizData.map(quizItem => {
      const { id, ...rest } = quizItem
      return rest
    })

    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify({ title: gameName, quizzes: quizDataWithoutId }))}`
    const link = document.createElement('a')
    link.href = jsonString;
    link.download = `${gameName}-quizes.json`

    link.click()
  }

  return (
    <QuizBuilderContainer>
    <QuizBuilderSection>
      <Input name="game-title" label="Game Name" subtext="Enter your game name." placeholder="My Game" value={gameName} onChange={e => setGameName(e.target.value)} />
      {errorMessage.length > 1 && <ErrorText>{errorMessage}</ErrorText>}
      <QuizQuestionPanel>
        <Segment row align="center" justify="space-between" gap="1rem">
        <Input name="q" label="Question" subtext="Enter the Question" placeholder="How many Heroes are in my Game?"
          value={quizItem.q} onChange={e => setQuizItem({ ...quizItem, q: e.target.value })} />
        <Button onClick={handleAddChoice} css={{
          padding: '0.6rem',
          backgroundColor: 'green',
          color: 'white'
        }}>Add Choice</Button>
        </Segment>
        {quizItem.choices.map((choice, index) => (
          <section css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            alignItems: 'center',
          }}>
          <input type="checkbox" onClick={
              () => setQuizItem({ ...quizItem, answer: index })
            } checked={
              quizItem.answer === index
            } css={{
              ":checked": {
                backgroundColor: 'green'
              }
            }}/>
          <Input key={index} name={`choice-${index}`} label={`Choice ${index + 1}`} subtext={`Enter Choice ${index + 1}`} placeholder={`Choice ${index + 1}`}
            value={choice} onChange={e => {
              const newChoices = [...quizItem.choices]
              newChoices[index] = e.target.value
              setQuizItem({ ...quizItem, choices: newChoices })
            }} />
            <Button onClick={() => setQuizItem({ ...quizItem, choices: quizItem.choices.filter((_, i) => i !== index) })} css={{
              backgroundColor: 'red',
              color: 'white',
              padding: '0.6rem'
            }}>Delete</Button>
          </section>
          
        ))}
      </QuizQuestionPanel>
      <Button onClick={handleAddQuestion}>Submit Question</Button>
    </QuizBuilderSection>
    <QuizQuestionsList>
      { quizData.length > 0 && <Typography variant="lg" weight="semi-bold">Your Created Questions :</Typography>}
      <div css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxHeight: '400px',
        overflowY: 'scroll'
      }}>
      {quizData.map((item) => (
        <QuizQuestionPanel key={item.id}>
          <Typography variant="lg" weight="semi-bold" color={useTheme().text.plain}>{item.q}</Typography>
          {item.choices.map((choice, index) => (
                <div css={{
                  backgroundColor: useTheme().background,
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  border: choice === item.choices[item.answer] ? `1px solid ${useTheme().success}` : `1px solid ${useTheme().background}`,
                }}>
                <Typography variant="md" weight="medium" color={
                  item.choices.indexOf(choice) === item.answer ? useTheme().success : useTheme().text.plain
                }>{choice}</Typography>
                </div>
          ))}
          {/* Edit Button */}
          <Segment row justify="flex-end" gap="1rem">
                        {/* Order up and Order down buttons */}
            {quizData.length > 1 && (
            <>
            <Button onClick={() => {
              const index = quizData.indexOf(item)
              if(index === 0) return
              const newQuizData = [...quizData]
              const temp = newQuizData[index - 1]
              newQuizData[index - 1] = newQuizData[index]
              newQuizData[index] = temp
              setQuizData(newQuizData)
            }} css={{
              marginTop: '1rem',
              backgroundColor: useTheme().background,
              color: 'white',
            }}>↑</Button>
            <Button onClick={() => {
              const index = quizData.indexOf(item)
              if(index === quizData.length - 1) return
              const newQuizData = [...quizData]
              const temp = newQuizData[index + 1]
              newQuizData[index + 1] = newQuizData[index]
              newQuizData[index] = temp
              setQuizData(newQuizData)
            }} css={{
              marginTop: '1rem',
              backgroundColor: useTheme().background,
              color: 'white',
            }}>↓</Button>
            </>
            )}
            <Button onClick={() => {
              setQuizItem({ ...item, id: "" })
              setQuizData(quizData.filter((i) => i.id !== item.id))
            }} css={{
              marginTop: '1rem',
              color: 'white',
            }}>Edit Question</Button>
            {/* Delete Button */}
            <Button onClick={() => setQuizData(quizData.filter((i) => i.id !== item.id))} css={{
              backgroundColor: 'red',
              color: 'white',
              marginTop: '1rem'
            }}>Delete Question</Button>
          </Segment>
          <Typography variant="sm" color={useTheme().text.dim}>{item.id}</Typography>
        </QuizQuestionPanel>
      ))}
      </div>
            { quizData.length > 0 ? 
            <Button onClick={handleExportQuizData} css={{
        backgroundColor: 'green',
        color: 'white',
      }}>Export Quiz Data</Button>
      : <Typography variant="lg" weight="semi-bold">No Questions Added</Typography> }
    </QuizQuestionsList>
    </QuizBuilderContainer>
  )
}

const ErrorText = styled.div`
  color: red;
`

const QuizBuilderSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  flex: 1;
  max-width: 50%;

  @media screen and (max-width: 1280px) {
    max-width: 100%;
  }
`

const QuizQuestionsList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  flex: 1;
  max-width: 50%;
  @media screen and (max-width: 1280px) {
    max-width: 100%;
  }
`

const QuizQuestionPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.foreground};
  padding: 1rem;
  border-radius: 0.5rem;
`

const QuizBuilderContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;  
  gap: 2rem;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    gap: 0;
  }
`

